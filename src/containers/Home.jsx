import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/App.scss'
 
const Home = ({myList, trends, originals}) => {
    return(
        <>
            <Search />

            { myList?.length > 0 &&
                <Carousel title='Mi Lista'>
                    {myList.map( item =>  <CarouselItem isMyList key={item.id} {...item}/> ) }
                </Carousel>
            }

            { originals?.length > 0 &&
                <Carousel title='Añadidos Recientemente'>
                    {originals.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
                </Carousel>
            }


            { trends?.length > 0 &&
                <Carousel title='Tendencias'>
                    {trends.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
                </Carousel>
            }

        </>
)}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        originals: state.originals,
        trends: state.trends,
    }
}

export default connect(mapStateToProps, null)(Home)
