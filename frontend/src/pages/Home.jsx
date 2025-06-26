import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg04 from '../assets/images/hero-img04.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import featureImg from '../assets/images/feature-img.png';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import faqImg from '../assets/images/faq-img.png';
import FaqList from '../components/Faq/Faqlist.jsx';
import ProviderList from '../components/Providers/ProviderList';
import Testimonial from '../components/Testimonial/Testimonial.jsx';



const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className="hero__section pt-[30px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Find Local Services in a Snap!
                </h1>
                <p className="text__para">
                  Tired of endless searching for reliable local services? SnapServe instantly connects you with trusted 
                  professionals in your area—plumbers, tutors, cleaners, fitness coaches, and more.
                  Supporting local has never been easier!
                </p>
                <button className='btn'>Request an Appointment</button>
              </div>

              {/* hero counter */}
              <div className="mt-[10px] lg:mt-[20px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    50+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className='text__para'>Verified Professionals</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className='text__para'>Service Categories</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className='text__para'>Customer Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-[550px] h-[500px]">
            <div className="flex items-center justify-center">
              <img src={heroImg01} className='rounded-xl' />
            <div className='ml-[30px]'>
              <img src={heroImg04} className='rounded-xl w-full h-50 mb-[30px]' />
              <img src={heroImg03} className='rounded-xl w-full h-50' />
            </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* how it works section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Offering top-notch community services
          </h2>
          <p className='text__para text-center'>Dedicated to comprehensive local services, we empower our community with dependable support, fostering growth and well-being.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        <div className="py-[19px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon01} alt='Illustration 1' className='h-40'/>
          </div>

          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Find a Helper
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Exceptional service for your home. We provide reliable and
              expert home care. 
            </p>
            
            <Link to='/providers' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none transition-colors duration-300'>
            <BsArrowRight className ='group-hover:text-white w-6 h-5' />
            </Link>
            
          </div>
      </div>

      <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon02} alt='Illustration 2' />
          </div>

          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Find a Location
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Locate your closest service center to experience prompt, local assistance.
            </p>
            
            <Link to='/providers' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none transition-colors duration-300'>
            <BsArrowRight className ='group-hover:text-white w-6 h-5' />
            </Link>
            
          </div>
      </div>

      <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={icon03} alt='Illustration 3'/>
          </div>

          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Book Appointment
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Schedule conveniently through our website. Simply choose your preferred service and time.
            </p>
            
            <Link to='/providers' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none transition-colors duration-300'>
            <BsArrowRight className ='group-hover:text-white w-6 h-5' />
            </Link>
            
          </div>
      </div>

      </div>
    </div>
      </section>
      {/* about section */}
      <About/>
      
      {/* service section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">Our services</h2>
            <p className="text__para text-center">
              We offer comprehensive home services, from routine maintenance to renovations.
            </p>
          </div>
          <ServiceList/>         
        </div>
      </section>

      {/* feature section */}
      <section className="py-[30px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-0">
            {/* ========== feature content ========== */}
            <div className="xl:w-[670px] order-2 lg:order-1">
              <h2 className="heading">
                Book Your Service <br/> Anytime, Anywhere.
              </h2>
              <ul className="pl-4 mt-4">
                <li className="text__para mb-2">1. Schedule your service directly through our website.</li>
                <li className="text__para mb-2">2. Find and review your local expert profiles nearby.</li>
                <li className="text__para">3. Confirm your appointment time instantly through our online scheduling tool.</li>
              </ul>
              <Link to="/" className="inline-block mt-6">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* ========== feature image ========== */}
            <div className="relative xl:w-[770px] order-1 lg:order-2 flex justify-center lg:justify-end">
              <img 
                src={featureImg} 
                className="w-full max-w-[500px] lg:max-w-none lg:w-3/4" 
                alt="Virtual treatment illustration" 
              />
              
              <div className="absolute w-[150px] lg:w-[248px] bg-white shadow-md rounded-[10px] p-3 lg:p-4 -bottom-[30px] left-0 lg:bottom-[100px] lg:left-5 z-20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] lg:text-[14px] text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] lg:text-[14px] text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-purpleColor rounded">
                    <img src={videoIcon} alt="Video call icon" className="w-3 lg:w-auto" />
                  </span>
                </div>
                
                <div className="w-[65px] lg:w-[100px] bg-[#CCF0F3] py-1 px-2 lg:py-2 lg:px-[10px] text-[8px] lg:text-[12px] text-primaryColor font-[500] mt-2 lg:mt-4 rounded-full text-center">
                  Request Service
                </div>
                
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img 
                    src={avatarIcon} 
                    alt="Provider avatar" 
                    className="w-4 h-4 lg:w-6 lg:h-6"
                  />
                  <h4 className='text-[10px] lg:text-[16px] font-[700] text-headingColor'>
                    Harish Sharma
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* helper section*/}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Top Local Service Providers</h2>
            <p className="text_para text-center">
              Your go-to guide for the best local services. Discover expert providers in your area with ease.
            </p>
          </div>
          <ProviderList/>
        </div>
      </section>

      {/* faq section*/}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-5 ">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" className='rounded-lg h-50 w-50' />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions by our customers</h2>
              <FaqList/>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section>
        <div className="container">
          <Testimonial/>
        </div>
      </section>
      
    </>
  );
}

export default Home;



