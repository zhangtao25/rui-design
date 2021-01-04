import React, { useEffect } from 'react'

// 引入rui-design样式
import './lib/index.less'
import { Button } from './lib'
import './assets/public.less'
import HeaderComponent from './layouts/HeaderComponent'

const App = (props: any) => {
  useEffect(() => {
    class An {
      name = 'tao'
    }

    const an = new An()
    console.log(an.name)
  }, [])
  return (
    <div>
      <HeaderComponent />
    </div>
  )
}

export default App
