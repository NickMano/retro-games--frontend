import React, { useState } from 'react'
import './Search.scss'

const Search = props => {
    const {value, handleChange} = props

    return(
        <section className="search">
            <h2 className="search__title">¿Que quieres ver hoy?</h2>
            <input 
                type="text" 
                className="search__input" 
                placeholder="Buscar..." 
                value={value}
                onChange={ e => handleChange(e)}
                />
        </section>
    )
}
export default Search