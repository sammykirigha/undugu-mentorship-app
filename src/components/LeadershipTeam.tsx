// TeamSection.jsx
import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  title: string;
  description?: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, description, imageSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-gray-200 overflow-hidden mb-4">
        <Image 
          src={imageSrc} 
          alt={name} 
          width={160} 
          height={160} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold uppercase">{name}</h3>
      <p className="text-blue-600 mb-2">{title}</p>
      <p className="text-gray-600 text-sm text-center italic mb-4 px-2">
        {description}
      </p>
      <div className="flex space-x-3 text-gray-500">
        <a href="#" className="hover:text-blue-600 transition-colors"><FaFacebook /></a>
        <a href="#" className="hover:text-blue-600 transition-colors"><FaTwitter /></a>
        <a href="#" className="hover:text-blue-600 transition-colors"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-600 transition-colors"><FaLinkedin /></a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Danson Mwashako',
      role: 'Chairman',
      image: '/Our_MP.jpg', // Replace with actual image path
    },
    {
      id: 2,
      name: 'Christine Mwamisha',
      role: 'CEO',
      image: '/CEO.jpg', // Replace with actual image path
    },
    {
      id: 3,
      name: 'Meshark Nyambu',
      role: 'Program Manager',
      image: '/meshark.jpg', // Replace with actual image path
    },
    {
      id: 4,
      name: 'Thomas Kirigha',
      role: 'Strategic Advisor',
      image: '/Thomas.jpg', // Replace with actual image path
    },
  ];

  return (
    <section className="py-6 md:py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-2">Our Team</h2>
      <p className="text-gray-600 italic text-center mb-12">A team of visionaries, creators, and leaders</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            title={member.role}
            imageSrc={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;