import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { History } from './pages/history'
import { DefaultLayout } from './layouts/DefaultLayount'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<History />} />
      </Route>
    </Routes>
  )
}
