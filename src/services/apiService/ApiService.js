import { DEFAULT_FETCH_CONFIG } from '@Configs/FetchConfig';
import { isTypeOf } from '@Utils/Types';

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

/**
 * Construct Request URL
 * @param {string} path - base path bame
 * @param {object} params - params object
 */
const getRequestUrl = (path, params) => {
  let url = path;
  params &&
    Object.keys(params).forEach((key) => {
      /* istanbul ignore else */
      if (params[key]) {
        if (url && url.indexOf('?') < 0) {
          url += '?';
        }
        url += key + '=' + params[key] + '&';
      }
    });

  if (url && url.lastIndexOf('&') === url.length - 1) {
    url = url.substr(0, url.length - 1);
  }

  return url;
};

/**
 *  ApiService Class
 *  @param {object} props
 *  @param {string} props.method - HTTP Method for the request
 *  @param {function} props.getEndPoint - Function to constructs and returns the service endpoint
 *  @param {function} props.getRequestConfig - Function to control any config which are passed in the API call
 *  @param {function} props.getRequestPayload - Function which creates request body
 *  @param {function} props.getResponsePayload - Function to handle success response payload
 *  @param {function} props.getResponseError - Function to find out business errors in success response.
 *  @returns {*} ApiService with default HTTP Methods
 */
class Service {
  constructor(props) {
    this.serviceProps = props;
  }

  getRequestHeaders() {
    //construct default headers
    const headers = { ...DEFAULT_FETCH_CONFIG.headers };

    return headers;
  }

  constructRequestBody(requestPayload) {
    if (isTypeOf(requestPayload, 'object')) {
      try {
        return JSON.stringify(requestPayload);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Error creating the request payload: ', e);
      }
    }

    // if requestPayload type is not object then submit as form data
    return requestPayload;
  }

  handleFailureResponse(eCode, eMessage, serviceResponse = {}) {
    const errResponse = {
      code: eCode || 'API_FAIL',
      message: eMessage || 'Request failed, Please try again later.',
      serviceResponse,
    };

    return Promise.reject(errResponse);
  }

  async handleSuccessResponse(response) {
    //check if response object present
    if (response) {
      const body = await response
        .text()
        // eslint-disable-next-line no-console
        .catch((e) => console.error('Error parsing response payload: ', e));

      //try to parse the response
      let responsePayload;
      try {
        responsePayload = JSON.parse(body);
      } catch (e) {
        responsePayload = body;
      }

      //look for errors in response payload
      if (isTypeOf(this.serviceProps.getResponseError, 'function')) {
        const payloadError = this.serviceProps.getResponseError(responsePayload);
        if (payloadError) {
          return this.handleFailureResponse(
            payloadError.code,
            payloadError.message,
            serviceResponse
          );
        }
      }

      //construct response with headers
      const serviceResponse = {
        headers: response.headers,
        payload: responsePayload,
        responseCode: response.status,
      };

      // resolve promise only if response ends with ok (status code in the range 200 - 299)
      // reject promise if status code >299 or if found any payload errors
      if (response.ok) {
        if (isTypeOf(this.serviceProps.getResponsePayload, 'function')) {
          serviceResponse.payload = this.serviceProps.getResponsePayload(responsePayload);
        }
        return Promise.resolve(serviceResponse);
      } else {
        return this.handleFailureResponse(response.status, response.statusText, serviceResponse);
      }
    }

    //if none of the above fallback to the default error handler
    return this.handleFailureResponse();
  }

  async invoke(data, options = {}) {
    //prepare default config
    let configs = {
      headers: this.getRequestHeaders(options),
      cache: DEFAULT_FETCH_CONFIG.cache,
      async: DEFAULT_FETCH_CONFIG.async,
      timeout: DEFAULT_FETCH_CONFIG.timeout,
      ['max-age']: DEFAULT_FETCH_CONFIG.max_age,
      credentials: 'same-origin', // forward cookie details only if the request is made to same origin
    };

    if (isTypeOf(this.serviceProps.getRequestConfig, 'function')) {
      configs = this.serviceProps.getRequestConfig(data, configs) ?? configs;
    }

    //construct request payload
    let payload = null;
    if (
      isTypeOf(this.serviceProps.getRequestPayload, 'function') &&
      this.serviceProps.method !== HTTP_METHODS.GET &&
      this.serviceProps.method !== HTTP_METHODS.DELETE
    ) {
      payload = this.serviceProps.getRequestPayload(data);
    }

    //construct service endpoint
    let url = '';
    if (this.serviceProps.method === HTTP_METHODS.GET) {
      url = getRequestUrl(this.serviceProps.getEndPoint(data), data);
    } else {
      url = getRequestUrl(this.serviceProps.getEndPoint(data));
    }

    //construct request param
    const reqOptions = {
      ...configs,
      method: this.serviceProps.method,
      body: payload ? this.constructRequestBody(payload) : undefined,
    };

    //fetch request with callbacks
    const fetchApi = fetch || window.fetch;
    // eslint-disable-next-line no-console
    console.info(`Sending request to ${url}`);
    const response = await fetchApi(url, reqOptions).catch(async (e) => {
      // eslint-disable-next-line no-console
      console.error('Fetch Exception in ApiService: ', e);
      return await this.handleFailureResponse();
    });

    //process the response
    return this.handleSuccessResponse(response);
  }
}

export default {
  Service,
  methods: HTTP_METHODS,
};
