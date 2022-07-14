import RestEndpoints from '@Configs/RestEndPoint';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.LOGIN.VERIFY_OTP;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (data) => {
  return {
    otpToken: data?.Otp,
    id: data?.id,
  };
};

/**
 * Construct response error
 * @param {object} data
 * @return {object}
 */
const prepareResponseError = (response) => {
  if (!response) {
    return {
      code: response?.code,
      message: response?.message,
    };
  }

  return false;
};

/**
 * VerifyOTPService Class
 * @returns {*} VerifyOTPService class instance
 */
class VerifyOTPService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
      getResponseError: prepareResponseError,
    });
  }
}

export default new VerifyOTPService();
