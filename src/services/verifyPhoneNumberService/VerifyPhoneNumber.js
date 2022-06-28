import RestEndpoints from '@Configs/RestEndPoint';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.LOGIN.VERIFY_PHONE;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (data) => {
  return {
    phone: data?.phoneNumber,
  };
};

/**
 * Construct response error
 * @param {object} data
 * @return {object}
 */
const prepareResponseError = (response) => {
  if (!response || !response?.success) {
    const erroNode = response?.errors?.[0];
    return {
      code: erroNode?.code,
      message: erroNode?.message,
    };
  }

  return false;
};

/**
 * VerifyPhoneNumberService Class
 * @returns {*} VerifyPhoneNumberService class instance
 */
class VerifyPhoneNumberService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
      getResponseError: prepareResponseError,
    });
  }
}

export default new VerifyPhoneNumberService();
