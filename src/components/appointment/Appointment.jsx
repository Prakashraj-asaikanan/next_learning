import { Container, Row, Col } from '@UI/layout';
import Input from '@UI/input/Input';
import DropDown from '@UI/dropDown/DropDown';
import Image from '@UI/image/Image';
import UserIcon from '@Assets/images/userimage.jpg';
import styles from './Appointment.module.scss';
import Button from '@UI/button/Button';
import Icon from '@UI/icon/Icon';
import Modal from '@UI/modal/Modal';
import Typography from '@UI/typography/Typography';

const Appointment = () => {
  return (
    <Container className={styles.appointment}>
      <Col lg={12} className={styles.appointmentHeader}>
        <h1>Book a Appointment</h1>
        <p>Please enter your details</p>
      </Col>
      <Row className={styles.appointmentForm} rowGap={35}>
        <Col lg={12} className={styles.appointmentFormInputcontainer}>
          <label>Mobile Number</label>
          <Input placeholder="Enter your Contact Number" />
          <Icon className={styles.appointmentFormVerifyicon} iconName="verified" />
        </Col>
        <hr className={styles.appointmentFormDashline} />
        <Row className={styles.appointmentFormInputcontainer}>
          <label>Doctor Name</label>
          <DropDown
            toggleOnHover
            toggleOnFocus
            toggleOnBlur
            toggleOnEscape
            className={styles.appointmentFormDropdown}
          >
            {/* <p className={styles.appointmentFormDropdownDefault}>Select the Doctor</p> */}
            <Row className={styles.appointmentFormDocselected}>
              <Image src={UserIcon.src} className={styles.appointmentFormDoccontainerUsericon} />
              <Col className={styles.appointmentFormDoccontainerDetail}>
                <h3>DR 1</h3>
                <p>Desgination</p>
              </Col>
            </Row>
            <DropDown.Content className={styles.appointmentFormDropdownContent}>
              <Row className={styles.appointmentFormDoccontainer}>
                <Image src={UserIcon.src} className={styles.appointmentFormDoccontainerUsericon} />
                <Col className={styles.appointmentFormDoccontainerDetail}>
                  <h3>DR 1</h3>
                  <p>Desgination</p>
                </Col>
              </Row>
              <Row className={styles.appointmentFormDoccontainer}>
                <Image src={UserIcon.src} className={styles.appointmentFormDoccontainerUsericon} />
                <Col className={styles.appointmentFormDoccontainertDetail}>
                  <h3>DR 2</h3>
                  <p>Desgination</p>
                </Col>
              </Row>
              <Row className={styles.appointmentFormDoccontainer}>
                <Image src={UserIcon.src} className={styles.appointmentFormDoccontainerUsericon} />
                <Col className={styles.appointmentFormDoccontainerDetail}>
                  <h3>DR 3</h3>
                  <p>Desgination</p>
                </Col>
              </Row>
            </DropDown.Content>
          </DropDown>
          <Icon className={styles.appointmentFormDropdownVerifyicon} iconName="verified" />
        </Row>
        <Row className={styles.appointmentFormInputcontainer}>
          <label>Child Name</label>
          <Input placeholder="Enter your child name" />
          <Icon className={styles.appointmentFormVerifyicon} iconName="verified" />
        </Row>
        <Row className={styles.appointmentFormInputcontainer}>
          <label>Child Age</label>
          <Row flexWrap="nowrap" className={styles.appointmentFormDatepicker}>
            <Input placeholder="MM" className={styles.appointmentFormDatepickerMonth} />
            <Input placeholder="DD" className={styles.appointmentFormDatepickerDate} />
            <Input placeholder="YYYY" className={styles.appointmentFormDatepickerYear} />
          </Row>
          <Icon className={styles.appointmentFormVerifyicon} iconName="verified" />
        </Row>
        <Row className={styles.appointmentFormInputcontainer}>
          <label>Doctor Name</label>
          <DropDown
            toggleOnHover
            toggleOnFocus
            toggleOnBlur
            toggleOnEscape
            className={styles.appointmentFormDropdown}
          >
            {/* <p className={styles.appointmentFormDropdownDefault}>Select Child</p> */}
            <Row className={styles.appointmentFormSelectedchild}>
              <Col className={styles.appointmentFormChildcontainerContent}>
                <h5>Deepa S</h5>
                <p>1 years 3 months old</p>
              </Col>
            </Row>
            <DropDown.Content className={styles.appointmentFormDropdownContent}>
              <Row className={styles.appointmentFormChildcontainer}>
                <Col className={styles.appointmentFormChildcontainerContent}>
                  <h5>Deepa S</h5>
                  <p>1 years 3 months old</p>
                </Col>
              </Row>
              <Row className={styles.appointmentFormChildcontainer}>
                <Col className={styles.appointmentFormChildcontainerContent}>
                  <h5>Deepa S</h5>
                  <p>1 years 3 months old</p>
                </Col>
              </Row>
              <Row className={styles.appointmentFormChildcontainer} justifyContent="center">
                <Button className={styles.appointmentFormChildcontainerBtn} theme="white">
                  Add Child
                </Button>
              </Row>
            </DropDown.Content>
          </DropDown>
          <Icon className={styles.appointmentFormDropdownVerifyicon} iconName="verified" />
        </Row>
        <Row justifyContent="center">
          <Button className={styles.appointmentFormBtn} theme="crayola">
            Create Token
          </Button>
        </Row>
      </Row>
      <Modal showModal={false} className={styles.appointmentModal}>
        <Modal.head>
          <Row className={styles.appointmentModalTitle} rowGap={5}>
            <Typography variant="h3">Add new child</Typography>
            <p>please enter your child details</p>
          </Row>
        </Modal.head>
        <Modal.body>
          <Row rowGap={25}>
            <Row className={styles.appointmentFormInputcontainer}>
              <label>Child Name</label>
              <Input placeholder="Enter your child name" />
            </Row>
            <Row className={styles.appointmentFormInputcontainer}>
              <label>Child Age</label>
              <Input type="date" />
            </Row>
            <Row justifyContent="center">
              <Button className={styles.appointmentFormBtn} theme="crayola">
                Continue
              </Button>
            </Row>
          </Row>
        </Modal.body>
      </Modal>
    </Container>
  );
};

export default Appointment;
