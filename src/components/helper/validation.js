export const validateEmail = (email) => {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  let valid = re.test(String(email).toLowerCase());
  return valid;
};
export const validatePassword = (password) => {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*/])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let valid = re.test(String(password));
  return valid;
};
