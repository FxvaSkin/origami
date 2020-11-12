import React, { useCallback, useState } from 'react'
import { FloatContext } from './FloatContext'
import { useLockBodyScroll } from 'hooks/useLockBodyScroll'

interface Props {
  children: React.ReactNode
}

const FloatProvider: React.FC<Props> = ({ children }) => {
  const [floats, setFloats] = useState<React.RefObject<HTMLDivElement>[]>([])

  const lock = Boolean(floats.length)
  useLockBodyScroll(lock)

  const rootElement = document.getElementById('root')
  if (lock) {
    rootElement?.setAttribute('inert', '')
  } else {
    rootElement?.removeAttribute('inert')
  }

  const handleAddFloat = useCallback((ref: React.RefObject<HTMLDivElement>) => {
    setFloats(old => [...old, ref])
  }, [])

  const handleRemoveFloat = useCallback(
    (ref: React.RefObject<HTMLDivElement>) => {
      setFloats(old => {
        const copy = [...old]
        const index = copy.indexOf(ref)
        if (index >= 0) {
          copy.splice(index, 1)
        }
        return copy
      })
    },
    [],
  )

  const isTopFloat = useCallback(
    (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
        const index = floats.indexOf(ref)
        if (index >= 0) {
          if (floats.length === index + 1) {
            return true
          }
        }
      }
      return false
    },
    [floats],
  )

  return (
    <FloatContext.Provider
      value={{
        floats,
        onAddFloat: handleAddFloat,
        onRemoveFloat: handleRemoveFloat,
        isTopFloat,
      }}
    >
      {children}
    </FloatContext.Provider>
  )
}

export { FloatProvider }
