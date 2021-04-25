import { forwardRef } from 'react'
import cs from 'classnames'

import type {
  Ref,
  ColPropsTypes,
  ColProps,
  MarginProps,
  PaddingProps,
  OrderProps,
  OffsetProps,
  VisibleProps,
  HidddenProps,
} from './types'
import { getColClass } from './utils/col-class'
import { getMarginClass } from './utils/margin-class'
import { getPaddingClass } from './utils/padding-class'
import { getOrderClass } from './utils/order-class'
import { getOffsetClass } from './utils/offset-class'
import { getVisibleClass } from './utils/visible-class'
import { getHiddenClass } from './utils/hidden-class'

const Col = forwardRef<Ref, ColPropsTypes>(({ children, ...props }, ref) => {
  const { ...colProps }: ColProps = props
  const { ...marginProps }: MarginProps = props
  const { ...paddingProps }: PaddingProps = props
  const { ...orderProps }: OrderProps = props
  const { ...offsetProps }: OffsetProps = props
  const { ...visibleProps }: VisibleProps = props
  const { ...hiddenProps }: HidddenProps = props

  return (
    <div
      ref={ref}
      data-testid='col'
      className={cs(
        getColClass(colProps),
        getMarginClass(marginProps),
        getPaddingClass(paddingProps),
        getOrderClass(orderProps),
        getOffsetClass(offsetProps),
        getVisibleClass(visibleProps),
        getHiddenClass(hiddenProps)
      )}
    >
      {children}
    </div>
  )
})

Col.defaultProps = {
  col: true,
}

Col.displayName = 'Col'

export default Col
