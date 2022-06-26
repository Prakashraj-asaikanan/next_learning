export const range = (min, max) => {
  //Return a custom validator function
  return (props, propName, componentName) => {
    const prop = props[propName];
    if (prop) {
      if (typeof prop !== 'number' || prop < min || prop > max) {
        return new Error(
          `Prop ${propName} must be a number between ${min} and ${max} on ${componentName}`
        );
      }
    }
  };
};
