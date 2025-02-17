import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import PrimerComponente from './PrimerComponente.jsx'
import CardComponent from './CardComponent.jsx'





export default function Router() {

  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <Link to='/PrimerComponente' className='nav-link'>Tabla</Link>
              <Link to='/CardComponent' className='nav-link'>Card</Link>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/PrimerComponente" element={<PrimerComponente />} />
          
        </Routes>
        <Routes>
          <Route path="/CardComponent" element={<CardComponent />} />
        </Routes>
        

      </div>
    </Router>
  )
}