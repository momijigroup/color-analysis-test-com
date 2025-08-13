import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: {
    default: 'Find Your Perfect Colors | Free AI Color Analysis Quiz',
    template: '%s | Color Analysis Pro'
  },
  description: "Discover which colors make you look amazing! Take our free AI-powered color analysis quiz and get your personalized color palette in just minutes. Join 355,000+ happy users!",
  keywords: ['color analysis', 'seasonal color analysis', 'what season am i', 'color season quiz', 'AI color analysis', 'personal color palette'],
  authors: [{ name: 'Color Analysis Pro' }],
  creator: 'Color Analysis Pro',
  publisher: 'Color Analysis Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://color-analysis-test.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://color-analysis-test.com',
    title: 'Find Your Perfect Colors | Free AI Color Analysis Quiz',
    description: "Discover which colors make you look amazing! Take our free AI-powered color analysis quiz and get your personalized color palette in just minutes. Join 355,000+ happy users!",
    siteName: 'Color Analysis Pro',
    images: [
      {
        url: '/lovable-uploads/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Color Analysis Pro - Find your perfect colors with AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Your Perfect Colors | Free AI Color Analysis Quiz',
    description: "Discover which colors make you look amazing! Take our free AI-powered color analysis quiz and get your personalized color palette in just minutes. Join 355,000+ happy users!",
    images: ['/lovable-uploads/og-image.png'],
    creator: '@coloranalysis',
    site: '@coloranalysis',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: "https://color-analysis-test.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Find Your Perfect Colors | Free AI Color Analysis Quiz",
    "description": "Discover which colors make you look amazing! Take our free AI-powered color analysis quiz and get your personalized color palette in just minutes. Join 355,000+ happy users!",
    "url": "https://color-analysis-test.com/",
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Color Analysis Pro",
      "url": "https://color-analysis-test.com",
      "description": "Find your perfect colors with our friendly AI-powered color analysis and get your personalized color palette",
      "publisher": {
        "@type": "Organization",
        "name": "Color Analysis Pro",
        "url": "https://color-analysis-test.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://color-analysis-test.com/lovable-uploads/logo1.png",
          "width": 64,
          "height": 64
        }
      }
    }
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Color Analysis Pro",
    "url": "https://color-analysis-test.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://color-analysis-test.com/lovable-uploads/logo1.png",
      "width": 64,
      "height": 64
    },
    "description": "Helping you discover your perfect colors with friendly AI-powered color analysis and personalized color palettes",
    "sameAs": [
      "https://twitter.com/coloranalysis"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://color-analysis-test.com/contact-us"
    },
    "foundingDate": "2024",
    "areaServed": "Worldwide",
    "serviceType": "AI Color Analysis"
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-525K5GJ3');`
          }}
        />
        {/* End Google Tag Manager */}

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          suppressHydrationWarning
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7C3AED" />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://quiz.color-analysis.pro" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://quiz.color-analysis.pro" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-525K5GJ3"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}

      </body>
    </html>
  );
}