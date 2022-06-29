import Typography from '../typography/Typography';
import { array } from 'prop-types';

const Breadcumb = ({ breadcumb_data }) => {
  return (
    <>
      {breadcumb_data.map((bread_text, index) => {
        return (
          <>
            <Typography key={index} variant="p" className={bread_text?.className}>
              {bread_text?.title} {!bread_text?.isActive ? '/' : null} &nbsp;
            </Typography>
          </>
        );
      })}
    </>
  );
};

// Perform Prop Validation
Breadcumb.propTypes = {
  breadcumb_data: array,
};

export default Breadcumb;
