import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

//pages
import Home from './pages/HomePage'

function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={ <Home /> } />
          <Route path='about' element={ <Home /> } />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
