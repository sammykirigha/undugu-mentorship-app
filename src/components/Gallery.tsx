// components/Gallery.js
"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  
  const imagesPerPage = 3;
  
  // Sample gallery images - in a real app, you would likely fetch these from an API
  const galleryImages = [
      {
        thumbnail: '/Mentors_one.jpg',
        fullSize: '/Mentors_one.jpg',
        alt: 'Presenter speaking to a group of students',
      },
      {
          thumbnail: '/mwangeka_girls_three.jpg',
          fullSize: '/mwangeka_girls_three.jpg',
          alt: 'Workshop with students',
      },
      {
          thumbnail: '/Mentors_two.jpg',
          fullSize: '/Mentors_two.jpg',
          alt: 'Team members at university event',
      },
      {
          thumbnail: '/Taru_boys.jpg',
          fullSize: '/Taru_boys.jpg',
          alt: 'Workshop with students at Taru boys',
        },
        {
          thumbnail: '/home-page-photo.jpg',
          fullSize: '/home-page-photo.jpg',
          alt: 'A session with Mwangeka Girls',
        },
    // Add more images here for the carousel
  ];


  // Handle lazy loading of images
  const [loadedImages, setLoadedImages] = useState(
    galleryImages.map((img, index) => index < 3)
  );

  // Load additional images when page changes
  useEffect(() => {
    const startIdx = currentPage * imagesPerPage;
    const endIdx = startIdx + imagesPerPage;
    
    setLoadedImages(prev => {
      const newLoaded = [...prev];
      for (let i = startIdx; i < endIdx && i < galleryImages.length; i++) {
        newLoaded[i] = true;
      }
      return newLoaded;
    });
  }, [currentPage]);

  // Preload adjacent images in carousel when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const imagesToPreload = [
        (currentImageIndex + 1) % galleryImages.length,
        (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
      ];
      
      setLoadedImages(prev => {
        const newLoaded = [...prev];
        imagesToPreload.forEach(idx => {
          newLoaded[idx] = true;
        });
        return newLoaded;
      });
    }
  }, [isModalOpen, currentImageIndex]);

interface GalleryImage {
    thumbnail: string;
    fullSize: string;
    alt: string;
    loaded: boolean;
}

const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
};

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }, []);

interface GalleryEvent extends React.MouseEvent<HTMLButtonElement> {}

const goToPrevious = useCallback((e: GalleryEvent | null) => {
    if (e) e.stopPropagation(); // Prevent event bubbling to parent elements
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
        setIsAnimating(false);
    }, 300);
}, [isAnimating, galleryImages.length]);

interface GalleryEvent extends React.MouseEvent<HTMLButtonElement> {}

const goToNext = useCallback((e: GalleryEvent | null) => {
    if (e) e.stopPropagation(); // Prevent event bubbling to parent elements
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
        setIsAnimating(false);
    }, 300);
}, [isAnimating, galleryImages.length]);

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const maxPage = Math.ceil(galleryImages.length / imagesPerPage) - 1;
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'ArrowLeft') {
        goToPrevious(null);
      } else if (e.key === 'ArrowRight') {
        goToNext(null);
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, goToPrevious, goToNext, closeModal]);

  // Handle clicks outside the modal to close it
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        modalRef.current && 
        modalContentRef.current && 
        !modalContentRef.current.contains(e.target as Node) && 
        modalRef.current.contains(e.target as Node)
      ) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen, closeModal]);

  // Touch event handlers for swipe
interface TouchEvent extends React.TouchEvent<HTMLDivElement> {}

const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
};

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNext(null);
    }
    
    if (isRightSwipe) {
      goToPrevious(null);
    }
    
    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Get the visible images for the current page
  const visibleImages = galleryImages.slice(
    currentPage * imagesPerPage,
    (currentPage * imagesPerPage) + imagesPerPage
  );

  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-3">Gallery</h2>
        <div className="w-12 h-1 bg-[#ffa500] mx-auto mb-10"></div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={goToPreviousPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-500 text-white rounded-full p-3 shadow-lg hover:bg-amber-600 transition-colors"
            aria-label="Previous images"
            disabled={currentPage === 0}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-500 text-white rounded-full p-3 shadow-lg hover:bg-amber-600 transition-colors"
            aria-label="Next images"
            disabled={currentPage >= Math.ceil(galleryImages.length / imagesPerPage) - 1}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
            {visibleImages.map((image, index) => (
              <div key={index + (currentPage * imagesPerPage)} className="relative group overflow-hidden rounded-lg shadow-md">
                <div className="aspect-w-16 aspect-h-12 relative">
                  {loadedImages[index + (currentPage * imagesPerPage)] && (
                    <Image
                      src={image.thumbnail}
                      alt={image.alt}
                      width={500}
                      height={350}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(index + (currentPage * imagesPerPage))}
                    className="bg-amber-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-amber-600 transition-colors"
                  >
                    <Eye size={20} />
                    <span>View More</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(galleryImages.length / imagesPerPage) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === idx ? 'bg-amber-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal/Lightbox */}
      {isModalOpen && (
        <div 
          ref={modalRef}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-800 transition-colors z-20"
            aria-label="Close gallery"
          >
            <X size={28} className=' h-[200px] text-white z-50' />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-gray-800 transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          
          <div 
            ref={modalContentRef}
            className="w-full max-w-6xl max-h-[80vh] relative"
          >
            <div className="relative h-full flex items-center justify-center overflow-hidden">
              {loadedImages[currentImageIndex] && (
                <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src={galleryImages[currentImageIndex].fullSize}
                    alt={galleryImages[currentImageIndex].alt}
                    width={1200}
                    height={900}
                    className="max-h-[80vh] w-auto object-contain"
                  />
                </div>
              )}
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
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-gray-800 transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}