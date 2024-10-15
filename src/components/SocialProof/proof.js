import React, { useEffect, useState } from "react";
import janeImage from "../../images/jane.jpg";  // Adjust paths as necessary
import markImage from '../../images/jerry.jpg';  // Adjust paths as necessary
import johnImage from '../../images/john.jpg';   // Adjust paths as necessary

export default function SocialProof() {
    const testimonials = [
        {
            quote: "I love how easy it is to connect and the speed is unmatched. Highly recommend!",
            name: "John Smith",
            title: "Business Owner",
            image: johnImage, 
        },
        {
            quote: "The Wi-Fi service is incredibly fast and reliable. I can always count on it when I need to get work done!",
            name: "Jane Doe",
            title: "Freelancer",
            image: janeImage, 
        },
        {
            quote: "Excellent service! I can stream and work without interruptions.",
            name: "John Onyancha",
            title: "Student",
            image: markImage, 
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]); // Added length as a dependency

    return (
        <section id="testimonials" className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center">What People Say About Us</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-700 ease-in-out ${currentIndex === index ? 'scale-110' : 'scale-100'} mx-4 mb-4 w-full sm:w-80`}
                    >
                        <p className="text-gray-600 italic mb-2">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                            <img 
                                src={testimonial.image} 
                                alt={`${testimonial.name} - ${testimonial.title}`} // More descriptive alt text
                                width={50} 
                                height={50} 
                                className="rounded-full mr-4" 
                            />
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
