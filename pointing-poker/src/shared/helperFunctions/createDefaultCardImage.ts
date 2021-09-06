const createDefaultCardImage = (name: string): string =>
  name.slice(0, 1).toUpperCase() +
  ((name.split(" ")[1] && name.split(" ")[1].slice(0, 1)) || "").toUpperCase();

export default createDefaultCardImage;
