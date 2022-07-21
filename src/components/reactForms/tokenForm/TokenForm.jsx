import InputField from '@Components/reactForms/formFields/inputField/InputField';
import VerifyPhoneNumberService from '@Services/verifyPhoneNumberService/VerifyPhoneNumber';
import { verifyMobile } from '@Redux/Login';
import logger from '@Utils/Logger';
import Button from '@UI/button/Button';
import { Row } from '@UI/layout';
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import { func } from 'prop-types';
import { parsePhoneNumberInput } from '../helpers/helpers';
import styles from './TokenForm.module.scss';

const TokenForm = ({ handleClick }) => {
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      const response = await VerifyPhoneNumberService.invoke(values);
      if (response?.payload) {
        dispatch(verifyMobile(response?.payload));
      }
    } catch (error) {
      logger.error(error?.message);
    }
    handleClick?.();
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      render={({ handleSubmit, submitting, values }) => (
        <form id="login_form" onSubmit={handleSubmit}>
          <Row flexDirection="column" rowGap={10}>
            <Row className={styles.loginInput}>
              <InputField
                label="Mobile Number"
                name="phoneNumber"
                // validate={FieldValidator([required(), phoneNumber()], 'phone number')}
                autoComplete="on"
                type="tel"
                className={styles.loginInputBox}
                parse={parsePhoneNumberInput}
                maskProps={{
                  mask: '+1 999 999-9999',
                  formatChars: { 9: '[0-9]', N: '[2-9]' },
                }}
              />
              <Button
                disabled={!(values?.phoneNumber?.length >= 10)}
                onClick={handleSubmit}
                action="submit"
                isProcessing={submitting}
              >
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
