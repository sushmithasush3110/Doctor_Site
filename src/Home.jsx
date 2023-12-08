import React from 'react'
import Intro from './components/Intro/intro'
import { MemberCard, SpecCard, SurveyCard } from './components/Cards/cards'
import Testimonials from './components/Testimonials/testimonials'
import './App.css';

const Home = () => {
    return (
        <div>
            <Intro />
            <div className="mainAlign">
                <div className="gridcard">
                    <div><SpecCard /></div>
                    <div><MemberCard /></div>
                </div>
                <div className="item1"><SurveyCard /></div>
            </div>
            <Testimonials />
        </div>
    )
}

export default Home