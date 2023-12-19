import React from 'react'
import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import CardSec from './components/CardSection'
import Stories from './components/Stories'
import Footer from './components/Footer/footer';
import Servicescard from './components/Servicescard';

const Home = () => {
    return (
        <div  className='container-fluid p-0'>
             
    <Banner />
    <CardSec />
    <Servicescard/>
    <Stories/>



        </div>
    )
}

export default Home