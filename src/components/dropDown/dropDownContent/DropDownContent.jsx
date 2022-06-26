import { node, oneOfType, string } from 'prop-types';
import { useContext } from 'react';
import accordionContext from '../DropDownContext';
import styles from './DropDownContent.module.scss';

/**
 * DropDownContent Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @param {string} role - role added for element type
 * @returns {*}
 * @constructor
 */
const DropDownContent = ({ children, className, role }) => {
  const { collapse } = useContext(accordionContext);
  const classes = [styles.dropdownContent, collapse ? styles.dropdownContentShow : '', className]
    .join(' ')
    .trim();

  return (
    <div className={classes} role={role}>
      {children}
    </div>
  );
};

DropDownContent.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
  role: string,
};

DropDownContent.defaultProps = {
  className: '',
  role: 'listbox',
};

export default DropDownContent;
