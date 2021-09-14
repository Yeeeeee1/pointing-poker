const hidePartOfText = (text: string = "", limit: number = 20): string =>
  `${text.slice(0, limit)}...`;

export default hidePartOfText;
