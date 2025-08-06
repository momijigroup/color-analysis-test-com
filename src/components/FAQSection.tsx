"use client"

import { useState } from "react";

const faqs = [
  {
    question: "What is AI color analysis?",
    answer:
      "AI color analysis is like having a super smart color expert that looks at your unique features and tells you exactly which colors make you look amazing! Our AI studies your skin tone, eye color, and hair color to create a personalized color palette just for you.",
  },
  {
    question: "How does the color palette quiz work?",
    answer:
      "It's so easy! You just answer some fun questions about your features and preferences, or upload a photo. Our smart AI takes all that info and creates a beautiful, custom color palette that's perfect for you - for your clothes, makeup, and everything!",
  },
  {
    question: "Why should I use an AI stylist for color analysis?",
    answer:
      "Our AI has learned from thousands of color experts and can spot tiny details about your coloring that might be missed otherwise. It's like having the world's best color consultant available 24/7, giving you super accurate results instantly!",
  },
  {
    question: "What is a personal color palette?",
    answer:
      "Your personal color palette is like a collection of your 'magic colors' - the specific shades that make you look radiant, healthy, and absolutely gorgeous! It's created just for you based on your unique natural coloring.",
  },
  {
    question: "Can I trust online color analysis results?",
    answer:
      "Absolutely! Our AI is super reliable and has helped over 355,000 people find their perfect colors with amazing accuracy. We've fine-tuned it to be incredibly precise, so you can trust the results to help you look your absolute best!",
  },
  {
    question: "Do I need to upload a photo for color analysis?",
    answer:
      "Nope, a photo is totally optional! You can get great results just by answering our fun questions. But if you do upload a photo, our AI can be even more precise about your unique features and undertones - it's up to you!",
  },
  {
    question: "How can knowing my best colors improve my style?",
    answer:
      "Oh, it's life-changing! When you know your perfect colors, shopping becomes so much easier and more fun. You'll build a wardrobe you absolutely love, always look put-together, and feel confident that every color you wear makes you look amazing!",
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