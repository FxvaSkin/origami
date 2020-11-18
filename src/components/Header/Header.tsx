import React from 'react'
import { A as Link } from 'hookrouter'

const Header: React.FC = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/examples">Examples</Link>
        </li>
      </ul>
    </header>
  )
}

export { Header }
