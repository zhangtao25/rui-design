import React, { useState } from 'react'
import TabsItem from './tabs-item'
import './index.less'

const Tabs = (props: any) => {
  const { children, type, onClick } = props
  const [current, setCurrent] = useState(null)
  console.log(children, 'children')

  return (
    <div className="rui-tabs">
      <div className="header">
        {children.map((item: any) => {
          return <div key={item.props.value}>{item.props.label}</div>
        })}
      </div>
      <div>{children[0]}</div>
    </div>
  )
}

type TabsComponent = React.FC & {
  Item: typeof TabsItem
  Tab: typeof TabsItem
}

export default Tabs as TabsComponent
// export default Tabs
