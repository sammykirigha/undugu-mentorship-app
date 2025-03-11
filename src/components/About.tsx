import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:py-24">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg">
          Transforming Lives Through Mentorship. The mentees gain by boosting their self-esteem, confidence and desire to excel as well as valuable lessons on life skills, career, positive attitude, avoidance of social evils such as drug abuse, immorality and risky behaviors.
          </p>
        </div>
        
        {/* Right Content - Team Image */}
        <div className="relative h-80 md:h-96 lg:h-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/image-3.jpg" 
            alt="HubSpot Team"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  </section>
  )
}
