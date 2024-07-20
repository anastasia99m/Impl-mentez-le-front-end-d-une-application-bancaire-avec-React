import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Accueil from './pages/Accueil'
import Connexion from './pages/Connexion'
import User from './pages/User'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'

function App() {
    return (      
    <Router>
        <Header/>
          <Routes>
              <Route path="/" component={Accueil} element={<Accueil />} />
              <Route path="/connexion" component={Connexion} element={<Connexion />} />
              <Route path="/connexion/user" component={User} element={<User />} />
              <Route path="/error" element={<Error />} />
          </Routes>
        <Footer/>  
    </Router>
    )}
    
export default App 