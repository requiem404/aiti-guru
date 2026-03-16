import { useMemo } from 'react';

import { getGuardedPage } from './get-guarded-page';

interface Props {
  pageNumber: number;
  pageCount: number;
  showRange: number;
  setPage: (page: number) => void;
}

export const usePagination = ({ pageNumber, pageCount, showRange, setPage }: Props) => {
  const guardedPage = getGuardedPage(pageNumber, pageCount);

  const transformedShowRange = showRange === 0 ? 1 : showRange;

  const pagesList = useMemo(() => new Array(pageCount).fill(null).map((_, index) => index + 1), [pageCount]);

  const abbreviatedPagesList = useMemo(() => {
    if (pageCount < 6) {
      return pagesList;
    }

    return pagesList.filter(
      page =>
        page === 1 ||
        page === pageCount ||
        (guardedPage + 2 === 3 && page === 3) ||
        (guardedPage - 2 === pagesList.length - 2 && page === pagesList.length - 2) ||
        (page > guardedPage - transformedShowRange - 1 && page <= guardedPage + transformedShowRange)
    );
  }, [guardedPage, transformedShowRange, pageCount]);

  const isShowEllipsis = pageCount > 5;

  const isFirstPage = guardedPage === 1;
  const isLastPage = guardedPage >= pageCount;

  const getIsLeftEllipsis = (index: number) => guardedPage >= transformedShowRange + 3 && index === 1;
  const getIsRightEllipsis = (index: number, listLength: number) =>
    guardedPage <= pageCount - transformedShowRange - 2 && index === listLength - 2;

  const decrementPage = () => setPage?.(guardedPage - 1);
  const incrementPage = () => setPage?.(guardedPage + 1);

  return {
    guardedPage,
    abbreviatedPagesList,
    isShowEllipsis,
    isFirstPage,
    isLastPage,
    getIsLeftEllipsis,
    getIsRightEllipsis,
    decrementPage,
    incrementPage,
  };
};
