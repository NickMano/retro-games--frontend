import React from 'react'
import '../assets/styles/Search.scss'

const Search = () => (
    <section class="search">
        <h2 class="search__title">¿Que quieres ver hoy?</h2>
        <input type="text" class="search__input" placeholder="Buscar..." />
    </section>
)

export default Search