import { forwardRef } from 'react'
import cs from 'classnames'

import type {
  Ref,
  RowPropsTypes,
  RowProps,
  MarginProps,
  PaddingProps,
  JustifyContentProps,
  AlignItemsProps,
  GutterProps,
} from './types'
import { getRowClass } from './utils/row-class'
import { getMarginClass } from './utils/margin-class'
import { getPaddingClass } from './utils/padding-class'
import { getJustifyContentClass } from './utils/justify-content-class'
import { getAlignItemsClass } from './utils/align-items-class'
import { getGutterClass } from './utils/gutter-class'

const Row = forwardRef<Ref, RowPropsTypes>(({ children, ...props }, ref) => {
  const { ...rowProps }: RowProps = props
  const { ...marginProps }: MarginProps = props
  const { ...paddingProps }: PaddingProps = props
  const { ...justifyContentProps }: JustifyContentProps = props
  const { ...alignItemsProps }: AlignItemsProps = props
  const { ...gutterProps }: GutterProps = props

  return (
    <div
      ref={ref}
      data-testid='row'
      className={cs(
        'row',
        getRowClass(rowProps),
        getMarginClass(marginProps),
        getPaddingClass(paddingProps),
        getJustifyContentClass(justifyContentProps),
        getAlignItemsClass(alignItemsProps),
        getGutterClass(gutterProps)
      )}
    >
      {children}
    </div>
  )
})

Row.defaultProps = {}

Row.displayName = 'Row'

export default Row
