import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import OtpInput from 'react-otp-input'
import { Modal, Row, Col, Image, Button, Divider, Spin } from 'antd'

import { FormItem } from '../../FormItem'

import ViewContainer from './container'

const Styled = styled.div`
  .container {
    min-height: 70vh;
    padding: 60px 90px 60px 90px;
    background: linear-gradient(269.38deg, #151825 5.99%, #261b38 134.12%) !important;
    width: 740px;
  }
`

export default function Index({ otpDetails, setOtpDetails, otpModal, setOtpModal, setFPModal }) {
  return (
    <ViewContainer
      otpDetails={otpDetails}
      setOtpDetails={setOtpDetails}
      setOtpModal={setOtpModal}
      setFPModal={setFPModal}
    >
      {({ state, formik }) => (
        <>
          <Spin spinning={state.verifyOtpState.status === 1}>
            <Modal
              width={740}
              bodyStyle={{ padding: '0' }}
              closable={false}
              footer={null}
              style={{ top: 110 }}
              visible={otpModal}

              // onCancel={() => setOtpModal(false)}
            >
              <Styled>
                <div className="container">
                  <form method="post" onSubmit={formik.handleSubmit} noValidate>
                    <Row className="mt-4" gutter={[15, 15]}>
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
                      <Col
                        className="center-vh mt-4"
                        xs={{ span: 9, offset: 2 }}
                        sm={{ span: 9, offset: 2 }}
                        md={{ span: 9, offset: 2 }}
                        lg={{ span: 4, offset: 10 }}
                        xl={{ span: 4, offset: 10 }}
                        xxl={{ span: 4, offset: 10 }}
                      >
                        <Image src="/images/mail.png" preview={false} />
                      </Col>
                      <Col className="text-center" span={20} offset={2}>
                        <p
                          style={{
                            color: 'var(--white)',
                            fontSize: '42px',
                            fontWeight: 'bold',
                            lineHeight: '45px',
                          }}
                        >
                          {"Let's verify your OTP"}
                        </p>
                      </Col>
                    </Row>
                    <Row className="my-3" gutter={[12, 12]}>
                      <Col span={24}>
                        <FormItem formik={formik} label="" name="otp" required>
                          {props => (
                            <OtpInput
                              {...props}
                              value={formik.values.otp}
                              onChange={v => formik.setFieldValue('otp', v)}
                              numInputs={6}
                              isInputNum={true}
                              inputStyle={{ width: '90%' }}
                              separator={<span>&nbsp;</span>}
                            />
                          )}
                        </FormItem>
                      </Col>
                      <Col span={20} offset={2}>
                        <p style={{ color: 'var(--white)', fontSize: '12px', textAlign: 'center' }}>
                          A One-Time-PIN (OTP) has been sent to: {otpDetails && otpDetails.email}
                        </p>
                        <p style={{ color: 'var(--white)', fontSize: '12px', textAlign: 'center' }}>
                          Please check your email to verify your email.
                        </p>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col span={24}>
                        <Divider dashed={true} style={{ borderColor: '#00263D' }} />
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col span={8} offset={16}>
                        <Button
                          block
                          disabled={state.verifyOtpState.status === 1}
                          type="primary"
                          size="large"
                          htmlType="submit"
                          name="submit"
                        >
                          Proceed
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Styled>
            </Modal>
          </Spin>
        </>
      )}
    </ViewContainer>
  )
}

Index.propTypes = {
  otpDetails: PropTypes.object.isRequired,
  setOtpDetails: PropTypes.func.isRequired,
  otpModal: PropTypes.bool.isRequired,
  setOtpModal: PropTypes.func.isRequired,
  setFPModal: PropTypes.func.isRequired,

  // setOtpModal: PropTypes.func
}
