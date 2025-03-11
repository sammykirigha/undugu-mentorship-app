// components/AboutPage.jsx
import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
            {/* Mission Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="md:w-1/2">
                    <Image
                        src="/event-one.jpg"
                        alt="Office space with 'Grow Better' sign"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 mb-6">
                        We will partner with interest groups in Education, Religion, NGOs, Government among others in reaching out to the youth to affect them positively and empower them to make decisions that will ultimately improve their way of life.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                    <Image
                        src="/story-one.jpg"
                        alt="HubSpot leadership"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Our Story
                    </h2>
                    <p className="text-gray-700 mb-4">
                        The organization envisages every responsible adult taking responsibility to offer support, guidance and motivation to the younger generation. We have a pool of mentors working with various schools in the entire Coastal region. Our mentorship curruculum is professionally structured to achieve intended results.
                        The mentees gain by boosting their self-esteem, confidence and desire to excel as well as valuable lessons on life skills, career, positive attitude, avoidance of social evils such as drug abuse, immorality and risky behaviors.
                    </p>
                    
                </div>
            </div>
        </div>
    );
}