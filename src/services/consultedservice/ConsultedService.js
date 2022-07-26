import RestEndpoints from '@Configs/RestEndPoint';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.RECEPTIONIST.CONSULTED_SERVICE;

/**
 * Constructs request payload
 * @param {object} data
 * @return {object}
 */
const prepareRequestPayload = (data) => {
  return {
    patient_id: data?.patient_id,
    hospital_id: data?.hospital_id,
    doctor_id: data?.doctor_id,
    isConsulted: data?.isConsulted,
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
      code: erroNode ? erroNode?.code : 400,
      status: 'error',
      message: response?.message,
    };
  }
  return false;
};

/**
 * ConsultedService Class
 * @returns {*} ConsultedService class instance
 */
class ConsultedService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.PUT,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
      getResponseError: prepareResponseError,
    });
  }
}

export default new ConsultedService();
