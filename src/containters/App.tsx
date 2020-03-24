import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import '../assets/styles/App.scss'
 
const App = () => (
    <div className="App">
        <Header />
        <Search />
        <Carousel>
            <CarouselItem />  
        </Carousel>
        <Carousel>
            <CarouselItem />  
        </Carousel>
        <Footer />
    </div>
)

export default App
