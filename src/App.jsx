import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Loader from './components/Loader'
import PrivateRoute from './components/PrivateRoute'
import { pageHandler } from './utils/helpers'

// Admin Page
// const DashboardPage = lazy(() => import('./components/DashboardPage'))

/* Product Management */
const ProductManagementPage = lazy(() => import('./components/ProductManagementPage'))

/* Gift Cards */
const GiftCardsManagementPage = lazy(() => import('./components/GiftCardsManagementPage'))

/* Banners Cards */
const BannersManagementPage = lazy(() => import('./components/BannersManagementPage'))

/* Brands Cards */
const BrandsManagementPage = lazy(() => import('./components/BrandsManagementPage'))

// const SignupSuccessPage = lazy(() => import('./components/SignupPage/Success'))
const ForgotPasswordPage = lazy(() => import('./components/ForgotPasswordPage'))
const CheckEmailPage = lazy(() => import('./components/CheckEmailPage'))
const CreateNewPasswordPage = lazy(() => import('./components/CreateNewPasswordPage/Main'))
const CreateNewPasswordPageSuccess = lazy(() =>
  import('./components/CreateNewPasswordPage/Success'),
)

const isLoggedIn = sessionStorage.getItem('oauth')

const App = () => (
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={pageHandler(isLoggedIn)} />
        <Route exact path="/forgot-password" component={ForgotPasswordPage} />
        <Route exact path="/new-password" component={CreateNewPasswordPage} />
        <Route exact path="/new-password/success" component={CreateNewPasswordPageSuccess} />
        <Route exact path="/check-email" component={CheckEmailPage} />
        <PrivateRoute>
          {() => (
            <Switch>
              {/* <Route exact path="/dashboard" component={DashboardPage} /> */}

              {/* Products */}
              <Route exact path="/products" component={ProductManagementPage} />

              {/* Gift Cards Page */}
              <Route exact path="/gift-cards" component={GiftCardsManagementPage} />

              {/* Banners Page */}
              <Route exact path="/banners" component={BannersManagementPage} />

              {/* Brands Page */}
              <Route exact path="/brands" component={BrandsManagementPage} />
            </Switch>
          )}
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  </Suspense>
)

export default App
