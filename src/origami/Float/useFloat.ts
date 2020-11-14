import { useEffect, useRef } from 'react'
import { useFloatContext } from './useFloatContext'

const useFloat = () => {
  const ref = useRef<HTMLDivElement>(null)
  const floatContext = useFloatContext()

  const onAddFloat = floatContext?.onAddFloat
  const onRemoveFloat = floatContext?.onRemoveFloat
  const isTopFloat = floatContext?.isTopFloat

  const handleIsTopFloat = () => {
    if (typeof isTopFloat === 'function') {
      return isTopFloat(ref)
    }
  }

  useEffect(() => {
    if (typeof onAddFloat === 'function') {
      onAddFloat(ref)
    } else {
      throw new Error('FloatContext is not provided')
    }

    return () => {
      if (typeof onRemoveFloat === 'function') {
        onRemoveFloat(ref)
      }
    }
  }, [onAddFloat, onRemoveFloat, ref])
  return { ref, isTopFloat: handleIsTopFloat }
}

export { useFloat }
