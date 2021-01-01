import React from 'react'
import './HeaderComponent.less'
import logoPng from './../assets/logo.png'
import { Button } from '../lib'
import Tabs from '../lib/tabs'

const HeaderComponent = (props: any) => {
  const { children, type } = props
  return (
    <div className="HeaderComponent">
      <div className="margin">
        <div className="left">
          <img style={{ width: '24px' }} src={logoPng} />
        </div>

        <div className="right">
          <Button>中文文档</Button>
          <Button
            onClick={() => {
              window.open('https://github.com/zhangtao25/rui-design')
            }}
          >
            Github
          </Button>
          <Button>Light</Button>
        </div>
      </div>

      <div className="margin">
        <Tabs>
          <Tabs.Item label="Guide" value="1">
            Guide
          </Tabs.Item>
          <Tabs.Item label="Components" value="2">
            Components
          </Tabs.Item>
          <Tabs.Item label="Customization" value="3">
            Customization
          </Tabs.Item>
        </Tabs>
      </div>
      <div className="sticker"></div>
    </div>
  )
}

export default HeaderComponent
