import React from 'react'
import { Button } from './lib'
import './lib/normalize.css'
import './assets/public.less'
import HeaderComponent from './layouts/HeaderComponent'

// 1

const App = (props: any) => {
  return (
    <div>
      <HeaderComponent />
      <Button type="primary">点我</Button>
    </div>
  )
}

export default App
