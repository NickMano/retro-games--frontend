import React from 'react'
import useInitialState from '../hooks/useInitialState'

import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'
 
const App: React.FC = () => {

    const initialState = useInitialState(API)

    return(
        <div className="App">
            <Header />
            <Search />
            { initialState.mylist?.length > 0 &&
                <Carousel title='Mi Lista'>
                    {initialState.mylist.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
                </Carousel>
            }

            { initialState.originals?.length > 0 &&
                <Carousel title='Añadidos Recientemente'>
                    {initialState.originals.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
                </Carousel>
            }


            { initialState.trends?.length > 0 &&
                <Carousel title='Tendencias'>
                    {initialState.trends.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
                </Carousel>
            }

            <Footer />
        </div>
)}

export default App