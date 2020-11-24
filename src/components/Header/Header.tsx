import React, { useRef } from 'react'
import { FiSearch as SearchIcon } from 'react-icons/fi'
import { A as Link } from 'hookrouter'
import styles from './header.module.css'
import { useBoolean } from 'hooks'
import { Dropdown } from 'origami'

const navItems = [
  { key: 'home', to: '/', title: 'Home' },
  { key: 'examples', to: '/examples', title: 'Examples' },
  { key: 'documentation', to: '/documentation', title: 'Documentation' },
]

const Header: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null)
  const [
    dropdownIsOpen,
    { setTrue: openDropdown, setFalse: closeDropdown },
  ] = useBoolean(false)
  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.h1}>Origami</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map(item => (
              <li key={item.key}>
                <Link href={item.to} className={styles.link}>
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <button ref={ref} onClick={openDropdown} className={styles.link}>
                <SearchIcon />
              </button>
              <Dropdown
                isOpen={dropdownIsOpen}
                root={ref}
                onClose={closeDropdown}
                className={styles.dropdown}
              >
                Dropdown
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }
