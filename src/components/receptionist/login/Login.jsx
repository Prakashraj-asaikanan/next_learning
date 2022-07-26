import { useEffect, useState, forwardRef } from 'react';
import LoginForm from '@Components/reactForms/loginForm/LoginForm';
import { Row, Col } from '@UI/layout';
import Typography from '@UI/typography/Typography';
import Image from '@UI/image/Image';
import CompanyLogo from '@Assets/images/doclogo.jpg';
import styles from './Login.module.scss';
import Icon from '@UI/icon/Icon';
import LoginBanner from '@Assets/images/login_banner.jpg';
import { hospitalLogin } from '@Redux/Login';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useRouter } from 'next/router';

const RLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginReduxValue = useSelector((state) => state.login);

  const [opensnack, setOpenSnack] = useState(false);
  const [toaster_data, setToasterData] = useState();

  const vertical = 'top';
  const horizontal = 'right';

  useEffect(() => {
    if (loginReduxValue?.login?.error) {
      let toaster_details = {
        message: loginReduxValue?.login?.error,
        status: 'error',
      };
      setToasterData(toaster_details);
      setOpenSnack(true);
    }
    if (loginReduxValue?.login?.id) {
      router.push('/receptionist/home');
    }
  }, [loginReduxValue]);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };

  const handleSubmit = (values) => {
    let login_details = {
      email: values?.emailAddress,
      password: values?.password,
      hospital_id: '62d3986a0fa56dcba78f91a7',
    };
    dispatch(hospitalLogin(login_details));
  };

  return (
    <>
      <Row justifyContent="center" alignItems="center" className={styles.login}>
        <Col className={styles.loginBanner}>
          <Row
            alignItems="center"
            justifyContent="center"
            className={styles.loginBannerBox}
            flexDirection="row"
          >
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
              <LoginForm
                className={styles.loginModalForm}
                btnProps={{
                  className: styles.loginButton,
                }}
                onSubmit={handleSubmit}
              />
            </Col>
            <Col className={styles.loginFooterBox}>
              <Row justifyContent="center" alignItems="center">
                <Typography variant="small" className={styles.loginFooter}>
                  Powered
                  <Icon iconName="powered_by" className={styles.loginFooterIcon} />
                </Typography>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={opensnack}
          autoHideDuration={2000}
          onClose={handleClose}
          key={vertical + horizontal}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert onClose={handleClose} severity={toaster_data?.status} sx={{ width: '100%' }}>
            {toaster_data?.message}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default RLogin;
