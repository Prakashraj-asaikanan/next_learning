import { Container } from '@UI/layout';
import Home from '@Components/receptionist/home/Home';
import Header from '@Components/receptionist/header/Header';
import styles from './Home.module.scss';
import SnackbarProvider from 'react-simple-snackbar';

const ReceptionstHomePage = () => {
  return (
    <SnackbarProvider>
      <Header />
      <Container className={styles.homeContainer}>
        <Home />
      </Container>
    </SnackbarProvider>
  );
};

export default ReceptionstHomePage;
