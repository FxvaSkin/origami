import React from 'react'
import { FloatProvider } from 'origami'
import * as pages from 'pages'

const App: React.FC = () => (
  <FloatProvider>
    <pages.DialogExample />
  </FloatProvider>
)

export default App
