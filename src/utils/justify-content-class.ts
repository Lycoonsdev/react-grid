import type { JustifyContentProps } from '../types'

export function getJustifyContentClass({
  justifyContent,
  justifyContentSm,
  justifyContentMd,
  justifyContentLg,
  justifyContentXl,
  justifyContentXxl,
}: JustifyContentProps) {
  return {
    [`justify-content-${justifyContent}`]: justifyContent,
    [`justify-content-sm-${justifyContentSm}`]: justifyContentSm,
    [`justify-content-md-${justifyContentMd}`]: justifyContentMd,
    [`justify-content-lg-${justifyContentLg}`]: justifyContentLg,
    [`justify-content-xl-${justifyContentXl}`]: justifyContentXl,
    [`justify-content-xxl-${justifyContentXxl}`]: justifyContentXxl,
  }
}
