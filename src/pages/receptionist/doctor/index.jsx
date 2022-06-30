import { Container } from '@UI/layout';
import DoctorComponent from '@Components/receptionist/doctor/Doctor';
import Header from '@Components/receptionist/header/Header';
import styles from './Doctor.module.scss';

const ReceptionstDoctorPage = () => {
  return (
    <>
      <Header />
      <Container className={styles.doctorContainer}>
        <DoctorComponent />
      </Container>
    </>
  );
};

export default ReceptionstDoctorPage;
