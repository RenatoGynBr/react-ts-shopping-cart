import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { NavBar } from './components/NavBar';

function App() {

  return (

    <>
      <NavBar />
      <Container className='mb-4'>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h3>Vite + React</h3>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <p className="read-the-docs">
          <hr></hr>
          &copy;2024 By Renato Cavalcante Silva - Goiânia-GO, Brazil
        </p>
      </Container>
    </>

  )
}

export default App
