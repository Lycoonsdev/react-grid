import type { HidddenProps } from '../types'

export function getHiddenClass({
  hidden,
  hiddenSm,
  hiddenMd,
  hiddenLg,
  hiddenXl,
  hiddenXll,
}: HidddenProps) {
  return {
    'd-none': hidden,
    'd-sm-none': hiddenSm,
    'd-md-none': hiddenMd,
    'd-lg-none': hiddenLg,
    'd-xl-none': hiddenXl,
    'd-xxl-none': hiddenXll,
  }
}
