import { bool, func, node, oneOfType, string } from 'prop-types';
import styles from './DropDownItem.module.scss';

const DropDownItem = ({ children, isActive, className, handleOnSelect }) => {
  const classes = [styles.dropdownItem, isActive ? styles.dropdownItemActive : '', className]
    .join(' ')
    .trim();

  return (
    <div className={classes} onClick={handleOnSelect} tabIndex={handleOnSelect ? 0 : -1}>
      {children}
    </div>
  );
};

DropDownItem.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
  isActive: bool,
  handleOnSelect: func,
};

DropDownItem.defaultProps = {
  className: '',
  isActive: false,
  handleOnSelect: null,
};

export default DropDownItem;
