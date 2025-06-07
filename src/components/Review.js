import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReviewCard from './Reviewcard';

export default function Review() {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const isTransitioning = useRef(false);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/testimonials')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    const nextSlide = () => {
        if (isTransitioning.current || reviews.length === 0) return;
        isTransitioning.current = true;
        setCurrentIndex(prev => (prev + 1) % reviews.length);
        setTimeout(() => isTransitioning.current = false, 300);
    };

    const prevSlide = () => {
        if (isTransitioning.current || reviews.length === 0) return;
        isTransitioning.current = true;
        setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
        setTimeout(() => isTransitioning.current = false, 300);
    };

        const getVisibleCards = () => {
        if (reviews.length < 3) return reviews.map((review, index) => ({
            ...review,
            cardPosition: index === 1 ? 'center' : index < 1 ? 'left' : 'right'
        }));
        
        const prev = (currentIndex - 1 + reviews.length) % reviews.length;
        const next = (currentIndex + 1) % reviews.length;
        
        return [
            { ...reviews[prev], cardPosition: 'left' },
            { ...reviews[currentIndex], cardPosition: 'center' },
            { ...reviews[next], cardPosition: 'right' }
        ];
    };

    const visibleCards = reviews.length > 0 ? getVisibleCards() : [];

    return (
        <div className="bg-black pt-12 pb-20 px-4 sm:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-6 lg:mb-8 leading-tight">
                        First-Hand Opinions Of Clients On
                        <br className="hidden sm:block" />
                        Their Partnership Experience
                    </h2>
                    
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
                        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-3xl">
                            We are a software and mobile application development company that ensures its
                            expertise extends to offer a seamlessly productive and growth-oriented partnership
                            to its clients.
                        </p>
                        
                        <div className="flex space-x-4">
                            <button
                                onClick={prevSlide}
                                className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-white/25 text-white hover:bg-blue-500 flex items-center justify-center text-xl"
                                aria-label="Previous"
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-white/25 text-white hover:bg-blue-500 flex items-center justify-center text-xl"
                                aria-label="Next"
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="w-full overflow-hidden py-4">
                    <div className="h-[500px] w-full flex items-center justify-center">
                        <div className="relative w-full">
                            <div className="flex items-center justify-center h-[300px] w-full">
                                {visibleCards.map((card, i) => {
                                    const isCenter = card.cardPosition === 'center';
                                    const isLeft = card.cardPosition === 'left';
                                    const isRight = card.cardPosition === 'right';

                                    let cardClasses = [
                                        'transition-all duration-300 ease-in-out',
                                        'h-full',
                                        'w-[700px]',
                                        'flex-shrink-0',
                                        isCenter ? 'z-30 opacity-100 mx-4' : 'z-20 opacity-70',
                                        isLeft ? 'mr-2' : '',
                                        isRight ? 'ml-2' : ''
                                    ];

                                    return (
                                        <div key={`${card.id}-${i}`} className={cardClasses.join(' ')}>
                                            <ReviewCard 
                                                name={card.name}
                                                position={card.position} // This is the position from API
                                                testimonial={card.testimonial}
                                                rating={card.rating}
                                                isActive={isCenter} 
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}