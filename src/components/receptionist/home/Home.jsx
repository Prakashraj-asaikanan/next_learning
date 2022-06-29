import { useState, useEffect } from 'react';
import Table from '@UI/table/Table';
import { Row } from '@UI/layout';
import styles from './Home.module.scss';

const RHome = () => {
  const [row_data, setRowData] = useState([]);

  const table_column = [
    { id: 'patient_name', label: 'Patient Name' },
    { id: 'patient_id', label: 'Patient ID' },
    {
      id: 'mobile_no',
      label: 'Mobile Number',
      align: 'left',
    },
    {
      id: 'age',
      label: 'Age',
      align: 'left',
    },
    {
      id: 'doctor_name',
      label: 'Doctor Name',
      align: 'left',
    },
    {
      id: 'token_number',
      label: 'Token Number',
      align: 'center',
      variant: 'h2',
    },
    {
      id: 'action',
      label: 'Action',
      align: 'center',
    },
  ];

  const rows = [
    {
      patient_name: 'Akshay',
      patient_id: 1234,
      mobile_no: 85267263215,
      age: 22,
      doctor_name: 'Dr.Krishna',
      token_number: '20',
      actions: 0,
    },
  ];

  const handleRowData = () => {
    rows.map((data) => {
      const response = createdData(data.patient_name, data.patient_id, data.mobile_no, data.age, data.doctor_name, data.token_number, data.actions);
      setRowData([ ...row_data, response])
    });
  };

  useEffect(() => {
    handleRowData();
  }, []);

  const createdData = (patient_name, patient_id, mobile_no, age, doctor_name, token_number, actions) => {
    let action;
    if (actions === 0) {
      action = `<Button>Check In</Button>`
    }
    return { patient_name, patient_id, mobile_no, age, doctor_name, token_number, action }
  }

  return (
    <>
      {/* <Row
        className={styles.homeTable}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <span>Patient Token List</span>
        <span>status</span>
      </Row> */}
      {/* <Table columns={table_column} rows={row_data} /> */}
    </>
  );
};

export default RHome;
