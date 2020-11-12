import { useEffect } from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

const useLockBodyScroll = (lock: boolean) => {
  useEffect(() => {
    const element = document.body

    if (lock) {
      disableBodyScroll(element, { reserveScrollBarGap: true })
    } else {
      enableBodyScroll(element)
    }
    return () => {
      // Re-enable scrolling when component unmounts
      clearAllBodyScrollLocks()
    }
  }, [lock])
}

export { useLockBodyScroll }
