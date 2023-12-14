import React from 'react'
import Intro from './components/Intro/intro'
import { MemberCard, SpecCard, SurveyCard } from './components/Cards/cards'
import Testimonials from './components/Testimonials/testimonials'
import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import CardSec from './components/CardSection'
import Stories from './components/Stories'
import Footer from './components/Footer/footer';

const Home = () => {
    return (
        <div>
            {/* <Intro />
            <div className="mainAlign">
                <div className="gridcard">
                    <div><SpecCard /></div>
                    <div><MemberCard /></div>
                </div>
                <div className="item1"><SurveyCard /></div>
            </div>
            <Testimonials /> */}
    <Banner />
    <CardSec />
    <Stories/>



        </div>
    )
}

export default Home