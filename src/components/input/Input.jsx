import { bool, func, number, object, oneOfType, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { Row } from '../layout';
import styles from './Input.module.scss';

/**
 * Input Component
 * @param {string} autoComplete - Text autocomplete
 * @param {string} className - Class name to override styles of input
 * @param {boolean} disabled - Input disabled state
 * @param {object} forwardRef - React ref prop
 * @param {string} id - Input tag id
 * @param {string} label - Label
 * @param {number} maxLength - Maximum length for input
 * @param {number} minLength - Minimum length for input
 * @param {string} name - Input tag name
 * @param {function} onBlur - On blur callback after the user typed
 * @param {function} onChange - On change callback while user is typing
 * @param {function} onKeyUp - onkeyup callback function
 * @param {string} placeholder - Input placeholder text
 * @param {string} type - Type of input (Text, number, email, password)
 * @param {string} value - Value of input
 * @param {string} ariaLabel Input tag ariaLabel
 * @param {number} tabIndex Input tag tabIndex for focus element
 * @returns {*}
 * @constructor
 */
const Input = (props) => {
  const {
    autoComplete,
    className,
    disabled,
    forwardRef,
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
        {...(forwardRef && { ref: forwardRef })}
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

// Perform Prop Validation
Input.propTypes = {
  autoComplete: string,
  className: string,
  disabled: bool,
  forwardRef: oneOfType([func, object]),
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

// Declare default props
Input.defaultProps = {
  autoComplete: 'off',
  className: '',
  disabled: false,
  forwardRef: null,
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

// Export the component
export default Input;
