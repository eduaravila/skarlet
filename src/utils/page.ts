const ROUTE_NAME = {
  INDEX: "Home",
  FALLBACK: "Whoops",
};

export const getTitle = (page): string => {
  const title = page.url.pathname;
  switch (title) {
    case "index":
      return ROUTE_NAME.INDEX;
    case "_fallback":
      return ROUTE_NAME.FALLBACK;
    default:
      const firts = title.charAt(0).toUpperCase();
      const rest = title.slice(1);
      return firts + rest;
  }
};

export const is404 = (page): boolean => page === "_fallback";
