"use client"

import { useState } from "react";

const faqs = [
  {
    question: "What is AI color analysis?",
    answer:
      "AI color analysis utilizes artificial intelligence algorithms to determine optimal color selections based on individual characteristics. The system analyzes skin tone, eye color, and hair color to generate personalized color palettes for wardrobe and cosmetic applications.",
  },
  {
    question: "How does the color palette quiz work?",
    answer:
      "The color palette assessment requires responses to targeted questions regarding physical characteristics and preferences. The AI system processes this data to generate a customized color palette based on undertone analysis and compatibility factors.",
  },
  {
    question: "Why should I use an AI stylist for color analysis?",
    answer:
      "AI-based analysis processes extensive datasets and established color theory principles to provide efficient, accurate results. The system can identify subtle variations in complexion that may be overlooked in traditional methods, delivering precise color recommendations.",
  },
  {
    question: "What is a personal color palette?",
    answer:
      "A personal color palette consists of specifically selected colors that complement an individual's natural coloring characteristics. The AI analysis generates this palette based on your unique profile for application in clothing, accessories, and cosmetics.",
  },
  {
    question: "Can I trust online color analysis results?",
    answer:
      "The AI color analysis system employs advanced technology to provide accurate recommendations. The platform has processed over 355,000 analyses, demonstrating consistent reliability in color assessment and recommendation generation.",
  },
  {
    question: "Do I need to upload a photo for color analysis?",
    answer:
      "Photo upload is optional for the analysis process. While accurate results can be obtained through questionnaire responses alone, photo submission enables more precise feature analysis and undertone determination.",
  },
  {
    question: "How can knowing my best colors improve my style?",
    answer:
      "Understanding your optimal color palette enables more informed purchasing decisions and systematic wardrobe development. The analysis provides a framework for selecting colors that enhance your natural appearance and maintain visual consistency.",
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="w-full bg-[#f8fafc] py-20">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
          }))
        }) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
        {/* Left: Heading */}
        <div className="md:w-1/3 flex-shrink-0 flex items-start justify-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight md:leading-none">
            <span className="block">Frequently</span>
            <span className="block">Asked</span>
            <span className="block">Questions</span>
          </h2>
        </div>
        {/* Right: Accordion */}
        <div className="md:w-2/3 w-full bg-white rounded-2xl shadow-sm p-0 divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center text-lg font-medium text-gray-900 hover:bg-gray-50 transition"
                onClick={() => setOpen(open === idx ? -1 : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                {faq.question}
                <span className={`ml-4 transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-6 pb-5 text-gray-600 text-base transition-all duration-300 ease-in-out ${open === idx ? 'block' : 'hidden'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}