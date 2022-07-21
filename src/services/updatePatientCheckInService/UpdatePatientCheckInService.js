import RestEndpoints from '@Configs/RestEndPoint';
import ApiService from '../apiService/ApiService';

/**
 * Constructs api endpoint url
 * @returns {string} - Endpoint url
 */
const prepareEndPoint = () => RestEndpoints.RECEPTIONIST.PATIENT_CHECK_IN;

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
    isCheckedIn: !data?.isCheckedIn,
  };
};

/**
 * Construct response error
 * @param {object} data
 * @return {object}
 */
const prepareResponseError = (response) => {
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
 * UpdatePatientCheckInService Class
 * @returns {*} UpdatePatientCheckInService class instance
 */
class UpdatePatientCheckInService extends ApiService.Service {
  constructor() {
    super({
      method: ApiService.methods.PUT,
      getEndPoint: prepareEndPoint,
      getRequestPayload: prepareRequestPayload,
      getResponseError: prepareResponseError,
    });
  }
}

export default new UpdatePatientCheckInService();
