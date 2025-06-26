import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import starIcon from '../../assets/images/Star.png';

const ProviderCard = ({ provider }) => {
  const {
    name,
    specialty,
    avgRating,
    totalRating,
    photo,
    location,
    experience,
    serviceCharge
  } = provider;

  return (
    <div className="p-3 lg:p-5 shadow-md rounded-lg hover:shadow-lg transition-shadow bg-white">
      <div className="rounded-lg overflow-hidden mb-4 h-48 sm:h-56 md:h-64 w-full">
        <img 
          src={photo} 
          className="w-full h-50 object-center" 
          alt={`${name}, ${specialty}`}
          onError={(e) => {
            e.target.src = 'path-to-fallback-image.jpg'; // Add fallback image
          }}
        />
      </div>

      <h2 className="text-xl lg:text-2xl font-bold text-gray-800 line-clamp-1">
        {name}
      </h2>

      <div className="mt-2 flex items-center justify-between">
        <span className="bg-teal-100 text-primaryColor py-1 px-3 text-sm lg:text-base font-medium rounded-full">
          {specialty}
        </span>
        <span className="text-gray-700 font-medium">
          {serviceCharge}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="flex items-center gap-1">
          <img src={starIcon} alt="Rating" className="w-5 h-5" />
          <span className="font-semibold text-gray-800">{avgRating}</span>
        </div>
        <span className="text-gray-500 text-sm">
          ({totalRating} reviews)
        </span>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-gray-600">{location}</p>
          <p className="text-gray-400 text-sm">{experience} experience</p>
        </div>
        <Link 
          to={`/providers/${provider.id}`}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primaryColor hover:border-primaryColor transition-colors"
          aria-label={`View details for ${name}`}
        >
          <BsArrowRight className="text-gray-700 hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default ProviderCard;