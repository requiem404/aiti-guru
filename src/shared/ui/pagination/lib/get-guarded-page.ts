export const getGuardedPage = (page: number, pageCount: number) => {
  if (page <= 0) {
    return 1;
  }
  if (page > pageCount) {
    return pageCount;
  }

  return page;
};
