const ROUTE_NAME = {
  INDEX: "Home",
  FALLBACK: "Whoops",
};

export const getTitle = (page): string => {
  switch (page.title) {
    case "index":
      return ROUTE_NAME.INDEX;
    case "_fallback":
      return ROUTE_NAME.FALLBACK;
    default:
      const firts = page.title.charAt(0).toUpperCase();
      const rest = page.title.slice(1);
      return firts + rest;
  }
};

export const is404 = (page): boolean => page.title === "_fallback";
