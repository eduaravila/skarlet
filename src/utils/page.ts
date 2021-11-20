export const getTitle = (page): string => {
  switch (page.title) {
    case "index":
      return "Home";
    default:
      const firts = page.title.charAt(0).toUpperCase();
      const rest = page.title.slice(1);
      return firts + rest;
  }
};
