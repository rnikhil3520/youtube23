import React from 'react'
import "./Home.scss"
import Featured from "../../components/featured/Featured"
import Trustedby from "../../components/trustedby/Trustedby"

const Home=() => {
    return (
        <div className='home'>
        <Featured />
        <Trustedby />
        </div>
    )
}

export default Home