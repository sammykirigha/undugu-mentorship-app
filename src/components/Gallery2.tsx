// components/Gallery.js
"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

export default function Gallery2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample gallery images - in a real app, you would likely fetch these from an API
  const galleryImages = [
    {
      thumbnail: '/Mentors_2.jpg',
      fullSize: '/Mentors_2.jpg',
      alt: 'Undugu team members standing together',
    },
    {
      thumbnail: '/Mentors_one.jpg',
      fullSize: '/Mentors_one.jpg',
      alt: 'Presenter speaking to a group of students',
    },
    {
      thumbnail: '/Mentors_two.jpg',
      fullSize: '/Mentors_two.jpg',
      alt: 'Team members at university event',
    },
    // Add more images here for the carousel
    {
      thumbnail: '/Taru_boys.jpg',
      fullSize: '/Taru_boys.jpg',
      alt: 'Workshop with students',
    },
  ];


interface GalleryImage {
    thumbnail: string;
    fullSize: string;
    alt: string;
}

const openModal = (index: number): void => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
};

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (!isModalOpen) return;
    
    if (e.key === 'ArrowLeft') {
        goToPrevious();
    } else if (e.key === 'ArrowRight') {
        goToNext();
    } else if (e.key === 'Escape') {
        closeModal();
    }
};

  return (
    <div className="w-full py-16 bg-gray-100" onKeyDown={handleKeyDown}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-3">Gallery</h2>
        <div className="w-12 h-1 bg-[#ffa500] mx-auto mb-10"></div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-500 text-white rounded-full p-3 shadow-lg hover:bg-amber-600 transition-colors"
            aria-label="Previous images"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-500 text-white rounded-full p-3 shadow-lg hover:bg-amber-600 transition-colors"
            aria-label="Next images"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
            {galleryImages.slice(0, 3).map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                <div className="aspect-w-16 aspect-h-12 relative">
                  <Image
                    src={image.thumbnail}
                    alt={image.alt}
                    width={600}
                    height={450}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(index)}
                    className="bg-amber-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-amber-600 transition-colors"
                  >
                    <Eye size={20} />
                    <span>View More</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal/Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Close gallery"
          >
            <X size={28} />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          
          <div className="w-full max-w-6xl max-h-[80vh] relative">
            <div className="relative h-full flex items-center justify-center">
              <Image
                src={galleryImages[currentImageIndex].fullSize}
                alt={galleryImages[currentImageIndex].alt}
                width={1200}
                height={900}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-white py-4 bg-black bg-opacity-50">
              {galleryImages[currentImageIndex].alt}
              <div className="text-gray-300 text-sm mt-1">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
          
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}