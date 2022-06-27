import InputField from '@Components/reactForms/formFields/inputField/InputField';
import Button from '@UI/button/Button';
import { Row } from '@UI/layout';
import { Form } from 'react-final-form';
import styles from './OtpForm.module.scss';

const OtpForm = () => {
  const onSubmit = async ({ emailAddress, password }) => {
    onSubmit?.(emailAddress, password);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form id="login_form" onSubmit={handleSubmit}>
          <Row className={styles.loginOtpInput} columnGap={10} rowGap={10}>
            <InputField type="number" className={styles.loginOtpInputItem} />
            <InputField type="number" className={styles.loginOtpInputItem} />
            <InputField type="number" className={styles.loginOtpInputItem} />
            <InputField type="number" className={styles.loginOtpInputItem} />
            <InputField type="number" className={styles.loginOtpInputItem} />
            <InputField type="number" className={styles.loginOtpInputItem} />
            <Button isProcessing={submitting}>Verify</Button>
          </Row>
        </form>
      )}
    />
  );
};

export default OtpForm;
