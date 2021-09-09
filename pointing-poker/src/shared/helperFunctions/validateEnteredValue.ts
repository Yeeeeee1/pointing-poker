const validateEnteredValue = (
  text: string,
  isCheckingOnEmptyString: boolean = false
): boolean => {
  if (isCheckingOnEmptyString) {
    return /^([a-z\s])+$|^([а-яё\s])+$/i.test(text);
  }
  return !text ? true : /^([a-z\s])+$|^([а-яё\s])+$/i.test(text);
};

export default validateEnteredValue;
