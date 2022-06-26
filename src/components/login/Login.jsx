import { useState } from 'react';
import Button from '@UI/button/Button';
import Icon from '@UI/icon/Icon';
import { Row, Col } from '@UI/layout';
import Typography from '@UI/typography/Typography';
import styles from './Login.module.scss';
import Modal from '@UI/modal/Modal';
import Input from '@UI/input/Input';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [otpModal, setOtpModal] = useState(false);

  const changeotpModal = () => {
    setShowModal(false);
    setOtpModal(!otpModal);
  };

  const changeSetModal = () => {
    setShowModal(!showModal);
    setOtpModal(false);
  };

  return (
    <>
      <Row justifyContent="center" alignItems="center" className={styles.login}>
        <Col>
          <Row textAlign="center" flexDirection="column" alignItems="center" rowGap={25}>
            <Icon iconName="star" className={styles.loginIcon} />
            <Typography variant="p" className={styles.loginText}>
              PG Clinic
            </Typography>
            <Row className={styles.loginButtonContainer} rowGap={20} justifyContent="center">
              <Button onClick={changeSetModal} className={styles.loginButton}>
                Book a Appointment
              </Button>
              <Button className={styles.loginButton}>View my token</Button>
            </Row>
          </Row>
        </Col>
      </Row>
      {showModal && (
        <Modal showModal={true} className={styles.loginModal}>
          <Modal.head iconProps={{ className: styles.loginModalIcon }}>
            <Row className={styles.loginModalTitle} rowGap={5}>
              <Typography variant="h2"> Login with mobile number </Typography>
              <span>Please enter your mobile number</span>
            </Row>
          </Modal.head>
          <Modal.body>
            <Row className={styles.loginModalInput}>
              <span>Mobile Number</span>
              <Input label="Enter your mobile number" />

              <Button onClick={changeotpModal}> Continue </Button>
            </Row>
          </Modal.body>
        </Modal>
      )}
      {otpModal && (
        <Modal showModal={true} className={styles.loginModal}>
          <Modal.head iconProps={{ className: styles.loginModalIcon }}>
            <Row className={styles.loginModalTitle} rowGap={5}>
              <Typography variant="h2">OTP Verification </Typography>
              <span>We send you a code to verify your mobile number</span>
            </Row>
          </Modal.head>
          <Modal.body>
            <Row className={styles.loginModalInput}>
              <span>Mobile Number</span>
              <Input label="Enter your mobile number" />

              <Button> Verify </Button>
            </Row>
          </Modal.body>
          <Modal.footer>
            <Typography variant="p" className={styles.loginModalInputFooter}>
              I dont receive OTP? <a href="#">Resend OTP</a>
            </Typography>
          </Modal.footer>
        </Modal>
      )}
    </>
  );
};

export default Login;
