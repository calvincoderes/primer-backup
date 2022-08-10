import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Spin, Row, Col, Input, Image, Button } from 'antd'

import { FormItem } from '../FormItem'

import ViewContainer from './container'
import OTPModal from './OTPModal'
import ForgotPasswordModal from './ForgotPasswordModal'

const Styled = styled(Row)`
  width: 100%;
  min-height: 100vh;
  .fp-form {
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
    {({ state, formik, otpDetails, setOtpDetails, otpModal, setOtpModal, fPModal, setFPModal }) => (
      <Spin spinning={state.rotps.status === 1}>
        <OTPModal
          otpDetails={otpDetails}
          setOtpDetails={setOtpDetails}
          otpModal={otpModal}
          setOtpModal={setOtpModal}
          setFPModal={setFPModal}
        />
        <ForgotPasswordModal otpDetails={otpDetails} fPModal={fPModal} setFPModal={setFPModal} />
        <Styled>
          <Col
            className="fp-form"
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 20, offset: 2 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 20, offset: 2 }}
            xxl={{ span: 20, offset: 2 }}
          >
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
              <Col span={18}>
                <p
                  style={{
                    color: 'var(--black)',
                    fontSize: '62px',
                    lineHeight: '64px',
                    fontWeight: 'bold',
                  }}
                >
                  Forgot Password
                </p>
              </Col>
              <Col span={6} className="end-vh pb-3">
                <Link to="/">
                  <Button className="pl-0 underline" type="link">
                    Go back to login?
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <form method="post" onSubmit={formik.handleSubmit} noValidate>
                  <Row>
                    <Col span={24}>
                      <FormItem
                        formik={formik}
                        label="Email Address"
                        name="email"
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
                  </Row>
                  <Row className="mt-2">
                    <Col span={6} offset={18}>
                      <Button
                        block
                        type="primary"
                        size="large"
                        htmlType="submit"
                        name="submit"
                        style={{ borderRadius: '2px' }}
                      >
                        Next
                      </Button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Col>
        </Styled>
      </Spin>
    )}
  </ViewContainer>
)

export default View
