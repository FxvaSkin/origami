import React from 'react'
import { Dialog } from 'components'
import { useBoolean } from 'hooks'

interface Props {}

const DialogExample: React.FC<Props> = () => {
  const [isOpen, { setTrue: openDialog, setFalse: closeDialog }] = useBoolean(
    false,
  )
  return (
    <div>
      <button onClick={openDialog}>Open Dialog</button>
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        Dialog
      </Dialog>
    </div>
  )
}

export { DialogExample }
