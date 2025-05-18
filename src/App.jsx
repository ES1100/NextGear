import './App.css'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Categories from './pages/Categories'
import { CUSTOM_ROUTES } from './constants/custom-routse'

function App() {

  return (
    <Router>
      <Routes>
        <Route path={CUSTOM_ROUTES.HOME} element={<Home />} />
        <Route path={CUSTOM_ROUTES.ABOUT_US} element={<AboutUs />} />
        <Route path={CUSTOM_ROUTES.CATEGORIES} element={<Categories />} />
        <Route path={CUSTOM_ROUTES.CONTACT} element={<Contact />} />



      </Routes>
    </Router>


  )
}

export default App
