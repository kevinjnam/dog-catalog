export const getBreedName = url => {
  const start = 30;
  let end = start;
  while (url[end] !== '/') {
    end += 1;
  }

  return url.slice(start, end);
};
