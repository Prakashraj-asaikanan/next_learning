import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { number, string, func } from 'prop-types';

const Paginations = ({ page, totalpage, shape, className, color, variant, handleClick }) => {
  return (
    <>
      <Stack spacing={2}>
        <Pagination
          count={totalpage}
          page={page ? page : 1}
          shape={shape}
          color={color}
          className={className}
          onChange={handleClick}
          // classes={{ li: classes.li }}
          variant={variant}
          siblingCount={1}
          boundaryCount={0}
        />
      </Stack>
    </>
  );
};

Paginations.propTypes = {
  page: number,
  totalpage: number,
  shape: string,
  className: string,
  color: string,
  variant: string,
  handleClick: func,
};

export default Paginations;
