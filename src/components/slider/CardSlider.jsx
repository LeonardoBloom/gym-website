import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './CardSlider.css'; // Import custom CSS

function CardSlider() {

    const cards = [
        {
            id: 1,
            image: 'https://loremflickr.com/320/240?random=3', // Replace with your image URL
            icon: '🏋️',
            text: 'Strength Training',
        },
        {
            id: 2,
            image: 'https://loremflickr.com/320/240?random=1', // Replace with your image URL
            icon: '💪',
            text: 'Cardio Workouts',
        },
        {
            id: 3,
            image: 'https://loremflickr.com/320/240?random=2', // Replace with your image URL
            icon: '🧘',
            text: 'Yoga Classes',
        },
        {
            id: 4,
            image: 'https://loremflickr.com/320/240?random=6', // Replace with your image URL
            icon: '✨',
            text: 'Crossfit',
        },
    ];


    return (
        
        <div className="swiper-wrapper-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={3} // Show 3 slides at a time
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                    delay: 3000, // Delay in ms
                    disableOnInteraction: false, // Continue autoplay after interaction
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                 {cards.map(card => (
                    <SwiperSlide key={card.id}>
                        <div
                            className="card"
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            <div className="card-content">
                                <div className="icon">{card.icon}</div>
                                <div className="text">{card.text}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
 export default CardSlider;