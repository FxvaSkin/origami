import React from 'react'
import { Select } from 'components'

const options = [
  { key: 'fire', title: 'Fire' },
  { key: 'water', title: 'Water' },
  { key: 'electric', title: 'Electric' },
  {
    key: 'hover',
    title: 'Hover',
    sub: [
      {
        key: 'nested1',
        title: 'Nested 1',
      },
      {
        key: 'nested2',
        title: 'Nested 2',
      },
    ],
  },
]

const DropdownExample: React.FC = () => {
  return (
    <div>
      <button onClick={alert}>Click</button>
      <Select options={options} selectedKeys={1} />
    </div>
  )
}

export { DropdownExample }
