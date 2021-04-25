import type { VisibleProps } from '../types'

export function getVisibleClass({
  visible,
  visibleSm,
  visibleMd,
  visibleLg,
  visibleXl,
  visibleXll,
}: VisibleProps) {
  return {
    'd-block': visible,
    'd-sm-block': visibleSm,
    'd-md-block': visibleMd,
    'd-lg-block': visibleLg,
    'd-xl-block': visibleXl,
    'd-xxl-block': visibleXll,
  }
}
