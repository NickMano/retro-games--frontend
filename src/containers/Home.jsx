import React, { useState } from 'react'
import { connect } from 'react-redux'
import Search from '../components/SearchBar/Search'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/base.scss'
 
const Home = ({myList, trends, originals}) => {
    const [query, setQuery] = useState("")
    const filteredTrends = trends.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    const filteredOriginals = originals.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))

    return(
        <>
            <Search value={query} handleChange={(e) => setQuery(e.target.value) } />

            { myList?.length > 0 &&
                <Carousel title='Mi Lista'>
                    {myList.map( item =>  <CarouselItem isMyList key={item.id} {...item}/> ) }
                </Carousel>
            }

            { filteredOriginals?.length > 0 &&
                <Carousel title='Añadidos Recientemente'>
                    {filteredOriginals.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
                </Carousel>
            }

            { filteredTrends?.length > 0 &&
                <Carousel title='Tendencias'>
                    {filteredTrends.map( item =>  <CarouselItem key={item.id} {...item}/> ) }
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
