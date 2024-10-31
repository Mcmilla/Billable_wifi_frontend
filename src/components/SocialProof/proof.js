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
        <section id="testimonials" className="bg-gray-50 py-16 px-6 md:px-12 shadow-lg rounded-lg mb-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">Our Customers Love Us</h2>
                <p className="text-gray-600 text-base md:text-lg">Trusted by people from all walks of life.</p>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-full md:w-80 bg-white rounded-lg shadow-md p-8 mx-2 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            <img 
                                src={testimonial.image} 
                                alt={`${testimonial.name} - ${testimonial.title}`} 
                                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-blue-300 shadow-md mb-6 animate-pulse"
                            />
                            <p className="text-gray-700 italic text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">"{testimonial.quote}"</p>
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                            <p className="text-sm md:text-base text-gray-500">{testimonial.title}</p>
                        </div>
                    ))}
                </div>
                {/* Navigation Arrows */}
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <button
                        onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
                        className="bg-blue-600 text-white rounded-full p-2 md:p-3 shadow-md hover:bg-blue-700 hover:shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        &lt;
                    </button>
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <button
                        onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
                        className="bg-blue-600 text-white rounded-full p-2 md:p-3 shadow-md hover:bg-blue-700 hover:shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}
