/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Button, message } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'query-string'

const Container = ({ children }) => {
  const history = useHistory()
  const location = useLocation()

  // State
  const state = useStoreState(s => ({
    users: s.users,
    deletedUser: s.deletedUser,
  }))

  // Actions
  const actions = useStoreActions(a => ({
    getUsers: a.getUsers,
    setUsers: a.setUsers,
    deleteUser: a.deleteUser,
    setDeletedUser: a.setDeletedUser,
  }))

  const [pageLimit] = useState(5)
  const [data, setData] = useState(null)
  const [userLevels] = useState([
    { id: 1, name: 'Super Admin' },
    { id: 2, name: 'Merchant Admin' },
  ])

  const [sorts] = useState([
    { id: 1, name: 'Ascending' },
    { id: 2, name: 'Descending' },
  ])
  const [pagination, setPagination] = useState({
    total: 0,
    current: 1,
    pageSize: pageLimit,
  })
  const [queries, setQueries] = useState({
    ...qs.parse(location.search),

    // ordering: 'email',
    per_page: pageLimit,
  })

  const handleCreate = () => {
    message.success('Coming soon')
  }

  const handleEdit = id => {
    message.success('Coming soon')
  }

  const handleDelete = id => {
    message.success('Coming soon')
  }

  const [columns] = useState([
    {
      title: 'Image',
      dataIndex: 'image',
    },
    {
      title: 'Product Code',
      dataIndex: 'code',
    },
    {
      title: 'Product Name',
      dataIndex: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'x',
      render: value => (
        <>
          <Button
            onClick={() => handleEdit(value.id)}
            className="m-1"
            ghost
            type="primary"
            icon={<EditOutlined />}
          />
          <Button
            onClick={() => handleDelete(value.id)}
            className="m-1"
            danger
            icon={<DeleteOutlined />}
          />
        </>
      ),
    },
  ])

  // antd Table component's handleTableChange event function
  const handleTableOnChange = (paginate, filters, sorter) => {
    // Update Pagination Data
    setPagination(paginate)

    // Prepare Query Strings Filters
    const query = {
      ...queries,
      page: paginate.current,
    }

    if (typeof sorter.field !== 'undefined') {
      query.ordering = `${sorter.order === 'descend' ? '-' : ''}${sorter.field}`
    } else {
      delete query.ordering
    }

    setQueries(query)

    // Change URL
    history.push(`?${qs.stringify(query)}`)
  }

  // On Search
  const handlesearchTable = obj => {
    // Prepare Query Strings Filters
    const query = {
      ...queries,
      search: obj.target.value,
      page: 1,
    }
    setQueries(query)

    // Change URL
    history.push(`?${qs.stringify(query)}`)
  }

  useEffect(() => {
    const { status, payload } = state.users

    if (status === 2 && payload) {
      const { results } = payload

      if (Object.keys(results).length > 0) {
        const pushedData = []

        results.map(c => {
          const { id, first_name, middle_name, last_name, email, mobile, merchant, type } = c

          pushedData.push({
            id,
            key: id,
            first_name,
            middle_name,
            last_name,
            email,
            mobile,
            merchant,
            type,
            action: c,
          })

          return setData(pushedData)
        })

        setPagination(prev => ({
          ...prev,
          total: payload.count,
        }))
      } else {
        setData(null)
      }

      actions.setUsers({ status: 0, payload: null })
    } else if (status === 3) {
      setData(null)
      actions.setUsers({ status: 0, payload: null })
    }
  }, [state.users])

  useEffect(() => {
    const { status } = state.deletedUser

    if (status === 2) {
      actions.getUsers({ ...queries })
      actions.setDeletedUser({ status: 0, payload: null })
    } else if (status === 3) {
      actions.setDeletedUser({ status: 0, payload: null })
    }
  }, [state.deletedUser])

  // Side effect of queries
  useEffect(() => {
    actions.getUsers({ ...queries })
  }, [queries])

  return children({
    title: 'Product Management',
    state,
    userLevels,
    sorts,
    columns,
    data,
    pagination,
    handleTableOnChange,
    handlesearchTable,
    handleCreate,
  })
}

export default Container
