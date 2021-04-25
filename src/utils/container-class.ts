import cs from 'classnames'

import type { ContainerProps } from '../types'

export function getContainerClass({
  fluid,
  sm,
  md,
  lg,
  xl,
  xxl,
}: ContainerProps) {
  return cs(fluid ? 'container-fluid' : 'container', {
    'container-sm': sm,
    'container-md': md,
    'container-lg': lg,
    'container-xl': xl,
    'container-xxl': xxl,
  })
}
