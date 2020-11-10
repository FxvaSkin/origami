import React from 'react'
import { Modal, useModal } from 'components'
import styles from './home.module.css'

const NestedModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal()
  return (
    <>
      <button onClick={onOpen}>Open Nested</button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        containerClassName={styles.modalContainer}
      >
        <button onClick={onClose}>Close</button>
        Nested Modal
      </Modal>
    </>
  )
}

const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal()
  return (
    <>
      <div>
        <button onClick={onOpen}>Toggle modal</button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          containerClassName={styles.modalContainer}
        >
          Modal Content
          <button onClick={onClose}>Close</button>
          <NestedModal />
        </Modal>
      </div>
    </>
  )
}

export default Home
