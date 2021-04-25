import type { AlignItemsProps } from '../types'

export function getAlignItemsClass({
  alignItems,
  alignItemsSm,
  alignItemsMd,
  alignItemsLg,
  alignItemsXl,
  alignItemsXxl,
}: AlignItemsProps) {
  return {
    [`align-items-${alignItems}`]: alignItems,
    [`align-items-sm-${alignItemsSm}`]: alignItemsSm,
    [`align-items-md-${alignItemsMd}`]: alignItemsMd,
    [`align-items-lg-${alignItemsLg}`]: alignItemsLg,
    [`align-items-xl-${alignItemsXl}`]: alignItemsXl,
    [`align-items-xxl-${alignItemsXxl}`]: alignItemsXxl,
  }
}
