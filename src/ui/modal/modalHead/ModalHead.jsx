import { bool, node, oneOfType, shape, string } from 'prop-types';
import Icon from '../../icon/Icon';
import { Row } from '../../layout';
import { useModalContext } from '../ModalContext';
import { useEffect } from 'react';
import styles from './ModalHead.module.scss';

const ModalHead = ({ children, iconProps, className, justifyContent, withCloseIcon }) => {
  const { closeModal } = useModalContext();

  const iconCallBack = () => {
    iconProps.onClick && iconProps.onClick();
    closeModal();
  };

  useEffect(() => {
    document.addEventListener('keyup', keyUpEscapeEvent, true);
    return () => {
      document.removeEventListener('keyup', keyUpEscapeEvent, true);
    };
  }, []);

  const keyUpEscapeEvent = (e) => {
    /* istanbul ignore else */
    if (e?.key?.toLowerCase() === 'escape' && e?.keyCode === 27) {
      closeModal();
    }
  };

  return (
    <Row justifyContent={justifyContent} className={className} flexWrap="nowrap">
      {children}
      {withCloseIcon && (
        <Icon
          {...iconProps}
          className={`${styles.closeIcon} ${iconProps.className}`}
          onClick={iconCallBack}
          aria-label="close"
          role="button"
          tabIndex="0"
        />
      )}
    </Row>
  );
};

ModalHead.propTypes = {
  children: oneOfType([string, node]),
  iconProps: shape({}),
  className: string,
  justifyContent: string,
  withCloseIcon: bool,
};

ModalHead.defaultProps = {
  iconProps: {
    iconName: 'close',
  },
  className: '',
  children: '',
  justifyContent: 'space-between',
  withCloseIcon: true,
};

export default ModalHead;
