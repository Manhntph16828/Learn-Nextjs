import React, { Children } from 'react'
import { LayoutProps } from '../../models/layout'

type Props = {}

const EmptyLayout = ({children}: LayoutProps) => {
  return (
    <div>EmptyLayout
       {children}
    </div>
  )
}

export default EmptyLayout