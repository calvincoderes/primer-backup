import React from 'react'
import styled from 'styled-components'
import { Row, Col, Input, Button, Table } from 'antd'
import { SearchOutlined, PlusSquareOutlined } from '@ant-design/icons'

import ViewComponent from './container'

// const { Option } = Select

const Styled = styled.div`
  min-height: 70vh;
`

const View = () => (
  <ViewComponent>
    {({
      title,
      state,

      // userLevels,
      // sorts,
      columns,
      data,
      pagination,
      handleTableOnChange,
      handlesearchTable,
      handleCreate,
    }) => (
      <Styled>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <p style={{ color: 'var(--mirage)', fontSize: '36px', fontWeight: 'bold' }}>{title}</p>
          </Col>
          <Col span={24}>
            <Row gutter={[10, 10]}>
              <Col span={10}>
                <Input
                  onPressEnter={handlesearchTable}
                  size="large"
                  placeholder="Search"
                  prefix={<SearchOutlined />}
                />
              </Col>
              <Col span={8} offset={6} className="text-right">
                <Button
                  className="md-btns"
                  onClick={handleCreate}
                  type="primary"
                  icon={<PlusSquareOutlined />}
                  shape="round"
                >
                  Create Brands
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Table
              loading={state.users.status === 1 || state.deletedUser.status === 1}
              pagination={pagination}
              columns={columns}
              dataSource={data}
              onChange={handleTableOnChange}
            />
          </Col>
        </Row>
      </Styled>
    )}
  </ViewComponent>
)

export default View
