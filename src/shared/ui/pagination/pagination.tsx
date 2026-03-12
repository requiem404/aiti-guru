import { Fragment, type FC } from 'react';

import { usePagination } from './lib/use-pagination';
import { getClasses } from './styles/get-classes';
import { ButtonPagination } from './ui/button-pagination/button-pagination';
import type { PaginationSize } from './lib/types';
import { SvgCaretLeft } from '@shared/icons/components/caret-left';
import { SvgCaretRight } from '@shared/icons/components/caret-right';

export type PaginationProps = {
  className?: string;
  pageNumber: number;
  pageCount: number;
  showRange?: number;
  setPage: (page: number) => void;
  size?: PaginationSize;
  isChevronsHidden?: boolean;
};

export const Pagination: FC<PaginationProps> = ({
  className,
  pageNumber,
  pageCount,
  showRange = 1,
  setPage,
  size,
  isChevronsHidden = false,
}) => {
  const {
    guardedPage,
    abbreviatedPagesList,
    isShowEllipsis,
    isFirstPage,
    isLastPage,
    getIsLeftEllipsis,
    getIsRightEllipsis,
    decrementPage,
    incrementPage,
  } = usePagination({
    pageNumber,
    pageCount,
    showRange,
    setPage,
  });

  const isLeftChevronHidden = isChevronsHidden && isFirstPage;

  const isRightChevronHidden = isChevronsHidden && isLastPage;

  const { cnRoot, cnLeftChevron, cnRightChevron } = getClasses({
    className,
    isLeftChevronHidden,
    isRightChevronHidden,
  });

  if (pageCount <= 1) {
    return null;
  }

  return (
    <div className={cnRoot}>
      <ButtonPagination
        className={cnLeftChevron}
        type="button"
        icon={<SvgCaretLeft color="currentColor" />}
        onClick={decrementPage}
        disabled={isFirstPage}
        size={size}
      />

      {abbreviatedPagesList.map((pageNumber, index, list) => (
        <Fragment key={`pagination-${index}`}>
          {getIsLeftEllipsis(index) && isShowEllipsis && (
            <ButtonPagination key={`ellipsis-left-${pageNumber}`} text="..." size={size} tabIndex={-1} />
          )}

          <ButtonPagination
            key={`page-number-${pageNumber}`}
            text={String(pageNumber)}
            type="button"
            isActive={guardedPage === pageNumber}
            onClick={() => setPage?.(pageNumber)}
            size={size}
          />

          {getIsRightEllipsis(index, list.length) && isShowEllipsis && (
            <ButtonPagination key={`ellipsis-right-${pageNumber}`} text="..." size={size} tabIndex={-1} />
          )}
        </Fragment>
      ))}

      <ButtonPagination
        className={cnRightChevron}
        type="button"
        icon={<SvgCaretRight color="currentColor" />}
        size={size}
        onClick={incrementPage}
        disabled={isLastPage}
      />
    </div>
  );
};
