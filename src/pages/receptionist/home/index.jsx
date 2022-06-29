import { Container } from '@UI/layout';
import Home from '@Components/receptionist/home/Home';
import Header from '@Components/receptionist/header/Header';
import styles from './Home.module.scss';

const ReceptionstHomePage = () => {
  return (
    <>
      <Header />
      <Container className={styles.homeContainer}>
        <Home />
      </Container>
    </>
  );
};

export default ReceptionstHomePage;
