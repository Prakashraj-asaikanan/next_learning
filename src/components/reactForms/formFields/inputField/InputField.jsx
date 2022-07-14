import Input from '@UI/input/Input';
import InputGroup from '@UI/inputGroup/InputGroup';
import Typography from '@UI/typography/Typography';
import dynamic from 'next/dynamic';
import { bool, func, object, string } from 'prop-types';
import { Field } from 'react-final-form';
import styles from './InputField.module.scss';

const InputMask = dynamic(() => import('react-input-mask'), { ssr: false });

const InputComp = ({ restProps, ...inputProps }) => {
  const handleOnBlur = (e) => {
    restProps?.onBlur?.(e);
    restProps?.inputProps?.onBlur?.(e);
    inputProps?.onBlur?.(e);
  };

  return restProps?.isInputGroup ? (
    <InputGroup
      {...restProps}
      inputProps={{ ...inputProps, ...restProps.inputProps, onBlur: handleOnBlur }}
    />
  ) : (
    <Input {...restProps} {...inputProps} onBlur={handleOnBlur} />
  );
};

InputComp.propTypes = {
  restProps: object,
};

InputComp.defaultProps = {
  restProps: {},
};

/**
 * InputField Component
 * @param {string} name - Name for input field
 * @param {string} className - Class name to override styles
 * @param {function} validate - Validation functions
 * @param {object} maskProps - Input for Mask Library
 * @param {function} parse - React Final Form prop to parse input values
 * @returns {*}
 * @constructor
 */
const InputField = ({ name, validate, className, parse, maskProps, ...restProps }) => {
  return (
    <Field
      name={name}
      validate={validate}
      format={(value) => value?.trim()}
      formatOnBlur
      {...(parse && { parse: parse })}
    >
      {({ input, meta }) => (
        <div className={`${className} ${meta.touched && meta.error ? styles.error : ''}`}>
          {maskProps ? (
            <InputMask
              {...input}
              {...maskProps}
              onChange={(e) => {
                maskProps?.onChange?.(e);
                input?.onChange?.(e);
                restProps?.onChange?.(e);
              }}
            >
              {(maskProps) => <InputComp {...maskProps} restProps={restProps} />}
            </InputMask>
          ) : (
            <InputComp {...input} restProps={restProps} />
          )}
          {meta.touched && meta.error && (
            <Typography variant="label" theme="error">
              *{meta.error}
            </Typography>
          )}
        </div>
      )}
    </Field>
  );
};

InputField.propTypes = {
  className: string,
  name: string.isRequired,
  validate: func,
  isInputGroup: bool,
  maskProps: object,
  parse: func,
};

InputField.defaultProps = {
  className: '',
  validate: null,
  isInputGroup: false,
  maskProps: null,
  parse: null,
};

export default InputField;
