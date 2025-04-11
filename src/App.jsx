import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import GuessCountry from './pages/GuessCountry/GuessCountry'
import CountryInfo from './pages/CountryInfo/CountryInfo'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<GuessCountry />} />
        <Route path='/country/:name' element={<CountryInfo />} />
      </Routes>
    </div>
  )
}

export default App
