import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import coverImage from '../../../assets/images/login-cover.png'

import ViewContainer from './container'


const Styled = styled.div`
  background: linear-gradient(269.38deg, #f4f4f9 5.99%, ##e5e5e5 84.12%) !important;
  .main-container {
    height: 100vh !important;
    .l-side {
      background-image: url(${coverImage}) !important;
      background-repeat: no-repeat;
      background-size: cover;
      .live-box {
        text-align: center;
        border-radius: 20px;
        padding: 4px 9px;
        background: #d73535;
      }

      .team-box-scores {
        height: 60px;
        padding: 8px;
        background: #000000;
        opacity: 0.7;
        border-radius: 10px;
      }
    }
  }
`

const View = ({ children, ...rest }) => (
  <ViewContainer>
    {() => (
      <Styled {...rest}>
        <Row className="main-container">
          <Col span={12} className="l-side pt-20" />
          <Col span={12}>{children({})}</Col>
        </Row>
      </Styled>
    )}
  </ViewContainer>
)

View.propTypes = {
  children: PropTypes.any.isRequired,
}

export default View
