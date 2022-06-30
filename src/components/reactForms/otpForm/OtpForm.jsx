import InputField from '@Components/reactForms/formFields/inputField/InputField';
import Button from '@UI/button/Button';
import { Row } from '@UI/layout';
import { Form } from 'react-final-form';
import { func } from 'prop-types';
import styles from './OtpForm.module.scss';

const OtpForm = ({ handleClick, handleSubmit }) => {
  const onSubmit = async (values) => {
    handleSubmit?.(values);
    handleClick?.();
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form id="login_form" onSubmit={handleSubmit}>
          <Row className={styles.loginOtpInput} columnGap={10} rowGap={10}>
            <InputField name="otp" className={styles.loginOtpInputItem} />
            <InputField name="otp1" className={styles.loginOtpInputItem} />
            <InputField name="otp2" className={styles.loginOtpInputItem} />
            <InputField name="otp3" className={styles.loginOtpInputItem} />
            <InputField name="otp4" className={styles.loginOtpInputItem} />
            <InputField name="otp5" className={styles.loginOtpInputItem} />
            <Button action="submit" isProcessing={submitting}>
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
