import React from 'react'
import { LayoutProps } from '../../models/layout'



const LayoutAdmin = ({children}: LayoutProps) => {
  return (
    <div>
        Admin 
        {children}
    </div>
  )
}

export default LayoutAdmin