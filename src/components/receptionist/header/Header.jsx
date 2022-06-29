import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Col, Row } from '@UI/layout/index';
import styles from './Header.module.scss';
import Typography from '@UI/typography/Typography';
import Icon from '@UI/icon/Icon';
import Image from '@UI/image/Image';
import CompanyLogo from '@Assets/images/doclogo.jpg';
import UserIcon from '@Assets/images/userimage.jpg';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Doctor'].map((text, index) => (
          <ListItem key={text} disablePadding className={styles.headerSideBarBox}>
            <ListItemButton>
              <ListItemIcon className={styles.headerSideBarIcon}>
                { text === 'Home' && <Icon iconName='home' className={styles.headerSideBarActive}/> }
                { text === 'Doctor' && <Icon iconName='doctor'/> }
              </ListItemIcon>
              <ListItemText primary={text} className={styles.headerSideBarText}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <React.Fragment key="left">
      <Row className={styles.header} justifyContent="space-between" alignItems="center">
        <Button onClick={toggleDrawer("left", true)}>
          <Icon iconName="menu" className={styles.headerIcon}/>
        </Button>
        <Col>
          <Row alignItems="center" justifyContent="center">
            <Image
              src={CompanyLogo.src}
              className={styles.headerCompanylogo}
            />
            <Typography variant="p" className={styles.headerText}>
              PG Clinic
            </Typography>
          </Row>
        </Col>
        <Paper variant="outlined" className={styles.headerProfileBox}>
          <Row flexDirection="row" alignItems="center" >
            <Col className={styles.headerProfilePiccolumn}>
              <Image
                src={UserIcon.src}
                className={styles.headerUsericon}
              />
            </Col>
            <Col className={styles.headerProfileBox}>
              <Typography variant="p" className={styles.headerProfileBoxName}>
                Yogesh Kumar
              </Typography>
              <Typography variant="small" className={styles.headerProfileBoxRec}>
                Receptionist
              </Typography>
            </Col>
            <Col className={styles.headerDropdownBox}>
              <Icon iconName="downarrow" className={styles.headerDropdownIcon}/>
            </Col>
          </Row>
        </Paper>
      </Row>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </React.Fragment>
  );
}
