import { useState } from 'react';
import Breadcumb from '@UI/breadcumb/Breadcumb';
import { Row, Col } from '@UI/layout';
import styles from './Home.module.scss';
import Typography from '@UI/typography/Typography';
import Toggle from '@UI/toggle/Toggle';
import Modal from '@UI/modal/Modal';
import Icon from '@UI/icon/Icon';
import Button from '@UI/button/Button';

const RHome = () => {
  const [statusModal, setStatusModal] = useState(false);

  const breadCumb_data = [
    {
      title: 'Home',
      isActive: false,
      className: styles.homeBreadcumb,
    },
    {
      title: 'Patient Token',
      isActive: true,
      className: styles.homeBreadcumb,
    },
  ];

  const handleStatus = (event) => {
    setStatusModal(!statusModal);
  };

  return (
    <>
      <Row>
        <Breadcumb breadcumb_data={breadCumb_data} />
      </Row>
      <Col>
        <Row
          className={styles.homeTable}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="p" className={styles.homeTableTitle}>
            Patient Token List
          </Typography>
          <Typography variant="p" className={styles.homeTableStatus}>
            Status
            <Toggle labelClassName={styles.homeTableToggle} handleClick={handleStatus} />
          </Typography>
        </Row>
      </Col>
      {statusModal && (
        <Modal showModal={true} className={styles.homeModal}>
          <Modal.body>
            <Row
              alignItems="center"
              justifyContent="center"
              className={styles.homeModalBox}
              flexDirection="column"
            >
              <Icon iconName="confusion" className={styles.homeModalIcon} />
              <Col>
                <Typography variant="p" className={styles.homeModalText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus senectus et
                  duis. Sagittis massa mauris pretium, sed in mauris diam enim. Neque, molestie
                  nulla arcu, lla lectus id. Egestas ullamcorper massa nulla nisl ac orci molestie
                  lectus. Diam sit dui,et hac ut.
                </Typography>
              </Col>
            </Row>
          </Modal.body>
          <Modal.footer>
            <Row alignItems="center" justifyContent="center" className={styles.homeModalFooterBox}>
              <Button className={styles.homeModalButtonCancel} action="button">
                Cancel
              </Button>
              <Button className={styles.homeModalButtonProceed} action="button">
                Proceed
              </Button>
            </Row>
          </Modal.footer>
        </Modal>
      )}
    </>
  );
};

export default RHome;
