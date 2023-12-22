import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './testimonial.css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonialCard from "./testimonialcard";

export default function Testimonials() {
    return (
        <div id="stories">
            
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={true}
                navigation={true}
                autoplay = {true}
            >
                <div className="slidecard">
                <SwiperSlide>
                    <TestimonialCard name="Ankush Patial" tagline="Visited For Bone FractureSpinal Therapy" content="Have been visiting Dr Ajay for quite some time due to various different issues we got(unfortunately ), for my small toe fracture, back issue, my wife's wrist pain due to pregnancy and her shoulder issue which happened during gym. Dr Ajay is very nice in explainig thing. He doesn't rush and explain things clearly with references like xrays and googled images and body structure. He also performed my Wife's wrist surgery in his clinic, for which she is recovering fine. Just expect little delay sometimes with ur appointment time."/>
                </SwiperSlide>

                <SwiperSlide>
                    <TestimonialCard name="Amarnath" tagline="Visited For Spinal Surgery" content="I underwent spinal surgery at a well known hospital 3 years back,but my symptoms persisted even after surgery i tried to bear it for couple of years went to Kerala, Ayurveda and homeo none of them worked then i started visiting lots of spine surgeons but none of gave me the solution i went to dr ajay he ran some tests and diagnosed me as failed back so he suggested surgery again i waited for 3 months before i made my mind for surgery now it is 4 months of surgery im completely normal thanks to dr ajay ." />
                </SwiperSlide>

                <SwiperSlide>
                    <TestimonialCard name="PS Murthy" tagline="Visited For Slip DiscSpinal Fusion" content="Dr Ajay, u r a very great personality.....Today 8-11-2018, with cool,ease and compassion successfully did spine fusion surgery on my wife mrs p Vijaya Gayatri. Your post operative care is superb and none to match. U r core of the hard-core professional with lot of perservence, and have high concerns on people trusting you. I pray Al mighty, to bestow U with God speed and sterling success in all your endeavours in relieving the pains of patients approaching you..... Wish u and your family members good luck, wealth and prosperity."/>
                </SwiperSlide>

                <SwiperSlide>
                    <TestimonialCard name="Ram Chitturi" tagline="Visited For Knee Pain Treatment" content="Visited Dr Ajay for my mother knee problem. Our journey with Dr Ajay started almost 4 years ago.I must admit that he is a very down to earth person, have lots of patience to hear out the problem from patient and treat accordingly. This quality is very much needed for a doctor which he possess. Another important good part is he doesn’t suggest any unnecessary medication." />
                </SwiperSlide>
                </div>

                
            </Swiper>
        </div>
    );
}