import { lazy } from 'react'

const ProductManagementPage = lazy(() => import('../components/ProductManagementPage'))
const LoginPage = lazy(() => import('../components/LoginPage'))

export const pageHandler = isLoggedIn => {
  let page = LoginPage

  if (isLoggedIn) {
    page = ProductManagementPage
  }

  return page
}
