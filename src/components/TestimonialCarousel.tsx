// components/TestimonialCarousel.jsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
    {
        id: 1,
        name: 'Priscilla',
        role: 'Accountant',
        image: '/img/pricillar.png',
        content: 'Meeting mentors who have gone through similar struggles and achieved success gave me hope. Their guidance has helped me improve my study habits and set clear career goals.'
    },
    {
        id: 2,
        name: 'Samuel Kirigha',
        role: 'Software Engineer',
        image: '/img/sammy.jpg',
        content: 'Undugu is more than just a mentorship program; it is a family. It has taught me the importance of responsibility, leadership, and giving back to the community.'
    },
    {
        id: 3,
        name: 'Jacob Mazera',
        role: 'Construction Engineer',
        image: '/img/jacob.JPG',
        content: 'Before joining Undugu, I struggled with self-confidence and lacked motivation in my studies. Through the mentorship sessions, I gained clarity, purpose, and the drive to succeed.'
    },
    {
        id: 4,
        name: 'Alex Johnson',
        role: 'Student Leader',
        image: '/images/alex.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quis fugit quasi vero ad placeat tempora repudiandae libero nam. Consectetur adipisicing elit ipsum dolor sit amet.'
    },
    {
        id: 5,
        name: 'Maria Garcia',
        role: 'Top Performer',
        image: '/images/maria.jpg',
        content: 'Consectetur adipisicing elit.Ducimus laborum quis fugit quasi vero ad placeat tempora repudiandae libero nam. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 6,
        name: 'David Chen',
        role: 'Program Graduate',
        image: '/images/david.jpg',
        content: 'Tempora repudiandae libero nam lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quis fugit quasi vero ad placeat.'
    }
];

const TestimonialCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const [totalSlides, setTotalSlides] = useState(0);
    const carouselRef = useRef(null);

    // Update cards to show based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        // Initial call
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update total slides when cardsToShow changes
    useEffect(() => {
        setTotalSlides(Math.ceil(testimonials.length / cardsToShow));
    }, [cardsToShow]);

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    // Get visible testimonials based on current slide and cards to show
    const getVisibleTestimonials = () => {
        const startIndex = (currentSlide * cardsToShow) % testimonials.length;
        const endIndex = startIndex + cardsToShow;

        if (endIndex <= testimonials.length) {
            return testimonials.slice(startIndex, endIndex);
        } else {
            // Handle wrapping around when reaching the end
            return [
                ...testimonials.slice(startIndex),
                ...testimonials.slice(0, endIndex - testimonials.length)
            ];
        }
    };

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-2">
                    Over 100 students have benefited from this program
                </h2>
                <p className="text-gray-500 text-lg">
                    Here are some of their success stories
                </p>
            </div>

            <div className="relative px-4">
                {/* Carousel navigation - Previous button */}
                <button
                    onClick={goToPrevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100"
                    aria-label="Previous testimonials"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Carousel container */}
                <div
                    ref={carouselRef}
                    className="overflow-hidden"
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(0%)` }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                            {getVisibleTestimonials().map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className=" rounded-lg border bg-white border-amber-500 -z-50 shadow-sm p-6 relative"
                                >

                                    <div className="flex flex-col items-center">
                                        <div className="w-20 h-20 rounded-full bg-white overflow-hidden -mt-6 z-50 mb-4 border-4 border-white shadow-md">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={80}
                                                height={80}
                                                className="object-cover w-full h-full "
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                                        <p className="text-gray-500 mb-4">{testimonial.role}</p>
                                        <p className="text-gray-600 text-sm">{testimonial.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Carousel navigation - Next button */}
                <button
                    onClick={goToNextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-gray-100"
                    aria-label="Next testimonials"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#ffa500]' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link href="/testimonials" className="flex items-center justify-center gap-4  border-[2px] border-[#ffa500] hover:bg-[#ffa500] text-black w-[200px] text-lg py-3 rounded-md transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    Read More Testimonials
                </Link>

            </div>
        </section>
    );
};

export default TestimonialCarousel;