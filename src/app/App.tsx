import './App.css'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/shared/ui/Layout/Layout'
import { HomePage } from '@/pages/home/ui/homePage'
import { StatsPage } from '@/pages/stats/ui/StatsPage'
import { Provider } from 'react-redux'
import { store } from './store'
import { useTaskGenerator } from '@/features/taskGenerator'

function App() {
  useTaskGenerator();

  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="stats" element={<StatsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ Provider>
  )
}

export default App
