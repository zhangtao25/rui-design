import React from "react"
import './style/index.less'


const Bottom = (props: any) => {
  const {children,type} = props
  return (
    <button className="rui-btn" style={{backgroundColor:type === 'primary'?'skyblue':'#fff'}}>
      <span>{children}</span>
    </button>
  )
}

export default Bottom
