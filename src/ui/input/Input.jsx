import { bool, func, number, object, oneOfType, string } from 'prop-types';
import { Row } from '../layout';
import styles from './Input.module.scss';

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
        onChange={onChange}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        type={type}
        value={value}
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
