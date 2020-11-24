import React, { useRef } from 'react'
import cx from 'classnames'
import { Dropdown } from 'origami'
import { useBoolean } from 'hooks'
import styles from './select.module.css'

interface Option {
  key: number | string
  title: string
}

interface Props {
  selectedKeys: number
  options: Array<Option>
}

const Nested: React.FC = () => {
  const ref = useRef<HTMLOptionElement>(null)
  const [
    isOpen,
    { setTrue: openDropdown, setFalse: closeDropdown },
  ] = useBoolean(false)
  const handleHover = () => {
    openDropdown()
  }
  const handleClose = () => {
    closeDropdown()
  }

  return (
    <>
      <option ref={ref} onMouseOver={handleHover}>
        Hoverr
      </option>
      <Dropdown
        root={ref}
        isOpen={isOpen}
        onClose={handleClose}
        className={styles.root}
      >
        <option className={cx(styles.item)}>Kek</option>
      </Dropdown>
    </>
  )
}

const Select: React.FC<Props> = ({ options, selectedKeys }) => {
  const rootRef = useRef<HTMLInputElement>(null)
  const ignoreRef = useRef<HTMLLabelElement>(null)
  const [
    dropdownIsOpen,
    { setTrue: openDropdown, setFalse: closeDropdown },
  ] = useBoolean(false)
  const handleClose = () => {
    closeDropdown()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      openDropdown()
    }
  }

  const handleChange = () => {
    openDropdown()
  }

  return (
    <label ref={ignoreRef}>
      SelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelectSelect
      <input
        ref={rootRef}
        onClick={openDropdown}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <Dropdown
        isOpen={dropdownIsOpen}
        className={styles.root}
        layoutClassName={styles.layout}
        onClose={handleClose}
        root={rootRef}
        ignore={[ignoreRef]}
      >
        {options.map((option, index) => (
          <option
            key={option.key}
            className={cx(styles.item, {
              [styles.selected]: index === selectedKeys,
            })}
          >
            {option.title}
          </option>
        ))}
      </Dropdown>
    </label>
  )
}

export { Select }
