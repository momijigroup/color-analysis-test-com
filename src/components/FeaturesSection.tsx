import { Palette, Sparkles, Wand2, Heart } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Smart AI Analysis',
    description: 'Our friendly AI carefully looks at your natural features to give you spot-on results—way better than those basic quizzes!',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Your Personal Color Palette',
    description: 'Get a beautiful custom palette that\'s made just for you, based on your skin tone, hair, and eye color.',
  },
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: 'Personalized Style Tips',
    description: 'We\'ll give you helpful suggestions for makeup, clothing, and accessories that will make you shine!',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Easy Learning Tools',
    description: 'Learn how to use your new colors with fun visuals and simple styling tips that anyone can follow.',
  },
]

const FeaturesSection = () => {
  return (
    <section
      className="py-20"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #FFE6D1 0%, #FFFFFF 80%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Let's Create Your <span className="gradient-text">Personal Color Story</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine smart AI technology with color expertise to give you the most accurate and personalized color analysis you can find online. It's like having a color consultant right at your fingertips!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-peachLight rounded-lg flex items-center justify-center text-brand-plum mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection