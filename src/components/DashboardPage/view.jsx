import React from 'react'
import styled from 'styled-components'
import { Row, Col, Image, Divider, Table } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

import ViewComponent from './container'

const Styled = styled.div`
  min-height: 70vh;
  .box-nh {
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #e0e0e0;
    padding: 24px;
  }

  .box {
    min-height: 120px;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #e0e0e0;
    padding: 24px;
  }

  .table-box {
    background: #ffffff;
    border-radius: 5px;
    min-height: 410px;
  }

  .pointer {
    cursor: pointer;
  }
`

const View = () => (
  <ViewComponent>
    {({ columns, data, handleTableOnChange }) => (
      <Styled>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <p style={{ color: 'var(--mirage)', fontSize: '36px', fontWeight: 'bold' }}>
              Dashboard
            </p>
          </Col>
          <Col span={16}>
            <Row gutter={[20, 20]}>
              <Col span={12}>
                <Row className="box">
                  <Col span={24}>
                    <Row>
                      <Col className="center-left-vh" span={21}>
                        <p style={{ fontSize: '14px', color: 'var(--grey)' }}>
                          Total quotes this week
                        </p>
                      </Col>
                      <Col className="center-right-vh" span={2} offset={1}>
                        <InfoCircleOutlined style={{ fontSize: '16px' }} />
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>340,290</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row className="box">
                  <Col span={24}>
                    <Row>
                      <Col className="center-left-vh" span={21}>
                        <p style={{ fontSize: '14px', color: 'var(--grey)' }}>
                          Total newsletter this week
                        </p>
                      </Col>
                      <Col className="center-right-vh" span={2} offset={1}>
                        <InfoCircleOutlined style={{ fontSize: '16px' }} />
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>403</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="box mt-4" gutter={[0, 16]}>
              <Col span={24}>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Top Quotes</p>
              </Col>
              <Col span={24}>
                <Table columns={columns} dataSource={data} onChange={handleTableOnChange} />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row className="box">
              <Col span={24}>
                <Row>
                  <Col className="center-left-vh" span={21}>
                    <p style={{ fontSize: '14px', color: 'var(--grey)' }}>Visits</p>
                  </Col>
                  <Col className="center-right-vh" span={2} offset={1}>
                    <InfoCircleOutlined style={{ fontSize: '16px' }} />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <p style={{ fontSize: '30px', fontWeight: 'bold' }}>8,846</p>
                  </Col>
                  <Col className="center-vh" span={24}>
                    <Image src="/images/visits.png" preview={false} />
                  </Col>
                  <Col span={24}>
                    <Divider style={{ borderColor: '#E8E8E8' }} />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}>
                    <p style={{ fontSize: '14px' }}>Daily Visits</p>
                  </Col>
                  <Col span={17} offset={1}>
                    <p style={{ fontSize: '14px' }}>1,234</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col span={24}>
                <Row className="box">
                  <Col span={24}>
                    <Row>
                      <Col className="center-left-vh" span={21}>
                        <p style={{ fontSize: '14px', color: 'var(--grey)' }}>
                          Quotes Transactions
                        </p>
                      </Col>
                      <Col className="center-right-vh" span={2} offset={1}>
                        <InfoCircleOutlined style={{ fontSize: '16px' }} />
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>1,070</p>
                      </Col>
                      <Col className="center-vh" span={24}>
                        <Image src="/images/visits.png" preview={false} />
                      </Col>
                      <Col span={24}>
                        <Divider style={{ borderColor: '#E8E8E8' }} />
                      </Col>
                    </Row>
                    <Row>
                      <Col span={10}>
                        <p style={{ fontSize: '14px' }}>Daily Quotes</p>
                      </Col>
                      <Col span={13} offset={1}>
                        <p style={{ fontSize: '14px' }}>149</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Styled>
    )}
  </ViewComponent>
)

export default View
