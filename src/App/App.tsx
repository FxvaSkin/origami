import * as React from 'react'
import { FloatProvider } from 'components'
import HomePage from 'pages/Home'

const App: React.FC = () => (
  <FloatProvider>
    <HomePage />
  </FloatProvider>
)

export default App
