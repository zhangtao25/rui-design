import React from 'react'

const TabsItem = (props: any) => {
  const { children, type, onClick, value } = props
  console.log(children, 'children,item')

  const clickHandler = () => {}
  return (
    <div>
      {children}
    </div>
  )
}

export default TabsItem
