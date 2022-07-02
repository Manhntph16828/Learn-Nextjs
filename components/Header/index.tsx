import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
       <ul className='menu'>
        <li><a href="">menu</a></li>
        <li><a href="/product">menu 2</a></li>
        <li><a href="">menu</a></li>
        <li><a href="">menu</a></li>
      </ul>
    </div>
  )
}

export default Header