let baseURI = process.env.NEXT_PUBLIC_API_BASE_URI;

const RestEndpoints = {
  BASE_URI: baseURI,
  LOGIN: {
    VERIFY_PHONE: `${baseURI}/validation/verifyPhone`,
    VERIFY_OTP: `${baseURI}/validation/verifyOTP`,
  },
  RECEPTIONIST: {
    GET_ALL_PATIENT: `${baseURI}/hospital/getAllBookedToken`,
    PATIENT_CHECK_IN: `${baseURI}/hospital/updateCheckin`,
    CLOSE_HOSPITAL: `${baseURI}/hospital/closeHospital`,
    UPDATE_TOKEN_STATUS: `${baseURI}/hospital/updateTokenStatus`,
  },
};

export default RestEndpoints;
