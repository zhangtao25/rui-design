import React from 'react'

const TabsItem = (props: any) => {
  const { children, type, onClick, value } = props
  console.log(children, 'children,item')

  const clickHandler = () => {}
  return (
    <div
      className="rui-tabs-item"
      onClick={() => {
        clickHandler()
      }}
    >
      {children}
    </div>
  )
}

export default TabsItem
