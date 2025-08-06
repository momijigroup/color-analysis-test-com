import { Palette, Droplet, Layers, Star, Info, Lightbulb, Sparkles, Eye } from 'lucide-react'

const items = [
  {
    icon: <Palette className="w-7 h-7 text-brand-plum" />, 
    title: 'Your Color Season',
    description: 'Discover which of the 12 color seasons you belong to!'
  },
  {
    icon: <Droplet className="w-7 h-7 text-brand-plum" />, 
    title: 'Your Undertone',
    description: 'Find out if you\'re warm, cool, or neutral undertoned'
  },
  {
    icon: <Layers className="w-7 h-7 text-brand-plum" />, 
    title: 'Contrast & Depth',
    description: 'Learn about your natural contrast and color intensity'
  },
  {
    icon: <Star className="w-7 h-7 text-brand-plum" />, 
    title: 'Your Best Colors',
    description: 'A gorgeous palette of colors that make you shine'
  },
  {
    icon: <Info className="w-7 h-7 text-brand-plum" />, 
    title: 'Why These Work',
    description: 'Simple explanations of why these colors love you'
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-brand-plum" />, 
    title: 'How to Use Them',
    description: 'Easy tips for wearing your perfect colors every day'
  },
  {
    icon: <Sparkles className="w-7 h-7 text-brand-plum" />, 
    title: 'Style Ideas',
    description: 'Fun styling suggestions tailored just for you'
  },
  {
    icon: <Eye className="w-7 h-7 text-brand-plum" />, 
    title: 'Virtual Try-On',
    description: 'See how different colors look on you instantly'
  },
]

const WhatWillYouGetSection = () => (
  <section
    className="py-20"
    style={{
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #FFE6D1 0%, #F8F3F9 100%)',
    }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Amazing Things You&apos;ll Discover
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="mb-4 flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-peachLight">
                {item.icon}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-brand-plum">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhatWillYouGetSection