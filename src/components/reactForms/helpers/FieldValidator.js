import PATTERNS from '@Utils/Patterns';

/**
 * Function to check value is present
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const required = (customError) => (value, field) =>
  value ? undefined : customError ?? `Please enter a valid ${field ?? 'input'}`;

/**
 * Function to validate email address
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const email = (customError) => (value, field) =>
  !value || PATTERNS.EMAIL.test(value)
    ? undefined
    : customError ?? `Please enter ${field ?? 'Input'} in valid format`;
