import React, { lazy } from 'react'
import { A as Link, navigate, useRoutes } from 'hookrouter'
import { Waiting } from 'components'
const LazyDialogExample = lazy(() => import('pages/DialogExample'))
const LazyDropdownExample = lazy(() => import('pages/DropdownExample'))

const Menu = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link href="/examples/dialog">Dialog</Link>
        </li>
        <li>
          <Link href="/examples/dropdown">Dropdown</Link>
        </li>
      </ul>
    </aside>
  )
}

const routes = {
  '/': () => <></>,
  '/dialog': () => (
    <Waiting>
      <LazyDialogExample />
    </Waiting>
  ),
  '/dropdown': () => (
    <Waiting>
      <LazyDropdownExample />
    </Waiting>
  ),
}

const Examples = () => {
  const match = useRoutes(routes)
  return (
    <>
      {match ? (
        <>
          <Menu />
          {match}
        </>
      ) : (
        navigate('/examples')
      )}
    </>
  )
}

export { Examples }
