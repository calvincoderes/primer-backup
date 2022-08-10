import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ViewContainer from './container'

const Styled = styled.div`
  padding: 20px;
  background: linear-gradient(269.38deg, #151825 5.99%, #261b38 134.12%) !important;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const View = ({ children, ...rest }) => (
  <ViewContainer>
    {() => (
      <Styled className="layout" {...rest}>
        {children({})}
      </Styled>
    )}
  </ViewContainer>
)

View.propTypes = {
  children: PropTypes.any.isRequired,
}

export default View
