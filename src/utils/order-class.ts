import type { OrderProps } from '../types'

export function getOrderClass({
  order,
  orderSm,
  orderMd,
  orderLg,
  orderXl,
  orderXxl,
}: OrderProps) {
  return {
    [`order-${order}`]: order,
    [`order-sm-${orderSm}`]: orderSm,
    [`order-md-${orderMd}`]: orderMd,
    [`order-lg-${orderLg}`]: orderLg,
    [`order-xl-${orderXl}`]: orderXl,
    [`order-xxl-${orderXxl}`]: orderXxl,
  }
}
