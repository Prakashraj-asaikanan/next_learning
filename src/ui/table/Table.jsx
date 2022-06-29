import { array } from 'prop-types';
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

const RTable = ({ columns, rows }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          {rows.length > 0 ? (
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Typography variant={column?.variant ? column.variant : 'p'}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </Typography>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
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
};

export default RTable;
