'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type CouncilMember = {
  name: string;
  title: string;
  imageUrl: string;
};

const councilMembers: CouncilMember[] = [
  {
    name: 'Jane Doe',
    title: 'Chairperson',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', // example Unsplash image
  },
  {
    name: 'John Smith',
    title: 'Treasurer',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  {
    name: 'Emily Johnson',
    title: 'Secretary',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  {
    name: 'Jane Doe',
    title: 'Chairperson',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', // example Unsplash image
  },
  {
    name: 'John Smith',
    title: 'Treasurer',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  {
    name: 'Emily Johnson',
    title: 'Secretary',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  {
    name: 'Jane Doe',
    title: 'Chairperson',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', // example Unsplash image
  },
  {
    name: 'John Smith',
    title: 'Treasurer',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  {
    name: 'Emily Johnson',
    title: 'Secretary',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  {
    name: 'Jane Doe',
    title: 'Chairperson',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', // example Unsplash image
  },
  {
    name: 'John Smith',
    title: 'Treasurer',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  {
    name: 'Emily Johnson',
    title: 'Secretary',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  
  
  
  // Add more members here
];

export default function CouncilPage() {
  return (
    <>
      <Navbar />

      <section id="council" className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            Meet Our Council
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {councilMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-4 text-center">
                  <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-gray-500">{member.title}</p>
                </div>

                <div className="absolute inset-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
