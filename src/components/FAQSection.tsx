"use client"

import { useState } from "react";

const faqs = [
  {
    question: "What is AI color analysis?",
    answer:
      "AI color analysis is an advanced technology that uses artificial intelligence to determine which colors suit you best. By analyzing your unique features such as skin tone, eye color, and hair color, our AI-powered tool provides a personalized color palette to enhance your wardrobe, makeup, and style confidence.",
  },
  {
    question: "How does the color palette quiz work?",
    answer:
      "Our color palette quiz is designed to be quick and easy! Simply answer a few questions about your features and preferences, and our AI stylist will analyze your responses to create your personal color palette. You'll find out which colors match your undertones and help you look your best.",
  },
  {
    question: "Why should I use an AI stylist for color analysis?",
    answer:
      "An AI stylist uses thousands of data points and real-world color theory to deliver fast, accurate results. Unlike traditional color analysis, AI can process subtle variations in your complexion and recommend colors that truly flatter you. It's the smart way to find your best colors online!",
  },
  {
    question: "What is a personal color palette?",
    answer:
      "A personal color palette is a curated selection of shades that complement your natural coloring. Our AI color analysis generates a palette based on your unique profile, so you always know which colors suit you in clothing, accessories, and makeup.",
  },
  {
    question: "Can I trust online color analysis results?",
    answer:
      "Absolutely! Our AI color analysis quiz uses state-of-the-art technology to deliver precise recommendations. Thousands of users have discovered which colors suit them best and transformed their style with our expert AI tool.",
  },
  {
    question: "Do I need to upload a photo for color analysis?",
    answer:
      "You can get accurate results with or without a photo. For the most personalized experience, uploading a clear photo helps the AI stylist analyze your facial features and undertones to determine your best color palette.",
  },
  {
    question: "How can knowing my best colors improve my style?",
    answer:
      "Knowing which colors suit me helps you shop smarter, build a wardrobe you love, and boost your confidence. With a personal color palette from our AI color analysis, you'll always pick shades that make you look radiant and feel your best.",
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