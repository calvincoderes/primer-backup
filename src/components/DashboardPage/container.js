import { useState } from 'react'

const Container = ({ children }) => {
  const [columns] = useState([
    {
      title: 'Rank',
      dataIndex: 'rank',
    },
    {
      title: 'Player',
      dataIndex: 'player',
    },
  ])

  const [data] = useState([
    {
      key: '1',
      rank: '1',
      player: 'Marlon Rosas',
    },
    {
      key: '2',
      rank: '2',
      player: 'Marco Calimutan',
    },
    {
      key: '3',
      rank: '3',
      player: 'Junice Sis',
    },
    {
      key: '4',
      rank: '4',
      player: 'Gelo Yagslob',
    },
    {
      key: '5',
      rank: '5',
      player: 'Ayan Calimutan',
    },
  ])

  const handleTableOnChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  return children({ columns, data, handleTableOnChange })
}

export default Container
