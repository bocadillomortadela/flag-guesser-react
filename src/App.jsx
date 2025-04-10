import './App.css'
import { Route, Routes } from 'react-router-dom'
import GuessCountry from './pages/GuessCountry/GuessCountry'
import HigherLower from './pages/HigherLower/HigherLower'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<GuessCountry />} />
        <Route path='/HigherLower' element={<HigherLower />} />
      </Routes>
    </div>
  )
}

export default App
