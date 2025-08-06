import { Palette, Droplet, Layers, Star, Info, Lightbulb, Sparkles, Eye } from 'lucide-react'

const items = [
  {
    icon: <Palette className="w-7 h-7 text-brand-plum" />, 
    title: 'Your Color Type',
    description: 'Discover your personal color season (e.g. Soft Autumn, Bright Winter)'
  },
  {
    icon: <Droplet className="w-7 h-7 text-brand-plum" />, 
    title: 'Undertone Match',
    description: "Learn whether you're cool, warm, or neutral"
  },
  {
    icon: <Layers className="w-7 h-7 text-brand-plum" />, 
    title: 'Contrast & Depth',
    description: 'Understand your natural level of contrast'
  },
  {
    icon: <Star className="w-7 h-7 text-brand-plum" />, 
    title: 'Top Colors for You',
    description: 'Get your best shades to shine'
  },
  {
    icon: <Info className="w-7 h-7 text-brand-plum" />, 
    title: 'Why It Works',
    description: 'Science-backed color theory'
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-brand-plum" />, 
    title: 'How to Use It',
    description: 'Tips for daily wear and shopping'
  },
  {
    icon: <Sparkles className="w-7 h-7 text-brand-plum" />, 
    title: 'Style Suggestions',
    description: 'Outfit and makeup ideas for your type'
  },
  {
    icon: <Eye className="w-7 h-7 text-brand-plum" />, 
    title: 'Try-On Feature',
    description: 'See how your colors look on you'
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
          What You&apos;ll Get
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