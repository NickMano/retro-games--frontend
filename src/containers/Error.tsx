import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ErrorComponent from '../components/ErrorComponent'

import '../assets/styles/App.scss'
 
const Error: React.FC = () => (
    <div className="Login">
        <Header isLogin={false} secondColor={true} />
        <ErrorComponent />
        <Footer />
    </div>
)

export default Error