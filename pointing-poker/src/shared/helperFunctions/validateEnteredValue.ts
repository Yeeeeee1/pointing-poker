const validateEnteredValue = (text: string): boolean =>
  !text ? true : /^([a-z\s])+$|^([а-яё\s])+$/i.test(text);

export default validateEnteredValue;
