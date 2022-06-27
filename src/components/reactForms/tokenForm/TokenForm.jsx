import InputField from '@Components/reactForms/formFields/inputField/InputField';
import Button from '@UI/button/Button';
import { Row } from '@UI/layout';
import { Form } from 'react-final-form';
import styles from './TokenForm.module.scss';

const TokenForm = () => {
  const onSubmit = async ({ emailAddress, password }) => {
    onSubmit?.(emailAddress, password);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form id="login_form" onSubmit={handleSubmit}>
          <Row flexDirection="column" rowGap={10}>
            <Row className={styles.loginInput}>
              <span>Mobile Number</span>
              <InputField
                name="emailAddress"
                isInputGroup
                flexDirection="row-reverse"
                className={styles.loginInputBox}
                inputProps={{ placeholder: 'Enter your mobile number' }}
              />

              <Button isProcessing={submitting}>Continue</Button>
            </Row>
          </Row>
        </form>
      )}
    />
  );
};

export default TokenForm;
