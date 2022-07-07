import RestEndpoints from '@Configs/RestEndPoint';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.RECEPTIONIST.UPDATE_TOKEN_STATUS;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (data) => {
  return {
    hospital_id: data?.hospital_id,
    user_type: data?.user_type,
    isTokenEnabled: data?.isTokenEnabled,
  };
};

/**
 * Construct response error
 * @param {object} data
 * @return {object}
 */
const prepareResponseError = (response) => {
  // if (!response || !response?.success) {
  //   const erroNode = response?.errors?.[0];
  //   return {
  //     code: erroNode?.code,
  //     message: erroNode?.message,
  //   };
  // }
  if (!response) {
    const erroNode = response?.errors?.[0];
    return {
      code: erroNode ? erroNode?.code : 400,
      status: 'error',
      message: response?.message,
    };
  }
  return false;
};

/**
 * UpdateTokenStatus Class
 * @returns {*} UpdateTokenStatus class instance
 */
class UpdateTokenStatus extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.PUT,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
      getResponseError: prepareResponseError,
    });
  }
}

export default new UpdateTokenStatus();
