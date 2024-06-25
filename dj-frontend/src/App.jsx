import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'
import './app.css'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}