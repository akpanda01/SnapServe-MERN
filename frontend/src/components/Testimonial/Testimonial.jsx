import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    id: 1,
    name: "Arvind Ghosh",
    role: "Homeowner",
    rating: 5,
    comment: "The carpentry service was exceptional! They transformed my kitchen with perfect craftsmanship and attention to detail.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner",
    rating: 4,
    comment: "Quick response and professional plumbing work. Fixed our office bathroom issues in no time!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Rahul Patel",
    role: "Property Manager",
    rating: 5,
    comment: "Reliable electrical services. Our apartment complex maintenance has never been easier.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Interior Designer",
    rating: 5,
    comment: "Consistently excellent work. My clients are always happy with their services.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialSlider = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Many
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied customers say about their experiences
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet bg-gray-300 opacity-70',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600 !opacity-100'
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiStar 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>

                <blockquote className="text-gray-600 mb-6 flex-grow">
                  "{testimonial.comment}"
                </blockquote>

                <div className="mt-auto">
                  <span className="inline-block bg-blue-50 text-primaryColor text-xs font-medium px-3 py-1 rounded-full">
                    Verified Customer
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;