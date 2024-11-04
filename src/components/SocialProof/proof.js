import React, { useEffect, useState } from "react";
import janeImage from "../../images/jane.jpg";
import markImage from '../../images/jerry.jpg';
import johnImage from '../../images/john.jpg';

export default function SocialProof() {
    const testimonials = [
        {
            quote: "Absolutely love the speed and ease of connection! A real game-changer for my business.",
            name: "John Smith",
            title: "Business Owner",
            image: johnImage,
        },
        {
            quote: "Unmatched reliability! I get my work done faster without worrying about internet issues.",
            name: "Jane Doe",
            title: "Freelancer",
            image: janeImage,
        },
        {
            quote: "Amazing service! I can focus on my studies and stream without interruptions.",
            name: "John Onyancha",
            title: "Student",
            image: markImage,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="bg-gradient-to-br from-white to-blue-50 py-12 px-4 md:px-8 lg:px-12 shadow-lg rounded-lg mb-12">
            <div className="max-w-4xl mx-auto text-center mb-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-2 lg:mb-4">Our Customers Love Us</h2>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl">Trusted by people from all walks of life.</p>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden">
                <div 
                    className="flex transition-transform duration-700 ease-in-out" 
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-full flex flex-col items-center text-center p-6 md:p-8 lg:p-10 mx-2 transition-transform transform"
                        >
                            <img 
                                src={testimonial.image} 
                                alt={`${testimonial.name} - ${testimonial.title}`} 
                                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-4 border-blue-300 shadow-lg mb-4 lg:mb-6"
                            />
                            <p className="text-gray-700 italic text-base sm:text-lg md:text-xl mb-4 leading-relaxed max-w-xs sm:max-w-md lg:max-w-lg">
                                "{testimonial.quote}"
                            </p>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{testimonial.name}</h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-500">{testimonial.title}</p>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows with Reduced Opacity */}
                <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2">
                    <button
                        onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
                        className="bg-blue-600 text-white rounded-full p-2 sm:p-3 md:p-4 shadow-md opacity-30 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110 focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        &lt;
                    </button>
                </div>
                <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2">
                    <button
                        onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
                        className="bg-blue-600 text-white rounded-full p-2 sm:p-3 md:p-4 shadow-md opacity-30 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110 focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}
