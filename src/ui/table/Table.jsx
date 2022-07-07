import { array, bool, func } from 'prop-types';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@UI/typography/Typography';
import styles from './Table.module.scss';
import Button from '@UI/button/Button';
import { Row } from '@UI/layout';
import Icon from '@UI/icon/Icon';
import Toggle from '@UI/toggle/Toggle';

const RTable = ({ columns, rows, isLoading, handleUpdate }) => {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#F7A955',
      color: '#484964',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
  }));
  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => {
                return (
                  <>
                    {column?.id != 'flag' && (
                      <StyledTableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        className={column?.isSticky && styles.tableStickyColumn}
                      >
                        {column.label}
                      </StyledTableCell>
                    )}
                  </>
                );
              })}
            </TableRow>
          </TableHead>
          {rows?.length > 0 ? (
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                      className={styles.table}
                    >
                      {columns?.map((column) => {
                        const value = row[column.id];
                        const flag = row['flag'];
                        return (
                          <>
                            {column.id != 'flag' && (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                className={column?.isSticky && styles.tableStickyRow}
                              >
                                {column.id === 'action' && (flag === 0 || flag === 3) && (
                                  <Typography
                                    variant={column?.variant ? column.variant : 'p'}
                                    className={
                                      flag === 0 ? styles.tableTextSuccess : styles.tableTextDanger
                                    }
                                  >
                                    <Icon iconName={flag === 0 ? 'success' : 'close_all'} />
                                    &nbsp;{flag === 0 ? 'Consulted' : 'Not Consulted'}
                                  </Typography>
                                )}
                                {column.id === 'action' && flag === 1 && (
                                  <Button onClick={() => handleUpdate(row)}>
                                    <Icon iconName="login" className={styles.tableButtonIcon} />
                                    &nbsp;&nbsp;Check In
                                  </Button>
                                )}
                                {column.id === 'action' && flag === 2 && (
                                  <Row
                                    justifyContent="space-between"
                                    alignItems="center"
                                    className={styles.tableCheckbox}
                                  >
                                    <Typography variant="p" className={styles.tableUppercase}>
                                      {value}
                                    </Typography>
                                    &nbsp;&nbsp;
                                    <Toggle checked={value === 'active' ? true : false} />
                                  </Row>
                                )}
                                {column.id != 'action' && (
                                  <Typography
                                    variant={column?.variant ? column.variant : 'p'}
                                    className={`${styles.tableText}`}
                                  >
                                    {column.format && typeof value === 'number'
                                      ? column.format(value)
                                      : value}
                                  </Typography>
                                )}
                              </TableCell>
                            )}
                          </>
                        );
                      })}
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          ) : isLoading ? (
            <Typography variant="caption" className={styles.tableCaption}>
              Loading
            </Typography>
          ) : (
            <Typography variant="caption" className={styles.tableCaption}>
              No Data Found
            </Typography>
          )}
        </Table>
      </TableContainer>
    </Paper>
  );
};

// Perform Prop Validation
RTable.propTypes = {
  columns: array,
  rows: array,
  isLoading: bool,
  handleUpdate: func,
};

export default RTable;
