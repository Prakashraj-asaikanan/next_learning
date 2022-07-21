import VerifyOTPService from '@Services/verifyOTPService/VerifyOTPService';
import logger from '@Utils/Logger';
import Button from '@UI/button/Button';
import { Row } from '@UI/layout';
import OTPInput from '@UI/otpInput';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Form } from 'react-final-form';
import { func } from 'prop-types';
import styles from './OtpForm.module.scss';

const OtpForm = ({ handleClick }) => {
  const [Otp, setOtp] = useState(0);
  const { login } = useSelector((state) => state?.login);

  const onSubmit = async () => {
    //creating OTP Request
    if (Otp?.length === 6) {
      const otpRequest = {
        Otp: Otp,
        id: login?.id,
      };

      try {
        await VerifyOTPService.invoke(otpRequest);
        handleClick?.();
      } catch (error) {
        logger.error(error?.message);
      }
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form id="login_form" onSubmit={handleSubmit}>
          <Row justifyContent="flex-start" className={styles.loginOtpInput} rowGap={5}>
            <OTPInput
              autoFocus
              length={6}
              className={styles.otpContainer}
              inputClassName={styles.otpInput}
              onChangeOTP={(otp) => setOtp(otp)}
            />
            <Button
              onClick={handleSubmit}
              disabled={!Otp?.length >= 6}
              action="submit"
              isProcessing={submitting}
            >
              Verify
            </Button>
          </Row>
        </form>
      )}
    />
  );
};

OtpForm.propTypes = {
  handleClick: func.isRequired,
  handleSubmit: func,
};

export default OtpForm;
