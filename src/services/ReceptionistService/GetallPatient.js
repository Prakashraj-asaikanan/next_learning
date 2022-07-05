import RestEndpoints from '@Configs/RestEndPoint';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.RECEPTIONIST.GET_ALL_PATIENT;

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
      code: erroNode?.code,
      message: erroNode?.message,
    };
  }
  return false;
};

/**
 * GetAllPatientService Class
 * @returns {*} GetAllPatientService class instance
 */
class GetAllPatientService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.GET,
      getEndPoint: prepareEndPoint,
      getResponseError: prepareResponseError,
    });
  }
}

export default new GetAllPatientService();
