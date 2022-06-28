import InputField from '@Components/reactForms/formFields/inputField/InputField';
import { verifyMobileNumber } from '@Redux/reducers/SessionInfo';
import Button from '@UI/button/Button';
import { Row } from '@UI/layout';
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import styles from './TokenForm.module.scss';

const TokenForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(verifyMobileNumber(values));
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
                name="phoneNumber"
                isInputGroup
                flexDirection="row-reverse"
                className={styles.loginInputBox}
                inputProps={{ placeholder: 'Enter your mobile number' }}
              />

              <Button action="submit" isProcessing={submitting}>
                Continue
              </Button>
            </Row>
          </Row>
        </form>
      )}
    />
  );
};

export default TokenForm;
