import React from 'react'
import { Modal, useModal } from 'components'
import styles from './home.module.css'

const Form: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="username" placeholder="Heisenberg" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

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

const MainModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal()
  return (
    <>
      <button onClick={onOpen}>Open modal</button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        containerClassName={styles.modalContainer}
      >
        <Form />
        <button onClick={onClose}>Close</button>
        <NestedModal />
      </Modal>
    </>
  )
}

const Home: React.FC = () => {
  return (
    <>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <MainModal />
      <div
        style={{
          width: '10px',
          height: '900px',
          backgroundColor: 'lightcoral',
        }}
      />
    </>
  )
}

export default Home
