import React from 'react'
import Navbar from '../Navbar'
import Airdrops from './Airdrops'
import AirdropStatistics from './AirdropStatistics'
import Deposit from './Deposit'
import Profile from './Profile'
import Reinvest from './Reinvest'
import Statistics from './Statistics'
import Footer from '../Footer'

const Investion = () => {
    return (
        <>
            <Navbar flag={true}/> 
            <Profile/>
            <Deposit/>
            <Reinvest/>
            <Statistics/>
            <Airdrops/>
            <AirdropStatistics/>
            <Footer/>
        </>
    )
}

export default Investion