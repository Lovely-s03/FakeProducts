// eslint-disable-next-line no-unused-vars
import React from 'react'

import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Router'

const App = () => {
  return (
 <RouterProvider router={routes}> </RouterProvider>
  )
}

export default App