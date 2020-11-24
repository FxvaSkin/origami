import React from 'react'
import { Dialog, Select } from 'components'
import { useBoolean } from 'hooks'

interface Props {}

const options = [
  { key: 'fire', title: 'Fire' },
  { key: 'water', title: 'Water' },
  { key: 'electric', title: 'Electric' },
]

const DialogExample: React.FC<Props> = () => {
  const [
    isOpen1,
    { setTrue: openDialog1, setFalse: closeDialog1 },
  ] = useBoolean(false)
  const [
    isOpen2,
    { setTrue: openDialog2, setFalse: closeDialog2 },
  ] = useBoolean(false)
  return (
    <div>
      <button onClick={openDialog1}>Open Dialog 1</button>
      <Dialog isOpen={isOpen1} onClose={closeDialog1}>
        <button onClick={openDialog2}>Open Dialog 2</button>
        <Dialog
          isOpen={isOpen2}
          onClose={closeDialog2}
          style={{ minWidth: '8em', minHeight: '7em' }}
        >
          <Select options={options} selectedKeys={1} />
        </Dialog>
      </Dialog>
    </div>
  )
}

export { DialogExample }
