let baseURI = process.env.NEXT_PUBLIC_API_BASE_URI;

const RestEndpoints = {
  BASE_URI: baseURI,
  LOGIN: {
    VERIFY_PHONE: `${baseURI}/validation/verifyPhone`,
    VERIFY_OTP: `${baseURI}/validation/verifyOTP`,
  },
};

export default RestEndpoints;
