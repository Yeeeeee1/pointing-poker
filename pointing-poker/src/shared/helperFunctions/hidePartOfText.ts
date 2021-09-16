const hidePartOfText = (text: string = "", limit: number = 20): string =>
  text.length <= limit ? text : `${text.slice(0, limit)}...`;

export default hidePartOfText;
