import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CodeSandboxOutlined,
  GiftOutlined,
  PictureOutlined,
  AppstoreOutlined,
} from '@ant-design/icons'

const Container = ({ children }) => {
  const location = useLocation()
  const history = useHistory()

  const [currentPath, setCurrentPath] = useState('dashboard')
  const [defaultKeys, setDefaultKeys] = useState(null)
  const items = [
    { key: 'products', label: 'Product Management', icon: <CodeSandboxOutlined /> },
    { key: 'gift-cards', label: 'Gift Cards Management', icon: <GiftOutlined /> },
    { key: 'banners', label: 'Banners Management', icon: <PictureOutlined /> },
    {
      key: 'brands',
      label: 'Brands Management',
      icon: <AppstoreOutlined />,
    },
  ]

  const handleMenu = ({ key }) => {
    history.push('/' + key)
  }

  useEffect(() => {
    if (location.pathname) {
      const splitPath = location.pathname.substring(1).split('/').shift()

      if (!defaultKeys) {
        setDefaultKeys(splitPath || 'products')
      }

      setCurrentPath(splitPath || 'products')
    }
  }, [])

  return children({ items, currentPath, defaultKeys, handleMenu })
}

export default Container
