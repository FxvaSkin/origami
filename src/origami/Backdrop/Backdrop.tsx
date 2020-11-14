import React from 'react'
import cx from 'classnames'
import styles from './backdrop.module.css'

interface Props {
  className?: string
}

const Backdrop: React.FC<Props> = ({ className, ...props }) => {
  return <div className={cx(styles.backdrop, className)} {...props} />
}

export { Backdrop }
