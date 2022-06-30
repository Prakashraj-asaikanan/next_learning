import LoginForm from '@Components/reactForms/loginForm/LoginForm';
import { Row, Col } from '@UI/layout';
import Typography from '@UI/typography/Typography';
import Image from '@UI/image/Image';
import CompanyLogo from '@Assets/images/doclogo.jpg';
import styles from './Login.module.scss';

const RLogin = () => {
  const buttonProps = {
    className: styles.loginButton,
  };

  return (
    <>
      <Row justifyContent="space-around" alignItems="center" className={styles.login}>
        <Col className={styles.loginHidecolumn}>
          <Row alignItems="center" justifyContent="center">
            Hai
          </Row>
        </Col>
        <Col>
          <Row justifyContent="center" className={styles.loginBox}>
            <Col className={styles.loginForm}>
              <Row justifyContent="center" flexDirection="row" alignItems="center" rowGap={25}>
                {/* <Icon iconName="star" className={styles.loginIcon} /> */}
                <Image src={CompanyLogo.src} className={styles.loginCompanylogo} />
                <Typography variant="p" className={styles.loginText}>
                  PG Clinic
                </Typography>
              </Row>
              <LoginForm className={styles.loginModalForm} btnProps={buttonProps} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default RLogin;
