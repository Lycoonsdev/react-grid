import { forwardRef } from 'react'

import type { Ref, ContainerPropsType } from './types'
import { getContainerClass } from './utils/container-class'

const Container = forwardRef<Ref, ContainerPropsType>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-testid='container'
        className={getContainerClass(props)}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'

export default Container
