import { Row } from '../layout';
import useBodyScrollLock from '@Hooks/UseBodyScrollLock';
import { bool, func, node, oneOfType, string } from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import ModalBody from './modalBody/ModalBody';
import ModalContext from './ModalContext';
import ModalFooter from './modalFooter/ModalFooter';
import ModalHead from './modalHead/ModalHead';
import Portal from './Portal';

const { Provider } = ModalContext;

const Modal = (props) => {
  const {
    children,
    showModal,
    className,
    overlayClass,
    wrapperClass,
    handleAfterOpen,
    handleAfterClose,
    handleBeforeClose,
    closeOnOverlayClick,
    disableClose,
  } = props;

  const [show, setShow] = useState(showModal);

  const closeModal = async () => {
    /* istanbul ignore else */
    if (!disableClose) {
      handleBeforeClose && (await handleBeforeClose());
      setShow(!show);
      handleAfterClose && handleAfterClose();
    }
  };

  useEffect(() => {
    handleAfterOpen && handleAfterOpen();
  }, []);

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  useBodyScrollLock(show);

  if (!show || typeof window === 'undefined') return null;

  return (
    <Provider value={{ show, closeModal }}>
      <Portal rootId="doc-modal">
        <Row className={styles.docModal} justifyContent="center">
          <div
            className={`${styles.docModalOverlay} ${overlayClass}`}
            {...(closeOnOverlayClick && { onClick: closeModal })}
          ></div>

          <div className={`${styles.docModalWrapper} ${wrapperClass}`}>
            <Row
              className={`${styles.docModalContent} ${className}`}
              alignContent="flex-start"
              tabIndex="-1"
              role="dialog"
              aria-modal="true"
            >
              {children}
            </Row>
          </div>
        </Row>
      </Portal>
    </Provider>
  );
};

Modal.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
  overlayClass: string,
  wrapperClass: string,
  showModal: bool,
  handleAfterClose: func,
  handleAfterOpen: func,
  handleBeforeClose: func,
  closeOnOverlayClick: bool,
  disableClose: bool,
};

Modal.defaultProps = {
  overlayClass: '',
  className: '',
  wrapperClass: '',
  showModal: false,
  handleAfterClose: null,
  handleAfterOpen: null,
  handleBeforeClose: null,
  closeOnOverlayClick: true,
  disableClose: false,
};

Modal.head = ModalHead;
Modal.body = ModalBody;
Modal.footer = ModalFooter;

export default Modal;
