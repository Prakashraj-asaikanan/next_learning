import LoginForm from '@Components/reactForms/loginForm/LoginForm';
import { Row, Col } from '@UI/layout';
import Typography from '@UI/typography/Typography';
import Image from '@UI/image/Image';
import CompanyLogo from '@Assets/images/doclogo.jpg';
import styles from './Login.module.scss';

const RLogin = () => {
  const buttonProps = {
    className: styles.loginButton
  }

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
                <Image
                  src={CompanyLogo.src}
                  className={styles.loginCompanylogo}
                />
                <Typography variant="p" className={styles.loginText}>
                  PG Clinic
                </Typography>
              </Row>
              {/* <Col className={styles.loginModalForm}>
                <Row className={styles.loginModalInput}>
                  <span>User ID</span>
                  <Input label="Enter your user id" />
                </Row>
                <Row className={styles.loginModalInput}>
                  <span>Password</span>
                  <Input label="Enter your password" />
                </Row>
              </Col>
              <Row className={styles.loginModalForm}>
                <Col className={styles.loginModalFormOptions}>
                  <Row flexDirection="row" className={styles.loginModalRememberme}>
                    <Input type="checkbox" className={styles.loginModalCheckbox} />
                    <span className={styles.loginModalCheckboxSpancheck}>Remember me </span>
                  </Row>
                  <Row className={styles.loginForgotpassword}>
                    <span>Forgot Password ? </span>
                  </Row>
                </Col>
              </Row>
              <Row className={styles.loginButtonContainer} rowGap={20} justifyContent="center">
                <Button className={styles.loginButton}>Login</Button>
              </Row> */}
              <LoginForm
                className={styles.loginModalForm}
                btnProps={buttonProps}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default RLogin;
