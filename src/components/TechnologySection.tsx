import Image from 'next/image'
import { Eye, BrainCircuit, Palette } from 'lucide-react'

const technologies = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Smart Vision Analysis',
    description: 'Our AI carefully looks at your skin tone, contrast, and natural brightness',
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: 'Super Smart Learning',
    description: 'Trained on thousands of expert color analyses to get it just right',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Real Color Expertise',
    description: 'Built on proven methods from professional stylists and color experts',
  },
]

const TechnologySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-radial from-brand-peachLight/50 to-transparent"></div>
            <div className="p-2 bg-white rounded-2xl shadow-lg hover-scale">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-peachLight to-white flex items-center justify-center">
                <Image 
                  src="/lovable-uploads/ai.png" 
                  alt="AI technology analyzing facial features"
                  className="object-contain w-full h-full"
                  width={600}
                  height={450}
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="gradient-text">Smart AI Technology</span> That Gets <span className="gradient-text">Your Colors Right</span>
              </h2>
              <p className="text-lg text-gray-600">
                We blend cutting-edge AI vision, smart learning, and real color expertise to find your perfect colors every time.
              </p>
            </div>

            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-peachLight rounded-lg flex items-center justify-center text-brand-plum flex-shrink-0">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologySection