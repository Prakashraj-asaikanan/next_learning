import PATTERNS from '@Utils/Patterns';

export const parsePhoneNumberInput = (value) => {
  return value.replace(/\+1/g, '').replace(PATTERNS.ALLOW_INTEGER_INPUT, '');
};
