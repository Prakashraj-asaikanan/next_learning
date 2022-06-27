import Typography from '@UI/typography/Typography';
import { bool, oneOf, shape, string } from 'prop-types';
import { useEffect, useState } from 'react';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import { Row } from '../layout';
import styles from './InputGroup.module.scss';

const InputGroup = ({
  iconProps,
  btnProps,
  flexDirection,
  className,
  inputProps,
  inputContent,
}) => {
  const [textValue, setTextValue] = useState(inputProps.value);
  const prefix = Object.keys(iconProps)?.length ? 'icon' : 'button';

  const contClasses = [
    styles.inputGroup,
    styles[`input-group-${prefix}`],
    styles[`input-group-${prefix}-${flexDirection}`],
    className,
  ]
    .join(' ')
    .trim();
  const inputClass = [styles.inputGroupBox, inputProps.className ?? ''].join(' ').trim();

  const handleChange = (event) => {
    inputProps?.onChange?.(event?.target?.value);
    setTextValue(event?.target?.value);
  };

  const handleClick = () => {
    iconProps?.onClick?.(textValue);
    btnProps?.onClick?.(textValue);
  };

  const renderChildren = () => {
    if (!inputContent) {
      if (Object.keys(iconProps)?.length) {
        return <Icon {...iconProps} onClick={handleClick} />;
      } else {
        return (
          <Button {...btnProps} onClick={handleClick}>
            {btnProps.btnlabel}
          </Button>
        );
      }
    } else {
      return (
        <Row justifyContent="center" alignItems="center" className={styles.inputGroupContent}>
          <Typography variant="p"> +91 </Typography>
          <span></span>
        </Row>
      );
    }
  };

  useEffect(() => {
    setTextValue(inputProps.value);
  }, [inputProps.value]);

  return (
    <Row
      flexDirection={flexDirection}
      alignItems="flex-start"
      flexWrap="nowrap"
      className={contClasses}
    >
      <Input {...inputProps} value={textValue} className={inputClass} onChange={handleChange} />
      {renderChildren()}
    </Row>
  );
};

// Perform Prop Validation
InputGroup.propTypes = {
  flexDirection: oneOf(['row', 'row-reverse']),
  btnProps: shape({
    btnlabel: string,
  }),
  iconProps: shape({}),
  inputProps: shape({}),
  className: string,
  inputContent: bool,
};

// Declare default props
InputGroup.defaultProps = {
  flexDirection: 'row',
  btnProps: {
    btnlabel: 'Submit',
  },
  iconProps: {},
  inputProps: {},
  className: '',
  inputContent: true,
};

// Export the component
export default InputGroup;
