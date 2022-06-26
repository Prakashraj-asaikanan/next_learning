import styles from './Col.module.scss';

/**
 * This function goes through the breakpoint array, if it finds a container with a 0 width,
 * it will automatically set that breakpoint width to the previous breakpoint's width
 * @param {number} arr[xs] - grid width at extra small breakpoint (1-12)
 * @param {number} arr[sm] - grid width at small breakpoint (1-12)
 * @param {number} arr[md] - grid width at medium breakpoint (1-12)
 * @param {number} arr[lg] - grid width at large breakpoint (1-12)
 * @param {number} arr[xl] - grid width at extra large breakpoint (1-12)
 * @param {number} arr[xxl] - grid width at extra extra large breakpoint (1-12)
 * @returns {*}
 */
export const generateColClasses = (arr) => {
  const breakpoints = [
    { breakpoint: 'xs', val: arr[0] },
    { breakpoint: 'sm', val: arr[1] },
    { breakpoint: 'md', val: arr[2] },
    { breakpoint: 'lg', val: arr[3] },
    { breakpoint: 'xl', val: arr[4] },
    { breakpoint: 'xxl', val: arr[5] },
  ];

  const gridItemClasses = breakpoints.reduce((accumulator, current) => {
    if (current.val) {
      accumulator.push(styles[`col-${current.breakpoint}-${current.val}`]);
    }
    return accumulator;
  }, []);

  return gridItemClasses.join(' ');
};
