import React from 'react'
import Advert from '../components/Advert'
import Categories from '../components/Categories'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
          
            <NavBar/>
            <Advert/>
            <Slider/>
            <Categories/>
          
    
        </div>
    )
}

export default Home