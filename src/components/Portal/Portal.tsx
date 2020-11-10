import React from 'react'
import { createPortal } from 'react-dom'

interface Props {
  to?: HTMLElement
  children?: React.ReactNode
}

const Portal: React.FC<Props> = ({ to = document.body, children }) => {
  if (!to) return null
  return createPortal(children, to)
}

export { Portal }
