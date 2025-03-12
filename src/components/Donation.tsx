// pages/index.js
"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaHandHoldingHeart, FaDonate, FaPrayingHands  } from "react-icons/fa";
import Link from 'next/link';


export default function Donation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      text: "Only in Darkness,\nYou can see the Stars",
      icon: FaHandHoldingHeart // Placeholder for the hand with jewelry image
    },
    {
      text: "Your kindness\nLights the way",
      icon: FaDonate
    },
    {
      text: "Small actions\nCreate big change",
      icon: FaPrayingHands 
    }
  ];

  return (
    <div className="min-h-screen bg-white py-6 md:py-12">
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Hero section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The best among you are those who bring greatest benefits to many others!
            </h1>
            <p className="text-gray-600 mb-6">Empower a Future. Change a Life. Donate Today.</p>
            <div className="flex gap-4">
              <Link href={"/contact-us"} className="bg-[#063565] hover:[#063565]/80 text-white px-4 py-2 rounded-full flex items-center">
                Donate <span className="ml-1">→</span>
              </Link>
              <Link href={"/contact-us"} className="bg-[#ffa500] hover:bg-[#ffa500]/80 text-gray-800 px-4 py-2 rounded-full flex items-center">
                Volunteer <span className="ml-1">→</span>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#063565] rounded-3xl overflow-hidden relative">
            {/* Image slider */}
            <div className="relative w-full h-96">
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <p className="text-xl font-medium whitespace-pre-line">{slides[currentSlide].text}</p>
              </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    {React.createElement(slides[currentSlide].icon, { className: "text-white text-9xl" })}
                </div>
              
            </div>
            
            {/* Dots navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Middle heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Whether you want to donate or looking for donations
          </h2>
          <p className="text-gray-600">We can help you move forward</p>
        </div>

        {/* Two column section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#063565] text-white p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-4">Give Hope. Change a Life.</h3>
            <p className="text-white/90 text-sm mb-8">
            Your support fuels mentorship programs that transform lives. 
            Every donation provides guidance, education, and opportunities for those in need. 
            Join us in making a lasting impact—give today!
            </p>
            <Link href={"/contact-us"} className="border border-white text-white hover:bg-white hover:text-[#063565] px-4 py-2 rounded-full inline-flex items-center transition-colors">
              Become a Donor <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="bg-[#ffa500] text-gray-800 p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-4">Be the Mentor You Wish You Had.</h3>
            <p className="text-gray-800/90 text-sm mb-8">
            Every great success story starts with guidance. 
            You have the power to inspire, uplift, and transform a life. By becoming a mentor, you’re not just giving back—you’re shaping the future.
            </p>
            <Link href={"/contact-us"} className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-[#ffa500] px-4 py-2 rounded-full inline-flex items-center transition-colors">
              Become a Mentor <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}