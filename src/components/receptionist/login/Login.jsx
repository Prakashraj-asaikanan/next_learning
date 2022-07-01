import LoginForm from '@Components/reactForms/loginForm/LoginForm';
import { Row, Col } from '@UI/layout';
import Typography from '@UI/typography/Typography';
import Image from '@UI/image/Image';
import CompanyLogo from '@Assets/images/doclogo.jpg';
import styles from './Login.module.scss';
import Icon from '@UI/icon/Icon';
import LoginBanner from '@Assets/images/login_banner.jpg';

const RLogin = () => {
  const buttonProps = {
    className: styles.loginButton,
  };

  return (
    <>
      <Row justifyContent="space-around" alignItems="center" className={styles.login}>
        <Col className={styles.loginBanner}>
          <Row alignItems="center" justifyContent="center" className={styles.loginBannerBox} flexDirection="row">
            <Image src={LoginBanner?.src} />
          </Row>
        </Col>
        <Col>
          <Row justifyContent="center" className={styles.loginBox}>
            <Col className={styles.loginForm}>
              <Row justifyContent="center" flexDirection="row" alignItems="center" rowGap={25}>
                
                <Image src={CompanyLogo.src} className={styles.loginCompanylogo} />
                <Typography variant="p" className={styles.loginText}>
                  PG Clinic
                </Typography>
              </Row>
              <LoginForm className={styles.loginModalForm} btnProps={buttonProps} />
            </Col>
            <Col className={styles.loginFooterBox}>
              <Row justifyContent="center" alignItems="center">
                <Typography variant="small" className={styles.loginFooter}>
                  Powered
                  <Icon iconName='powered_by' className={styles.loginFooterIcon} />
                </Typography>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default RLogin;
