import React from 'react'

const ProviderAbout = () => {
  return (
  <div>
    <div>
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
        About
        <span className="text-teal-600 font-bold text-[24px] leading-9">
          Vijay Patel
        </span>
      </h3>
      <p className="text__para">
        Vijay Patel is a highly skilled and dedicated plumber providing 
        comprehensive solutions for residential and commercial clients. With expertise in repairs, 
        installations, and maintenance, he ensures efficient, lasting results and prioritizes client satisfaction.
      </p>
    </div>

    <div className="mt-8">
    <h3 className="text-xl font-semibold text-headingColor">
        Certifications and Educations
    </h3>

    <ul className="pt-4 md:p-5 space-y-4">
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 p-4 bg-teal-50 rounded-lg">
        <div>
            <span className="text-primaryColor text-sm font-semibold">
            June 2015
            </span>
            <p className="text-base font-medium">Certified Master Plumber</p>
            <p className="text-sm text-gray-600">Indian Plumbing Association</p>
        </div>
        </li>
        
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 p-4 bg-teal-50 rounded-lg">
        <div>
            <span className="text-primaryColor text-sm font-semibold">
            March 2012
            </span>
            <p className="text-base font-medium">Advanced Pipefitting Certification</p>
            <p className="text-sm text-gray-600">National Skill Development Corporation</p>
        </div>
        </li>
        
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 p-4 bg-teal-50 rounded-lg">
        <div>
            <span className="text-primaryColor text-sm font-semibold">
            August 2010
            </span>
            <p className="text-base font-medium">Basic Plumbing Diploma</p>
            <p className="text-sm text-gray-600">State Technical Education Board</p>
        </div>
        </li>
    </ul>
    </div>

    <div className="mt-8">
        <h3 className="text-xl font-semibold text-headingColor mb-4">
          Professional Experience
        </h3>
        <ul className="pt-4 md:p-5 space-y-4">
          <li className="p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
            <div>
              <span className="text-primaryColor text-sm font-semibold">
                2015 - Present
              </span>
              <p className="text-base font-medium mt-1">Owner/Lead Plumber</p>
              <p className="text-sm text-gray-600 mt-1">Vijay Plumbing Services</p>
            </div>
          </li>
          <li className="p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
            <div>
              <span className="text-primaryColor text-sm font-semibold">
                2010 - 2015
              </span>
              <p className="text-base font-medium mt-1">Journeyman Plumber</p>
              <p className="text-sm text-gray-600 mt-1">Citywide Plumbing Solutions</p>
            </div>
          </li>
        </ul>
      </div>

  </div>
);
}

export default ProviderAbout