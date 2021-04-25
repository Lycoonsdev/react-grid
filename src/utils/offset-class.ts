import type { OffsetProps } from '../types'

export function getOffsetClass({
  offset,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  offsetXxl,
}: OffsetProps) {
  return {
    [`offset-${offset}`]: offset,
    [`offset-sm-${offsetSm}`]: offsetSm,
    [`offset-md-${offsetMd}`]: offsetMd,
    [`offset-lg-${offsetLg}`]: offsetLg,
    [`offset-xl-${offsetXl}`]: offsetXl,
    [`offset-xxl-${offsetXxl}`]: offsetXxl,
  }
}
