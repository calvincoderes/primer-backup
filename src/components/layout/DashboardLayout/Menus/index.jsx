import React from 'react'
import { Menu } from 'antd'

import ViewContainer from './container'

const View = () => (
  <ViewContainer>
    {({ items, currentPath, defaultKeys, handleMenu }) => (
      <>
        {defaultKeys && (
          <Menu
            items={items}
            onClick={handleMenu}
            mode="inline"
            defaultOpenKeys={[defaultKeys]}
            selectedKeys={[currentPath]}
          />
        )}
      </>
    )}
  </ViewContainer>
)

export default View
