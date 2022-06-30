import { useState, useEffect } from 'react';
import Breadcumb from '@UI/breadcumb/Breadcumb';
import { Row, Col } from '@UI/layout';
import styles from './Doctor.module.scss';
import Typography from '@UI/typography/Typography';
import Table from '@UI/table/Table';
import Pagination from '@UI/pagination/Pagination';
import MockData from '../../../mock/data.json';

const RDoctor = () => {
  const [row_data, setRowData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [current_page, setCUrrentPage] = useState();

  const table_column = [
    { id: 'doctor_name', label: 'Doctor Name', isactive: true, minWidth: 130, isSticky: true },
    { id: 'specalization', label: 'Specalization', isactive: true, minWidth: 130 },
    { id: 'hospital_name', label: 'Hospital Name', isactive: true, minWidth: 130 },
    {
      id: 'mobile_no',
      label: 'Mobile Number',
      align: 'left',
      isactive: true,
      minWidth: 120,
    },
    {
      id: 'email',
      label: 'Email',
      align: 'left',
      isactive: true,
      minWidth: 130,
    },
    {
      id: 'action',
      label: 'Status',
      align: 'center',
      isactive: true,
      minWidth: 120,
    },
    {
      id: 'flag',
      label: 'Flag',
      align: 'center',
      isactive: false,
    },
  ];

  // const rows = [
  //   {
  //     doctor_name: 'Akshay',
  //     specalization: 1234,
  //     hospital_name: 'VC',
  //     mobile_no: 85267263215,
  //     email: 'test@gmail.com',
  //     status: 'active',
  //   },
  //   {
  //     doctor_name: 'Venkat',
  //     specalization: 1234,
  //     hospital_name: 'VC',
  //     mobile_no: 85267263215,
  //     email: 'test@gmail.com',
  //     status: 'inactive',
  //   },
  // ];

  const handleRowData = (rows) => {
    rows.map((data) => {
      // console.log(data)
      const response = createdData(
        data.doctor_name,
        data.specalization,
        data.hospital_name,
        data.mobile_no,
        data.email,
        data.status
      );
      // console.log(response)
      setRowData((row_data) => [...row_data, response]);
    });
  };

  useEffect(() => {
    handleRowData(MockData.doctor_list);
    setTotalPage(1);
    setCUrrentPage(5);
  }, []);

  const createdData = (doctor_name, specalization, hospital_name, mobile_no, email, status) => {
    let flag = 2;
    let action = status;
    return { doctor_name, specalization, hospital_name, mobile_no, email, action, flag };
  };

  const breadCumb_data = [
    {
      title: 'Home',
      isActive: false,
      className: styles.doctorBreadcumb,
    },
    {
      title: 'Doctor List',
      isActive: true,
      className: styles.doctorBreadcumb,
    },
  ];

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
          className={styles.doctorTable}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="p" className={styles.doctorTableTitle}>
            Doctor List
          </Typography>
        </Row>
        <Table columns={table_column} rows={row_data} />
        <Row
          className={styles.doctorTableFooter}
          flexDirection="row"
          justifyContent="space-between"
        >
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
    </>
  );
};

export default RDoctor;
