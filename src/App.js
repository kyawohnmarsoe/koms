import React from 'react'
import koms from './data/koms.json'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Activities from './components/Activities'
import Modal from './components/Modal'
import Test from './components/Test'
import Portfolios from './components/Portfolios'

const App = () => {
    
    return (
        <>
            {/* <Profile koms={koms}/>
            <Skills koms={koms}/>
            <Gallery koms={koms}>
                <Activities koms={koms}/>
            </Gallery>
            <Footer/> */}
            <Portfolios koms={koms}/>
            
        </>
    )
}

export default App
