import React, { Suspense } from 'react'

const Waiting: React.FC = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export { Waiting }
