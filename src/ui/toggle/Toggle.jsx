import { string, bool, func } from 'prop-types';
import styles from './Toggle.module.scss';

const Toggle = ({ labelClassName, spanClassName, checked, handleClick }) => {
  return (
    <>
      <label className={`${styles.switch} ${labelClassName}`}>
        <input type="checkbox" checked={checked} onClick={handleClick} />
        <span className={`${styles.slider} ${styles.round} ${spanClassName}`}></span>
      </label>
    </>
  );
};

Toggle.propTypes = {
  labelClassName: string,
  spanClassName: string,
  checked: bool,
  handleClick: func,
};

export default Toggle;
