import { useEffect } from 'react'

const useInert = (lock: boolean, refs: React.RefObject<HTMLDivElement>[]) => {
  useEffect(() => {
    const rootElement = document.getElementById('root')
    if (lock) {
      rootElement?.setAttribute('inert', '')
      refs.forEach((ref, index, arr) => {
        if (!Object.is(arr.length - 1, index)) {
          ref.current?.setAttribute('inert', '')
        } else {
          ref.current?.removeAttribute('inert')
        }
      })
    } else {
      rootElement?.removeAttribute('inert')
    }
  }, [lock, refs])
}

export { useInert }
