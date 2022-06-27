import { func, node, oneOfType, string } from 'prop-types';
import styles from './LinkButton.module.scss';

/**
 * Component - LinkButton
 * @param {function} onClick - Callback on click
 * @param {string|node} children - Child element to render
 * @param {string} className - Custom classname to override styles
 */
const LinkButton = ({ onClick, children, className, target }) => {
  const handleOnclick = (e) => {
    e?.preventDefault?.();
    onClick?.();

    return false;
  };

  return (
    <a
      href="#"
      role="button"
      className={`${styles.clickableText} ${className}`}
      onClick={handleOnclick}
      tabIndex="0"
      target={target}
    >
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  onClick: func,
  children: oneOfType([string, node]),
  className: string,
  target: string,
};

LinkButton.defaultProps = {
  onClick: null,
  children: null,
  className: '',
  target: '_blank',
};

export default LinkButton;
