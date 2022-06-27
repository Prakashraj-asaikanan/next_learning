import watchOuterClicks from '@Hooks/WatchOuterClicks';
import { bool, node, oneOfType, string } from 'prop-types';
import { useState, useEffect } from 'react';
import styles from './DropDown.module.scss';
import DropDownContent from './dropDownContent/DropDownContent';
import DropDownContext from './DropDownContext';
import DropDownItem from './dropDownItem/DropDownItem';

const { Provider } = DropDownContext;

const DropDown = ({ className, children, toggleOnHover, toggleOnBlur }) => {
  const [collapse, setCollapse] = useState(false);

  const toggleDropDown = () => setCollapse(!collapse);

  const handleOuterClick = () => setCollapse(false);

  const ref = watchOuterClicks(!toggleOnHover && collapse, handleOuterClick);

  const closeDropdownOnBlur = () => {
    setCollapse(false);
  };

  useEffect(() => {
    document.addEventListener('keyup', keyUpEscapeEvent, true);
    return () => {
      document.removeEventListener('keyup', keyUpEscapeEvent, true);
    };
  }, []);

  const keyUpEscapeEvent = (e) => {
    /* istanbul ignore else */
    if (e?.key?.toLowerCase() === 'escape' && e?.keyCode === 27) {
      setCollapse(false);
    }
  };

  return (
    <Provider value={{ collapse }}>
      <div
        className={`${styles.dropdown} ${className}`}
        ref={ref}
        {...(!toggleOnHover && { onClick: toggleDropDown })}
        {...(toggleOnHover && { onMouseEnter: toggleDropDown })}
        {...(toggleOnHover && { onMouseLeave: toggleDropDown })}
        {...(toggleOnBlur && { onBlur: closeDropdownOnBlur })}
      >
        {children}
      </div>
    </Provider>
  );
};

// Perform Prop Validation
DropDown.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
  toggleOnHover: bool,
  toggleOnEnter: bool,
  toggleOnEscape: bool,
  toggleOnBlur: bool,
};

// Declare default props
DropDown.defaultProps = {
  className: '',
  toggleOnHover: false,
  toggleOnEnter: false,
  toggleOnEscape: false,
  toggleOnBlur: false,
};

DropDown.Content = DropDownContent;
DropDown.Item = DropDownItem;

// Export the component
export default DropDown;
