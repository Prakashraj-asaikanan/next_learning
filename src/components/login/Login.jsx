import Logo from '@Assets/images/doclogo.jpg';
import TokenForm from '@Components/reactForms/tokenForm/TokenForm';
import OtpForm from '@Components/reactForms/otpForm/OtpForm';
import Button from '@UI/button/Button';
import { Row, Col } from '@UI/layout';
import Typography from '@UI/typography/Typography';
import Modal from '@UI/modal/Modal';
import Image from '@UI/image/Image';
import Icon from '@UI/icon/Icon';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SessionInfoSelector } from 'src/redux/reducers/SessionInfo';
import { updateSessionInfo } from 'src/redux/reducers/SessionInfo';
import styles from './Login.module.scss';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const dispatch = useDispatch();

  const { isSessionLoading } = useSelector(SessionInfoSelector);

  useEffect(() => {
    dispatch(updateSessionInfo());
  }, [dispatch]);

  const changeotpModal = () => {
    setShowModal(false);
    setOtpModal(!otpModal);
  };

  // const changeSetModal = () => {
  //   setShowModal(!showModal);
  //   setOtpModal(false);
  // };

  return (
    <>
      <Row justifyContent="center" alignItems="center" className={styles.login}>
        <Col>
          <Row textAlign="center" flexDirection="column" alignItems="center" rowGap={25}>
            <Image src={Logo?.src} className={styles.loginLogo} />
            <Typography variant="p" className={styles.loginText}>
              PG Clinic
            </Typography>
            <Row className={styles.loginButtonContainer} rowGap={20} justifyContent="center">
              <Button onClick={changeotpModal} className={styles.loginButton}>
                <Icon iconName="calendar" className={styles.loginButtonIcon} />
                Book a Appointment
              </Button>
              <Button className={styles.loginButton}>
                <Icon iconName="token" className={styles.loginButtonIcon} />
                View my token
              </Button>
            </Row>
          </Row>
        </Col>
      </Row>
      {showModal && !isSessionLoading && (
        <Modal
          showModal={true}
          className={styles.loginModal}
          handleBeforeClose={() => changeotpModal}
        >
          <Modal.head>
            <Row className={styles.loginModalTitle} rowGap={5}>
              <Typography variant="h2"> Login with mobile number </Typography>
              <span>Please enter your mobile number</span>
            </Row>
          </Modal.head>
          <Modal.body>
            <TokenForm />
          </Modal.body>
        </Modal>
      )}
      {otpModal && (
        <Modal showModal={true} className={`${styles.loginModal} ${styles.loginModalOtp}`}>
          <Modal.head>
            <Row className={styles.loginModalTitle} rowGap={5} flexDirection="column">
              <Typography variant="h2">OTP Verification </Typography>
              <span>We send you a code to verify your mobile number</span>
            </Row>
          </Modal.head>
          <Modal.body>
            <OtpForm />
          </Modal.body>
          <Modal.footer>
            <Typography variant="p" className={styles.loginModalOtpInputFooter}>
              I don&apos;t receive OTP? <a href="#">Resend OTP</a>
            </Typography>
          </Modal.footer>
        </Modal>
      )}
    </>
  );
};

export default Login;
