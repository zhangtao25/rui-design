import React, { useState } from 'react'
import TabsItem from './tabs-item'
import './index.less'

const Tabs = (props: any) => {
  const { children, type, onClick } = props
  const [current, setCurrent] = useState(null)
  console.log(children, 'children')

  const clickHandler = (props: any) => {
    console.log(props)
    setCurrent(props.value)
  }

  return (
    <div className="rui-tabs">
      <div className="tabs">
        {children.map((item: any) => {
          console.log(item, 'item')
          return (
            <div
              className={`rui-tabs-item ${
                current === item.props.value ? 'actived' : ''
              }`}
              onClick={() => {
                clickHandler(item.props)
              }}
              key={item.props.value}
            >
              {item.props.label}
            </div>
          )
        })}
      </div>
      <div className="sticker" />
      <div className="content">
        {children.map((item: any) => {
          if (item.props.value === current) {
            return <>{item.props.children}</>
          }
        })}
      </div>
    </div>
  )
}

type TabsComponent = React.FC & {
  Item: typeof TabsItem
  Tab: typeof TabsItem
}

export default Tabs as TabsComponent
