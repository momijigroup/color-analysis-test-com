"use client";

import Link from 'next/link';
import { ArrowRight, Users, Star } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function CTASection() {
  const pathname = usePathname();
  const quizUrl = `https://quiz.color-analysis.pro/form/view/236020?utm_source=seo&utm_medium=cpc&utm_campaign=${pathname === '/' ? 'homepage' : pathname.substring(1)}`;

  return (
    <section className="py-20 bg-gradient-to-br from-brand-plum to-brand-plumLight">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Find Your Perfect Colors?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Join over 355,000 happy people who've discovered their amazing colors with our super smart AI - it's free, fun, and life-changing!
        </p>

        <Link href={quizUrl} legacyBehavior>
          <a className="btn-primary h-16 px-12 flex items-center justify-center text-xl font-medium mb-6 mx-auto bg-white text-brand-plum hover:bg-gray-100">
            Start Your Color Analysis
            <ArrowRight size={24} className="ml-2" />
          </a>
        </Link>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-white/80 mb-8">
          <div className="flex items-center">
            <Users size={16} className="mr-2 text-brand-peachLight" />
            <span>355,000+ happy people served</span>
          </div>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span>4.9/5 love it!</span>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            What Amazing Things You&apos;ll Discover
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
            <div>
              <h4 className="font-semibold text-brand-peachLight mb-2">Your Color Season</h4>
              <p className="text-sm">Find out which of the 12 color seasons you belong to!</p>
            </div>
            <div>
              <h4 className="font-semibold text-brand-peachLight mb-2">Your Perfect Palette</h4>
              <p className="text-sm">Beautiful colors handpicked just for your unique features</p>
            </div>
            <div>
              <h4 className="font-semibold text-brand-peachLight mb-2">Style Tips</h4>
              <p className="text-sm">Fun, easy tips for clothes, makeup, and accessories</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-white/70 mt-6">
          Totally free • No sign-up needed • Instant results • 94% accuracy rate
        </p>
      </div>
    </section>
  );
}