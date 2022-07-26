import RestEndpoints from '@Configs/RestEndPoint';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.LOGIN.LOGIN_HOSPITAL;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (data) => {
  return {
    email: data?.email,
    password: data?.password,
    hospital_id: data?.hospital_id,
  };
};

/**
 * Construct response error
 * @param {object} data
 * @return {object}
 */
const prepareResponseError = (response) => {
  if (!response) {
    const erroNode = response?.errors?.[0];
    return {
      code: erroNode?.code,
      message: erroNode?.message,
    };
  }
  return false;
};

/**
 * LoginPatientService Class
 * @returns {*} GetAllPatientService class instance
 */
class LoginPatientService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.POST,
      getEndPoint: prepareEndPoint,
      getResponseError: prepareResponseError,
      getRequestPayload: prepareRequestPayload,
    });
  }
}

export default new LoginPatientService();
