import { useEffect, useCallback } from 'react'

const useClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  callback: (() => void) | null,
) => {
  const handleMouseUp = useCallback(
    event => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('drop', handleMouseUp)
      const check = refs.every(
        ref =>
          ref.current &&
          event.type === 'mouseup' &&
          !ref.current.contains(event.target),
      )
      if (check) {
        callback && callback()
      }
    },
    [refs, callback],
  )

  const handleMouseDown = useCallback(
    event => {
      const check = refs.every(
        ref => ref.current && !ref.current.contains(event.target),
      )
      if (check) {
        document.addEventListener('mouseup', handleMouseUp, { once: true })
        document.addEventListener('drop', handleMouseUp, { once: true })
      }
    },
    [refs, handleMouseUp],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('drop', handleMouseUp)
    }
  }, [handleMouseDown, handleMouseUp])
}

export { useClickOutside }
