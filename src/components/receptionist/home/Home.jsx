import { useState, useEffect } from 'react';
import Breadcumb from '@UI/breadcumb/Breadcumb';
import { Row, Col } from '@UI/layout';
import styles from './Home.module.scss';
import Typography from '@UI/typography/Typography';
import Toggle from '@UI/toggle/Toggle';
import Modal from '@UI/modal/Modal';
import Icon from '@UI/icon/Icon';
import Button from '@UI/button/Button';
import Table from '@UI/table/Table';
import Pagination from '@UI/pagination/Pagination';
import MockData from '../../../mock/data.json';

const RHome = () => {
  const [statusModal, setStatusModal] = useState(false);
  const [row_data, setRowData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [current_page, setCUrrentPage] = useState();

  const table_column = [
    { id: 'patient_name', label: 'Patient Name', isactive: true, minWidth: 130, isSticky: true },
    { id: 'patient_id', label: 'Patient ID', isactive: true, minWidth: 130 },
    {
      id: 'mobile_no',
      label: 'Mobile Number',
      align: 'left',
      isactive: true,
      minWidth: 130,
    },
    {
      id: 'age',
      label: 'Age',
      align: 'left',
      isactive: true,
      minWidth: 130,
    },
    {
      id: 'doctor_name',
      label: 'Doctor Name',
      align: 'left',
      isactive: true,
      minWidth: 130,
    },
    {
      id: 'token_number',
      label: 'Token Number',
      align: 'center',
      variant: 'h2',
      isactive: true,
      minWidth: 130,
    },
    {
      id: 'action',
      label: 'Action',
      align: 'center',
      isactive: true,
      minWidth: 130,
    },
    {
      id: 'flag',
      label: 'Flag',
      align: 'center',
      isactive: false,
    },
  ];

  const handleRowData = (rows) => {
    rows.map((data) => {
      const response = createdData(
        data.patient_name,
        data.patient_id,
        data.mobile_no,
        data.age,
        data.doctor_name,
        data.token_number,
        data.action
      );
      setRowData((row_data) => [...row_data, response]);
    });
  };

  useEffect(() => {
    handleRowData(MockData?.patient_token_list);
    setTotalPage(10);
    setCUrrentPage(1);
  }, []);

  const createdData = (
    patient_name,
    patient_id,
    mobile_no,
    age,
    doctor_name,
    token_number,
    action
  ) => {
    let flag;
    if (action === 'Check In') {
      flag = 1;
    } else {
      flag = 0;
    }
    return { patient_name, patient_id, mobile_no, age, doctor_name, token_number, action, flag };
  };

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

  const handleStatus = () => {
    setStatusModal(!statusModal);
  };

  const hangelePagination = (event, value) => {
    setCUrrentPage(value);
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
        <Table columns={table_column} rows={row_data} />
        <Row
          className={styles.homeTableFooter}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button className={styles.homeTableFooterButton}>
            <Icon iconName="close_all" className={styles.homeTableFooterButtonIcon} />
            Close all
          </Button>
          {totalPage > 1 && (
            <Pagination
              totalpage={totalPage}
              page={current_page}
              shape="rounded"
              color="secondary"
              variant="outlined"
              handleClick={hangelePagination}
            />
          )}
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
              <Button className={styles.homeModalFooterButton} action="button">
                Cancel
              </Button>
              <Button className={styles.homeModalFooterButton} action="button">
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
