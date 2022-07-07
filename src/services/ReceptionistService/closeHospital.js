import RestEndpoints from '@Configs/RestEndPoint';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.RECEPTIONIST.CLOSE_HOSPITAL;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (data) => {
  return {
    hospital_id: data?.hospital_id,
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
  if (!response || response?.message === 'No patient details found') {
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
 * CloseHospitalService Class
 * @returns {*} CloseHospitalService class instance
 */
class CloseHospitalService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.PUT,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
      getResponseError: prepareResponseError,
    });
  }
}

export default new CloseHospitalService();
