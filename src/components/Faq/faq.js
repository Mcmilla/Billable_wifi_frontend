import { useState } from 'react';

// FAQSection component to display frequently asked questions
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I connect to the Wi-Fi?",
      answer: "Select the network name from your device’s Wi-Fi settings and enter the provided password."
    },
    {
      question: "Is there a time limit for using the Wi-Fi?",
      answer: "Yes, you can use the Wi-Fi for [insert time limit, e.g., 2 hours per session]."
    },
    {
      question: "What should I do if I can't connect?",
      answer: "Try disconnecting and reconnecting. If issues persist, restart your device or ask our staff for help."
    },
    {
      question: "Is the Wi-Fi secure?",
      answer: "While we strive for security, please avoid sensitive transactions on public Wi-Fi."
    },
    {
      question: "Can I use the Wi-Fi for streaming?",
      answer: "Streaming is allowed, but please be mindful of bandwidth usage."
    },
    {
      question: "Who can I contact for help?",
      answer: "For assistance, please reach out to our staff at the front desk."
    }
  ];

  return (
    <section id="faq" className="mb-12 w-full px-4 lg:px-0">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg w-full">
        {faqs.map((faq, index) => (
          <div key={index} className={`border-b last:border-b-0 ${activeIndex === index ? 'bg-gray-100' : ''}`}>
            <h3
              className="py-6 px-4 text-xl font-semibold text-gray-800 cursor-pointer transition-colors duration-200 hover:bg-gray-50"
              onClick={() => toggleAnswer(index)}
              role="button"
              aria-expanded={activeIndex === index} 
              aria-controls={`faq-answer-${index}`} 
            >
              {faq.question}
            </h3>
            {activeIndex === index && (
              <p id={`faq-answer-${index}`} className="py-2 px-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
