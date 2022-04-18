import React from 'react'
import Home from '../components/sections/Home'
import Perfil from '../components/sections/Perfil'
import Projects from '../components/sections/Projects'
import Contac from '../components/sections/Contac'
import Footer from './Footer'
import Services from '../components/sections/Services'

const Index = () => {
    return (
        <div className=' css-fondo-animate'>
            <Home />
            <Services/>
            <Perfil />
            <Projects />
            <Contac />
            <Footer />
          
        </div>
    )
}

export default Index