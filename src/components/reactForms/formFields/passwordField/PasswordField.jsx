import Password from '@UI/password/Password';
import Typography from '@UI/typography/Typography';
import { func, string } from 'prop-types';
import { Field } from 'react-final-form';
import styles from './PasswordField.module.scss';

/**
 * PasswordField Component
 * @param {string} name - Name for input field
 * @param {function}validate - Validation functions
 * @returns {*}
 * @constructor
 */
const PasswordField = ({ name, label, validate, ...restProps }) => {
  return (
    <>
      <label>{label}</label>
      <Field name={name} validate={validate}>
        {({ input, meta }) => (
          <div className={meta.touched && meta.error ? styles.error : ''}>
            <Password inputProps={{ ...input, ...restProps }} />
            {meta.touched && meta.error && (
              <Typography variant="label" theme="error">
                *{meta.error}
              </Typography>
            )}
          </div>
        )}
      </Field>
    </>
  );
};

PasswordField.propTypes = {
  name: string.isRequired,
  validate: func,
  label: string,
};

export default PasswordField;
