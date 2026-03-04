import './App.css'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../shared/ui/Layout/Layout'

function App() {
  return (
    <>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} */}
          {/* <Route path="stats" element={<StatsPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
