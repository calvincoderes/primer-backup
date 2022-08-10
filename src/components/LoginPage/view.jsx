import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Spin, Image, Input, Button } from 'antd'

import { FormItem } from '../FormItem'

import ViewContainer from './container'

const Styled = styled(Row)`
  min-height: 100vh !important;
  .login-form {
    .btn-container {
      .ant-btn-lg {
        height: 50px;
      }
    }
    .underline > span {
      text-decoration: underline !important;
      font-size: 15px !important;
      color: #44a1ff !important;
    }
  }
`

const View = () => (
  <ViewContainer>
    {({ state, formik }) => (
      <Spin spinning={state.me.status === 1 || state.login.status === 1}>
        <Styled>
          <Col
            className="login-form"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 20, offset: 2 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 20, offset: 2 }}
            xxl={{ span: 20, offset: 2 }}
          >
            <form method="post" onSubmit={formik.handleSubmit} noValidate>
              <Row className="mt-4">
                <Col
                  className="center-vh"
                  xs={{ span: 11, offset: 1 }}
                  sm={{ span: 11, offset: 1 }}
                  md={{ span: 11, offset: 1 }}
                  lg={{ span: 6, offset: 9 }}
                  xl={{ span: 6, offset: 9 }}
                  xxl={{ span: 6, offset: 9 }}
                >
                  <Image src="/images/logo.png" preview={false} />
                </Col>
              </Row>
              <Row className="mt-4 mb-3">
                <Col span={24}>
                  <p style={{ color: 'var(--black)', fontSize: '62px', fontWeight: 'bold' }}>
                    Sign in
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem
                    formik={formik}
                    label="Email Address"
                    name="username"
                    className="w-label"
                    required
                  >
                    {props => (
                      <Input
                        {...props}
                        className="default-box-input"
                        autoComplete="off"
                        placeholder=""
                        size="large"
                      />
                    )}
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem
                    formik={formik}
                    label="Password"
                    name="password"
                    className="w-label"
                    required
                  >
                    {props => (
                      <Input.Password
                        {...props}
                        className="default-box-input"
                        placeholder=""
                        size="large"
                      />
                    )}
                  </FormItem>
                </Col>
                <Col className="text-left" span={24}>
                  <Link to="/forgot-password">
                    <Button className="pl-0 underline" type="link">
                      Forgot Password?
                    </Button>
                  </Link>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="btn-container" span={6} offset={18}>
                  <Button
                    disabled={state.login.status === 1}
                    block
                    type="primary"
                    size="large"
                    htmlType="submit"
                    name="submit"
                    style={{ borderRadius: '2px' }}
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col span={20} offset={2} className="end-vh pb-3">
            <p style={{ bottom: '20px', fontSize: '13px', color: '#A9A9A9' }}>
              Copyright ©2022 Produced by Trifecta Core Technologies Corp.
            </p>
          </Col>
        </Styled>
      </Spin>
    )}
  </ViewContainer>
)

export default View
