import React, { lazy } from 'react'
import { navigate, useRoutes } from 'hookrouter'
import { FloatProvider } from 'origami'
import { Layout, Waiting } from 'components'

const LazyHomePage = lazy(() => import('pages/Home'))
const LazyExamplesPage = lazy(() => import('pages/Examples'))
const LazyDocumentationPage = lazy(() => import('pages/Documentation'))

const routes = {
  '/': () => (
    <Waiting>
      <LazyHomePage />
    </Waiting>
  ),
  '/examples*': () => (
    <Waiting>
      <LazyExamplesPage />
    </Waiting>
  ),
  '/documentation': () => (
    <Waiting>
      <LazyDocumentationPage />
    </Waiting>
  ),
}

const App: React.FC = () => {
  const match = useRoutes(routes)

  if (!match) {
    navigate('/')
  }

  return (
    <FloatProvider>
      <Layout>{match}</Layout>
    </FloatProvider>
  )
}

export default App
