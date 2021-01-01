import React from 'react'
import './index.less'

const Button = (props: any) => {
  const { children, type, onClick } = props
  return (
    <button
      onClick={onClick}
      className="rui-btn"
      style={{ backgroundColor: type === 'primary' ? 'skyblue' : '#fff' }}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button
