// import ErrorMessage from './ErrorMessage';

export const REGEX = {
  EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  SPECIAL_CHARECTERS: /^[\w&.\-]+$/,
  UPPERCASE: /[A-Z]/g,
  LOWERCASE: /[a-z]/g,
  UPPER_LOWER_CASE: /[a-z].*[A-Z]|[A-Z].*[a-z]/, // eslint-disable-next-line
  NAME: /^[A-Za-z0-9]{1}[ A-Za-z0-9,.-]{0,}$/,
  // NUMBER: /^[0-9]{0,}$/,
  NUMBER: /^.*[0-9].*/,
};

export const validatePassword = (value, t) => {
  var message = [];
  var validCount = 0;
  if (value.length < 8) {
    message.push({valid: false, title: t('minimumCharacters')});
  } else {
    // message.push({valid: true, title: t('minimumCharacters')});
    // validCount++;
  }
  if (value.length > 16) {
    message.push({valid: false, title: t('passwordMax')});
  } else {
    // message.push({valid: true, title: t('passwordMax')});
    // validCount++;
  }
  if (value.match(REGEX.SPECIAL_CHARECTERS)) {
    message.push({valid: false, title: t('specialCharacter')});
  } else {
    // message.push({valid: true, title: t('specialCharacter')});
    // validCount++;
  }
  if (!value.match(REGEX.NUMBER)) {
    message.push({valid: false, title: t('numericCharacter')});
  } else {
    // message.push({valid: true, title: t('numericCharacter')});
    // validCount++;
  }
  if (!value.match(REGEX.UPPERCASE)) {
    message.push({valid: false, title: t('UPPERCASE')});
  } else {
    // message.push({valid: true, title: t('UPPERCASE')});
    // validCount++;
  }
  if (!value.match(REGEX.LOWERCASE)) {
    message.push({valid: false, title: t('LOWERCASE')});
  } else {
    // message.push({valid: true, title: t('LOWERCASE')});
    // validCount++;
  }
  if (validCount > 4) {
    message = [];
  }
  return message.length ? JSON.stringify(message) : null;
};
