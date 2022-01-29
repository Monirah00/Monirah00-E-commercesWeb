
import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'

const Hoc = (PagesComponent) => {
    return function WithPages(){
        return (
            <div>
                <Navbar />
                <Header />
                <PagesComponent />
                <Footer />
                
            </div>
        )

    }
 
}

export default Hoc