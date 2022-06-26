import { bool, func, number, oneOfType, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { Row } from '../layout';
import styles from './Input.module.scss';

const Input = (props) => {
  const {
    autoComplete,
    className,
    disabled,
    id,
    label,
    maxLength,
    minLength,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyUp,
    placeholder,
    type,
    value,
    ariaLabel,
    tabIndex,
  } = props;

  const [textValue, setTextValue] = useState(value);

  const handleChange = (event) => {
    onChange?.(event);
    setTextValue(event?.target?.value);
  };

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  const inputClass = [
    styles.textboxInput,
    value ? styles.textboxInputToggle : '',
    !label ? styles.textboxInputToggleOff : '',
  ]
    .join(' ')
    .trim();

  return (
    <Row justifyContent="flex-end" className={`${styles.textbox} ${className}`}>
      <input
        autoComplete={autoComplete}
        className={inputClass}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        placeholder={!label ? placeholder : ''}
        type={type}
        value={textValue}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
      />
      {label && (
        <label className={styles.textboxLabel} htmlFor={id}>
          {label}
        </label>
      )}
    </Row>
  );
};

Input.propTypes = {
  autoComplete: string,
  className: string,
  disabled: bool,
  id: string,
  label: string,
  maxLength: number,
  minLength: number,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyUp: func,
  placeholder: string,
  type: string,
  value: oneOfType([string, number]),
  ariaLabel: string,
  tabIndex: number,
};

Input.defaultProps = {
  autoComplete: 'off',
  className: '',
  disabled: false,
  id: null,
  label: '',
  maxLength: 100,
  minLength: 0,
  name: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onKeyUp: null,
  placeholder: '',
  type: 'text',
  value: '',
  ariaLabel: '',
  tabIndex: 0,
};

export default Input;
