import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Row, Col, Image, Divider, Tooltip, Spin } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

import Menus from './Menus'
import ViewContainer from './container'

const { Header, Content, Footer, Sider } = Layout

const Styled = styled.div`
  .ant-layout-sider {
    flex: 0 0 283px !important;
    width: 283px !important;
    min-width: 283px !important;
    max-width: 283px !important;

    .ant-menu-title-content {
      font-size: 15px !important;
      font-weight: bold !important;
    }
  }

  .ant-layout-header {
    background: #ffffff;
  }

  .ant-layout-sider-children {
    background: linear-gradient(225deg, #2f8cc6 0%, #00bebe 50%, #0cc9be 50%, #beffcf 100%);
  }

  .site-layout-background {
    background: #f5f5f5;
  }

  .ant-layout-content {
    margin: 0px !important;
  }

  .ant-menu-light {
    width: 284px !important;
    color: #ffffff !important;
    background: linear-gradient(225deg, #2f8cc6 0%, #00bebe 100%) !important;

    .ant-menu-submenu-title:hover,
    .ant-menu-item:hover {
      background: none !important;
      color: #8fde55 !important;
    }
    .ant-menu-submenu {
      background: none !important;
      color: #ffffff !important;
      .ant-menu-submenu-arrow {
        color: #ffffff !important;
      }
      .ant-menu-sub {
        background: none !important;
        color: #ffffff !important;
      }
      .ant-menu-item-icon {
        color: #ffffff !important;
        background-color: none !important;
        border-radius: 10px !important;
        padding: 10px !important;
      }
    }
    .ant-menu-submenu:hover,
    .ant-menu-submenu-selected {
      background: none !important;
      color: #8fde55 !important;
      .ant-menu-item-icon {
        color: #8fde55 !important;
        background-color: #373c4e !important;
        border-radius: 10px !important;
        padding: 10px !important;
      }
    }
    .ant-menu-item {
      .ant-menu-item-icon {
        color: #ffffff !important;
        background-color: none !important;
        border-radius: 10px !important;
        padding: 10px !important;
      }
    }
    .ant-menu-item:hover {
      .ant-menu-item-icon {
        color: #8fde55 !important;
        background-color: #373c4e !important;
        border-radius: 10px !important;
        padding: 10px !important;
      }
    }
    .ant-menu-item-selected {
      background: none !important;
      color: #8fde55 !important;
      .ant-menu-item-icon {
        color: #8fde55 !important;
        background-color: #373c4e !important;
        border-radius: 10px !important;
        padding: 10px !important;
      }
      .ant-menu-title-content {
        color: #8fde55 !important;
      }
    }
  }
`

const View = ({ children, ...rest }) => (
  <ViewContainer>
    {({ isLoading, me, handleLogout }) => (
      <Styled className="layout" {...rest}>
        <Spin spinning={isLoading}>
          <Layout>
            <Sider breakpoint="lg" collapsedWidth="0">
              <Row>
                <Col span={10} offset={8}>
                  <Image src="/images/logo-white.png" height={64} preview={false} />
                </Col>
              </Row>
              <Menus />
            </Sider>

            <Layout>
              <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
                <Row>
                  <Col
                    xs={{ span: 2, offset: 22 }}
                    sm={{ span: 2, offset: 22 }}
                    md={{ span: 2, offset: 22 }}
                    lg={{ span: 2, offset: 22 }}
                    xl={{ span: 2, offset: 22 }}
                    xxl={{ span: 1, offset: 24 }}
                  >
                    <Tooltip onClick={handleLogout} title="logout">
                      <LogoutOutlined style={{ fontSize: '20px' }} />
                    </Tooltip>
                  </Col>
                </Row>
              </Header>
              <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  {children({})}
                </div>
              </Content>
              <Footer>
                <Row>
                  <Col span={24}>
                    <Divider style={{ borderColor: '#E0E0E0' }} />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span style={{ color: '#A9A9A9' }}>
                      Copyright ©2022 Produced by Trifecta Core Technologies Corp.
                    </span>
                  </Col>
                </Row>
              </Footer>
            </Layout>
          </Layout>
        </Spin>
      </Styled>
    )}
  </ViewContainer>
)

View.propTypes = {
  children: PropTypes.any.isRequired,
}

export default View
