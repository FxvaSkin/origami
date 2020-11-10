import { useReducer } from 'react'

type Action =
  | { type: 'open' }
  | { type: 'close' }
  | { type: 'toggle' }
  | { type: 'set'; value: boolean }

const isOpenModalReducer = (state: boolean, action: Action) => {
  switch (action.type) {
    case 'open': {
      return true
    }
    case 'close': {
      return false
    }
    case 'toggle': {
      return !state
    }
    case 'set': {
      return action.value
    }
    default: {
      return state
    }
  }
}

const useModal = () => {
  const [isOpen, dispatch] = useReducer(isOpenModalReducer, false)

  const handleClose = () => {
    dispatch({ type: 'close' })
  }

  const handleOpen = () => {
    dispatch({ type: 'open' })
  }

  const handleToggle = () => {
    dispatch({ type: 'toggle' })
  }

  return {
    isOpen,
    onClose: handleClose,
    onOpen: handleOpen,
    onToggle: handleToggle,
  }
}

export { useModal }
