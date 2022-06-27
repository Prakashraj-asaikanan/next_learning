import InputField from '@Components/reactForms/formFields/inputField/InputField';
import PasswordField from '@Components/reactForms/formFields/passwordField/PasswordField';
import Button from '@UI/button/Button';
import { Row } from '@UI/layout';
import LinkButton from '@UI/linkButton/LinkButton';
import { func, shape, string } from 'prop-types';
import { Form } from 'react-final-form';
//import FieldValidator, { email, required } from '../helpers/FieldValidator';

const LoginForm = ({ btnProps, className, handleForgetPasswordClick, loginButtonLabel }) => {
  const onSubmit = async ({ emailAddress, password }) => {
    onSubmit?.(emailAddress, password);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form id="login_form" onSubmit={handleSubmit}>
          <Row className={className} flexDirection="column" rowGap={10}>
            <InputField
              name="emailAddress"
              label="Email address*"
              // validate={FieldValidator([required(), email()], 'email address')}
              id="login_emailAddress"
            />
            <PasswordField
              name="password"
              label="Password*"
              // validate={FieldValidator([required()], 'password')}
              id="login_password"
            />
            <Row justifyContent="space-between" alignItems="flex-start">
              <LinkButton onClick={handleForgetPasswordClick}>Forgot my password</LinkButton>
            </Row>
            <Button {...btnProps} onClick={handleSubmit} isProcessing={submitting}>
              {loginButtonLabel}
            </Button>
          </Row>
        </form>
      )}
    />
  );
};

// Perform Prop Validation
LoginForm.propTypes = {
  btnProps: shape({
    action: string,
    size: string,
  }),
  className: string,
  handleForgetPasswordClick: func.isRequired,
  loginButtonLabel: string,

  onSubmit: func,
};

// Declare default props
LoginForm.defaultProps = {
  btnProps: {
    action: 'submit',
    size: 'small',
  },
  className: '',
  loginButtonLabel: 'Log In',
  onSubmit: null,
};

export default LoginForm;
