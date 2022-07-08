/* eslint-disable prettier/prettier */
import { useState } from 'react';
import styles from './Token.module.scss';

import { Row, Col } from '@UI/layout';
import Icon from '@UI/icon/Icon';
import UserIcon from '@Assets/images/userimage.jpg';
import Image from '@UI/image/Image';
import Typography from '@UI/typography/Typography';

const Token = () => {
  const [tokenNumber] = useState('2');
  const [visitorTokenNumber] = useState('12');
  const [isTokenExpired] = useState(false);
  const tokenClass = isTokenExpired ? styles['tokenExpired'] : '';
  return (
    <>
      <Row display="flex" justifyContent="center" alignItems="center" className={styles.token}>
        <Row
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          className={` ${styles.tokenPaperPosition} ${tokenClass}`}
        >
          <Icon iconName="tokenPaper" />
          <Row
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            className={` ${styles.tokenPaperChildPosition}`}
          >
            <Typography variant="h1" className={styles.tokenTitle}>
              My Token
            </Typography>
            <Typography variant="h1" className={styles.tokenNumber}>
              {tokenNumber}
            </Typography>
            <hr className={styles.tokenCardDashline} />
            <Row
              justifyContent="center"
              alignItems="center"
              className={`${styles.tokenCardDateTimeContainer} ${styles.tokenDoctorDetails}`}
            >
              <Col>
                <Row alignItems="center">
                  <Icon iconName="calendarCheck" className={styles.tokenIcon} />
                  <Typography variant="p">June 08, 22</Typography>
                </Row>
              </Col>
              <Col>
                <Row alignItems="center">
                  <Icon iconName="clock" className={styles.tokenIcon} />
                  <Typography variant="p">04:00 pm</Typography>
                </Row>
              </Col>
            </Row>
            <hr className={styles.tokenCardDashline} />
            <Row
              justifyContent="center"
              alignItems="center"
              rowGap={35}
              className={styles.tokenDoctorDetails}
            >
              <Col xs={3} alignSelf="center">
                <Image src={UserIcon.src} className={styles.tokenDoctorProfilePic} />
              </Col>
              <Col xs={6} alignSelf="center">
                <Typography variant="p" style={{ fontWeight: 'bold' }}>
                  Dr. Doctor Name
                </Typography>
                <Typography variant="p" className={styles.tokenSubTitle}>
                  Specialisation
                </Typography>
              </Col>
              <Col xs={3} alignSelf="center">
                <Icon iconName="share" className={`${styles.tokenIcon} ${styles.tokenShareIcon}`} />
              </Col>
            </Row>
          </Row>
          {isTokenExpired ? (
            <Row
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              className={` ${styles.tokenPaperChildPosition}`}
            >
              <Icon iconName="expired" />
            </Row>
          ) : (
            <></>
          )}
        </Row>

        {isTokenExpired ? (
          <></>
        ) : (
          <Row display="flex" justifyContent="space-around" className={styles.tokenStatusContainer}>
            <Col xs={5}>
              <Typography variant="p" className={styles.tokenSubTitle}>
                Current Visitor
              </Typography>
              <Typography variant="p" className={styles.tokenStatusText}>
                Token {visitorTokenNumber}
              </Typography>
            </Col>
            <Col xs={2}>
              <Typography variant="span" className={styles.tokenVerticalLine}></Typography>
            </Col>
            <Col xs={5}>
              <Typography variant="p" className={styles.tokenSubTitle}>
                Token Status
              </Typography>
              <ul>
                <li className={`${styles.tokenStatusText} ${styles.tokenStatusChill}`}>
                  chill down
                </li>
              </ul>
            </Col>
          </Row>
        )}
      </Row>
    </>
  );
};

export default Token;
