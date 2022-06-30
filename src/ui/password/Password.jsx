import { bool, oneOf, shape, string } from 'prop-types';
import { useState } from 'react';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import { Row } from '../layout';
import styles from './Password.module.scss';

/**
 * Password Component
 * @param {object} inputProps - Props for input component
 * @param {object} iconProps - Props for icon component
 * @param {string} flexDirection - Icon location (row or row-reverse)
 * @param {string} className - Custom classname to control styles
 * @param {boolean} withPreview - Flag to show/hide preview icon
 * @returns {*}
 * @constructor
 */
const Password = ({ iconProps, className, inputProps, withPreview }) => {
  const { flexDirection } = inputProps;
  const [iputType, setIputType] = useState('password');

  const contClasses = [
    styles.Password,
    styles['password-icon'],
    styles[`password-icon-${flexDirection}`],
    className,
  ]
    .join(' ')
    .trim();
  const inputClass = [styles.inputGroupBox, inputProps.className ?? ''].join(' ').trim();

  const handleIconClick = () => {
    iconProps?.onClick();

    /* istanbul ignore else */
    if (withPreview) {
      setIputType(iputType === 'password' ? 'text' : 'password');
    }
  };

  return (
    <Row
      flexDirection={flexDirection}
      alignItems="flex-start"
      flexWrap="nowrap"
      className={contClasses}
    >
      <Input {...inputProps} type={iputType} className={inputClass} />
      {withPreview && (
        <Icon
          iconName="eye"
          {...iconProps}
          role="button"
          tabIndex="0"
          aria-label="Password Preview"
          onClick={handleIconClick}
        />
      )}
    </Row>
  );
};

// Perform Prop Validation
Password.propTypes = {
  withPreview: bool,
  iconProps: shape({}),
  inputProps: shape({ flexDirection: oneOf(['row', 'row-reverse']) }),
  className: string,
};

// Declare default props
Password.defaultProps = {
  withPreview: true,
  iconProps: null,
  inputProps: { flexDirection: 'row' },
  className: '',
};

// Export the component
export default Password;
