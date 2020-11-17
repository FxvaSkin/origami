import React from 'react'
import { Backdrop, Modal, Props } from 'origami'
import styles from './dialog.module.css'
import animations from './animations.module.css'

const Dialog: React.FC<Props> = ({ isOpen, ...props }) => (
  <>
    <Backdrop isOpen={isOpen} />
    <Modal
      isOpen={isOpen}
      className={styles.root}
      animations={animations}
      {...props}
    />
  </>
)

export { Dialog }
