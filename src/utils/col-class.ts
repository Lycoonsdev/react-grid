import type { ColProps } from '../types'

export function getColClass({ col, sm, md, lg, xl, xxl }: ColProps) {
  return {
    col: col === true,
    'col-sm': sm === true,
    'col-md': md === true,
    'col-lg': lg === true,
    'col-xl': xl === true,
    'col-xxl': xxl === true,
    [`col-${col}`]: col !== true && col !== undefined && col,
    [`col-sm-${sm}`]: sm !== true && sm !== undefined && sm,
    [`col-md-${md}`]: md !== true && md !== undefined && md,
    [`col-lg-${lg}`]: lg !== true && lg !== undefined && lg,
    [`col-xl-${xl}`]: xl !== true && xl !== undefined && xl,
    [`col-xxl-${xxl}`]: xxl !== true && xxl !== undefined && xxl,
  }
}
