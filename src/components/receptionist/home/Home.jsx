import { useState, useEffect, forwardRef } from 'react';
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
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {
  getAllBookedPatient,
  UpdateCheckInPatient,
  closeHospitalForDay,
  updateTokenStatus,
} from '@Redux/Receptionist';
import { useDispatch, useSelector } from 'react-redux';
import mock_data from '../../../mock/data.json';

const RHome = () => {
  const dispatch = useDispatch();
  const receptionistReduxValue = useSelector((state) => state.receptionist);

  const [statusModal, setStatusModal] = useState(false);
  const [row_data, setRowData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [current_page, setCUrrentPage] = useState();
  const [isLoading, setLoading] = useState(true);
  const [opensnack, setOpenSnack] = useState(false);
  const [token_status, setTokenStatus] = useState(false);
  const vertical = 'top';
  const horizontal = 'right';
  const table_column = [
    { id: 'name', label: 'Patient Name', isactive: true, minWidth: 130, isSticky: true },
    { id: 'patient_id', label: 'Patient ID', isactive: true, minWidth: 130 },
    {
      id: 'phone',
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
      id: 'token_no',
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
  ];

  const handleRowData = (rows) => {
    rows.map((data) => {
      const response = createdData(
        data.name,
        data.patient_id,
        data.phone,
        data.age,
        data.doctor_name,
        data.token_no,
        data.isCheckedIn,
        data.isConsulted
      );
      setRowData((row_data) => [...row_data, response]);
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  let query_params = {
    hospital_id: '62bdda483835304c69be8ab3',
    doctor_id: '62bdda703835304c69be8ab5',
  };

  useEffect(() => {
    // if (!receptionistReduxValue?.bookedPatient) {
    //   setRowData([]);
    //   setLoading(true);
    //   setStatusModal(false);
    //   dispatch(getAllBookedPatient(query_params));
    // } else if (receptionistReduxValue?.bookedPatient) {
    //   setTotalPage(1);
    //   setCUrrentPage(1);
    //   setLoading(false);
    //   handleRowData(receptionistReduxValue?.bookedPatient);
    // }
    // if (
    //   (receptionistReduxValue?.toaster_data?.status && !opensnack) ||
    //   (receptionistReduxValue?.toaster_data?.status && !opensnack)
    // ) {
    //   setOpenSnack(true);
    // }
    handleRowData(mock_data.patient_token_list);
  }, []);

  const createdData = (
    name,
    patient_id,
    phone,
    age,
    doctor_name,
    token_no,
    isCheckedIn,
    isConsulted
  ) => {
    let action;
    if (!isCheckedIn && !isConsulted) {
      action = {
        title: 'Check In',
        className: `${styles.homeTableButtonCheckin}`,
        onClick: (patient) => handleCheckinPatient(patient),
        icon: 'login',
      };
    } else if (isCheckedIn && isConsulted) {
      action = {
        title: 'Consulted',
        className: `${styles.homeTableTextSuccess}`,
        icon: 'success',
      };
    } else if (isCheckedIn && !isConsulted) {
      action = {
        title: 'waiting',
        className: `${styles.homeTableButtonWaiting}`,
        // onClick: (patient) => handleCheckinPatient(patient),
        // icon: 'login',
      };
    }
    return { name, patient_id, phone, age, doctor_name, token_no, action };
  };

  const handleCheckinPatient = (patient) => {
    console.log(patient)
    // dispatch(UpdateCheckInPatient({ ...patient, ...query_params }));
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
    setTokenStatus(!token_status);
    setStatusModal(!statusModal);
  };

  const handleCloseModal = () => {
    setTokenStatus(!token_status);
    setStatusModal(!statusModal);
  };

  const hangelePagination = (event, value) => {
    setCUrrentPage(value);
  };

  const handleClick = () => {
    let recptionist_data = {
      hospital_id: '62b1c8b9c1cd1f96db036253',
    };
    dispatch(closeHospitalForDay(recptionist_data));
  };

  const handleUpdateTokenStatus = () => {
    let recptionist_token_status = {
      hospital_id: '62b1c8b9c1cd1f96db036253',
      user_type: '2',
      isTokenEnabled: token_status,
    };
    dispatch(updateTokenStatus(recptionist_token_status));
    setStatusModal(!statusModal);
    setOpenSnack(false);
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
            <Toggle
              checked={token_status}
              labelClassName={styles.homeTableToggle}
              handleClick={handleStatus}
            />
          </Typography>
        </Row>
        <Table columns={table_column} rows={row_data} isLoading={isLoading} />
        <Row
          className={styles.homeTableFooter}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button className={styles.homeTableFooterButton} onClick={handleClick}>
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
              <Button
                onClick={handleCloseModal}
                className={styles.homeModalFooterButton}
                action="button"
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpdateTokenStatus}
                className={styles.homeModalFooterButton}
                action="button"
              >
                Proceed
              </Button>
            </Row>
          </Modal.footer>
        </Modal>
      )}
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={opensnack}
          autoHideDuration={2000}
          onClose={handleClose}
          key={vertical + horizontal}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert
            onClose={handleClose}
            severity={receptionistReduxValue?.toaster_data?.status}
            sx={{ width: '100%' }}
          >
            {receptionistReduxValue?.toaster_data?.message}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default RHome;
