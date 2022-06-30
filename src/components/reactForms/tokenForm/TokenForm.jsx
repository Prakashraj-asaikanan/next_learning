import InputField from '@Components/reactForms/formFields/inputField/InputField';
import { verifyMobileNumber } from '@Redux/reducers/Login';
import Button from '@UI/button/Button';
import { Row } from '@UI/layout';
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import { func } from 'prop-types';
import styles from './TokenForm.module.scss';

const TokenForm = ({ handleClick }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(verifyMobileNumber(values));
    handleClick?.();
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form id="login_form" onSubmit={handleSubmit}>
          <Row flexDirection="column" rowGap={10}>
            <Row className={styles.loginInput}>
              <InputField
                label="Mobile Number"
                name="phoneNumber"
                isInputGroup
                re
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

TokenForm.propTypes = {
  handleClick: func,
};

export default TokenForm;
