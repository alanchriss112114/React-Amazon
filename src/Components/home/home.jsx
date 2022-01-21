import React from 'react'
import './home.css'
import Navbar from '../navbar/navbar'
import Banner from '../banner/banner'
import Department from '../department/department'
import Fade from '../fade/fade'
import Rowpost from '../rowpost/rowpost'
import Footer from '../footer/footer'

function home() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Fade/>
            <Department/>
            <Rowpost/>
            <Footer/>
        </div>
    
    )
}

export default home
