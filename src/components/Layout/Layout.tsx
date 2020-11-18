import React from 'react'
import { Header } from 'components/Header'

const Layout: React.FC = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
)

export { Layout }
