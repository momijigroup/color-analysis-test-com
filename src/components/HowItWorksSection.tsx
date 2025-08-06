"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Camera, Sparkles, Palette } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

const steps = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Take the Fun Quiz',
    description: 'Answer some quick questions or snap a photo - it takes less than 5 minutes and it\'s actually fun!',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI Works Its Magic',
    description: 'Our smart AI analyzes your unique features to figure out your perfect color season and what looks amazing on you.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Get Your Results',
    description: 'Instantly receive your beautiful personalized color palette and styling tips that you can use right away!',
  },
]

export default function HowItWorksSection() {
  const pathname = usePathname();
  const quizUrl = `https://quiz.color-analysis.pro/form/view/236020?utm_source=seo&utm_medium=cpc&utm_campaign=${pathname === '/' ? 'homepage' : pathname.substring(1)}`;

  return (
    <section className="py-20" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            How Our <span className="gradient-text">Color Magic</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Just 3 super simple steps to discover your perfect colors - no color expertise needed, we promise it's easy!
          </p>
          <div className="block lg:hidden mt-6">
            <div className="p-2 bg-white rounded-2xl shadow-lg hover-scale max-w-md mx-auto">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-peachLight to-white flex items-center justify-center">
                <Image 
                  src="/lovable-uploads/how.png" 
                  alt="How the color analysis process works"
                  className="object-contain w-full h-full"
                  width={600}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-peachLight rounded-lg flex items-center justify-center text-brand-plum flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index === steps.length - 1 && (
                    <Link href={quizUrl} legacyBehavior>
                      <a className="btn-primary inline-flex items-center justify-center mt-6">
                        Start the Quiz
                        <ArrowRight size={20} className="ml-2" />
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -z-10 inset-0 bg-gradient-radial from-brand-peachLight/50 to-transparent"></div>
            <div className="p-2 bg-white rounded-2xl shadow-lg hover-scale">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-peachLight to-white flex items-center justify-center">
                <Image 
                  src="/lovable-uploads/how.png" 
                  alt="How the color analysis process works"
                  className="object-contain w-full h-full"
                  width={600}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}