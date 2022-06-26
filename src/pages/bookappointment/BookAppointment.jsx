import { Container, Row, Col } from '@Components/layout';
import Input from '@Components/input/Input';
import styles from './BookAppointment.module.scss';
import DropDown from '@Components/dropDown/DropDown';
import Image from '@Components/image/Image';
import UserIcon from '@Assets/images/userimage.jpg';

const BookAppointment = () => {
  return (
    <Container className={styles.bookappointment}>
      <Row className={styles.bookappointmentHeader} alignItems="center">
        <Col noflex>
          <h1>Book Appointment</h1>
          <p>Please enter your details</p>
        </Col>
      </Row>
      <Row className={styles.bookappointmentForminfo} rowGap={50}>
        <Row>
          <Col>
            <label>Mobile Number</label>
            <Input label="Enter your Contact Number" />
            <hr className={styles.bookappointmentForminfoDashline} />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Doctor Name</label>
            <DropDown toggleOnHover toggleOnFocus toggleOnBlur toggleOnEscape>
              <p className={styles.bookappointmentForminfoDropdown}>Select the Doctor</p>
              <DropDown.Content>
                <Row className={styles.bookappointmentForminfoDropdownDrcon}>
                  <Image
                    src={UserIcon.src}
                    className={styles.bookappointmentForminfoDropdownUsericon}
                  />
                  <Col className={styles.bookappointmentForminfoDropdownDrdetail}>
                    <h3>DR 1</h3>
                    <p>Desgination</p>
                  </Col>
                </Row>
                <Row className={styles.bookappointmentForminfoDropdownDrcon}>
                  <Image
                    src={UserIcon.src}
                    className={styles.bookappointmentForminfoDropdownUsericon}
                  />
                  <Col className={styles.bookappointmentForminfoDropdownDrdetail}>
                    <h3>DR 2</h3>
                    <p>Desgination</p>
                  </Col>
                </Row>
                <Row className={styles.bookappointmentForminfoDropdownDrcon}>
                  <Image
                    src={UserIcon.src}
                    className={styles.bookappointmentForminfoDropdownUsericon}
                  />
                  <Col className={styles.bookappointmentForminfoDropdownDrdetail}>
                    <h3>DR 3</h3>
                    <p>Desgination</p>
                  </Col>
                </Row>
              </DropDown.Content>
            </DropDown>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Doctor Name</label>
            <DropDown toggleOnHover toggleOnFocus toggleOnBlur toggleOnEscape>
              <p className={styles.bookappointmentForminfoDropdown}>Select Child</p>
            </DropDown>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default BookAppointment;
