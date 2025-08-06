import Image from 'next/image'

const WhyColorAnalysisMattersSection = () => (
  <div
    className="w-full px-4 sm:px-8 lg:px-16"
    style={{
      background: 'linear-gradient(120deg, #F8F3F9 0%, #FFF8F3 100%)',
      borderRadius: '20px',
    }}
  >
    <section className="py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Why <span className="gradient-text">Finding Your Colors</span> Changes Everything
          </h2>
          {/* Mobile image after heading */}
          <div className="block md:hidden mb-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-3 overflow-hidden mx-auto">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/lovable-uploads/before.png"
                  alt="Before color analysis example for online personal color analysis"
                  fill
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            When you wear colors that love your natural beauty, magic happens! You'll look more radiant and feel more confident. Here's what you'll get:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start text-brand-plum">
              <span className="mr-2 mt-1">✔</span>
              <span className="text-gray-700">Your skin will glow and look naturally beautiful</span>
            </li>
            <li className="flex items-start text-brand-plum">
              <span className="mr-2 mt-1">✔</span>
              <span className="text-gray-700">Shopping becomes so much easier when you know your perfect colors</span>
            </li>
            <li className="flex items-start text-brand-plum">
              <span className="mr-2 mt-1">✔</span>
              <span className="text-gray-700">A wardrobe that works together beautifully every single day</span>
            </li>
            <li className="flex items-start text-brand-plum">
              <span className="mr-2 mt-1">✔</span>
              <span className="text-gray-700">Always looking polished and put-together effortlessly</span>
            </li>
          </ul>
        </div>
        {/* Right: Framed Image, flush left/right (desktop only) */}
        <div className="hidden md:flex justify-center items-center w-full">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-3 overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/lovable-uploads/before.png"
                alt="Before color analysis example for online personal color analysis"
                fill
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default WhyColorAnalysisMattersSection