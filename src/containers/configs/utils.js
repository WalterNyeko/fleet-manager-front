export const isFramelessPage = pathname => {
  return [`/`, `/login`, `/register`].includes(pathname);
};
