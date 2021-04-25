import type { RowProps } from '../types'

export function getRowClass({
  Cols,
  ColsSm,
  ColsMd,
  ColsLg,
  ColsXl,
  ColsXxl,
}: RowProps) {
  return {
    [`row-cols-${Cols}`]: Cols,
    [`row-cols-sm-${ColsSm}`]: ColsSm,
    [`row-cols-md-${ColsMd}`]: ColsMd,
    [`row-cols-lg-${ColsLg}`]: ColsLg,
    [`row-cols-xl-${ColsXl}`]: ColsXl,
    [`row-cols-xxl-${ColsXxl}`]: ColsXxl,
  }
}
