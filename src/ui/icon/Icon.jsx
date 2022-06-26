import { bool, func, string } from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Icon.module.scss';

const Icon = (props) => {
  const { onClick, iconName, id, className, disabled, ...restProps } = props;
  let isUnmounted = false;
  const [iconModule, setIconModule] = useState();

  useEffect(() => {
    import(
      /* webpackMode: "lazy-once" */
      /* webpackPrefetch: true */
      `!!@svgr/webpack!@Assets/svg/${iconName}.svg`
    )
      .then((module) => module && module.default && !isUnmounted && setIconModule(module))
      .catch(
        /* istanbul ignore next */ () => {
          /* istanbul ignore next */
          throw `Icon "${iconName}" not found`;
        }
      );

    return () => {
      isUnmounted = true;
    };
  }, [iconName]);

  if (!iconModule) return null;
  const IconComponent = iconModule.default;
  const classes = [
    styles.icon,
    onClick ? styles.iconLink : '',
    disabled ? styles.iconDisabled : '',
    className,
  ].join(' ');

  return (
    <IconComponent
      id={id}
      className={classes}
      {...(!disabled && onClick && { onClick: onClick })}
      {...restProps}
    />
  );
};

Icon.defaultProps = {
  className: '',
  id: null,
  onClick: null,
  disabled: false,
};

Icon.propTypes = {
  iconName: string.isRequired,
  className: string,
  id: string,
  onClick: func,
  disabled: bool,
};

export default Icon;
