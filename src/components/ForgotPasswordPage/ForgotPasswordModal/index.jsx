import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Modal, Row, Col, Input, Image, Button, Divider, Spin } from 'antd'

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

export default function Index({ otpDetails, fPModal, setFPModal }) {
  return (
    <ViewContainer otpDetails={otpDetails} setFPModal={setFPModal}>
      {({ state, formik }) => (
        <>
          <Spin spinning={state.cp.status === 1}>
            <Modal
              width={740}
              bodyStyle={{ padding: '0' }}
              closable={false}
              footer={null}
              style={{ top: 110 }}
              visible={fPModal}

              // onCancel={() => setFPModal(false)}
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
                          Change Password
                        </p>
                      </Col>
                    </Row>
                    <Row className="mt-5" gutter={[10, 10]}>
                      <Col span={24}>
                        <FormItem formik={formik} label="Password" name="password" required>
                          {props => (
                            <Input.Password
                              {...props}
                              className="grey-box-input"
                              placeholder=""
                              size="large"
                            />
                          )}
                        </FormItem>
                      </Col>
                      <Col span={24}>
                        <FormItem
                          formik={formik}
                          label="Confirm Password"
                          name="confirm_password"
                          required
                        >
                          {props => (
                            <Input.Password
                              {...props}
                              className="grey-box-input"
                              placeholder=""
                              size="large"
                            />
                          )}
                        </FormItem>
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
                          disabled={state.cp.status === 1}
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
  fPModal: PropTypes.bool.isRequired,
  setFPModal: PropTypes.func.isRequired,

  // setOtpModal: PropTypes.func
}
