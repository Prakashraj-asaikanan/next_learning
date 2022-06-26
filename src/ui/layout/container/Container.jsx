import { node, oneOfType, string } from 'prop-types';
import styles from './Container.module.scss';

/**
 * Container Component
 * @param {any} children - Child node
 * @param {string} className - Custom Class to override styles
 * @param {string} id - id to place on row
 * @returns {*}
 */
const Container = (props) => {
  const { children: children, className: className, id: id } = props;

  return (
    <div className={`${styles.container} ${className}`} id={id}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: oneOfType([string, node]),
  className: string,
  id: string,
};

Container.defaultProps = {
  className: '',
  children: null,
  id: null,
};

export default Container;
