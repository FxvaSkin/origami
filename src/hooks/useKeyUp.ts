import { useEffect } from 'react'

const useKeyUp = (key: string, callback: (() => void) | null) => {
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (typeof callback === 'function') {
        if (event.code === key) {
          callback()
        }
      }
    }
    document.addEventListener('keyup', handleKeyUp)
    return () => document.removeEventListener('keyup', handleKeyUp)
  }, [key, callback])
}
export { useKeyUp }
