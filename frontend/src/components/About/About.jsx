import React from "react";
import aboutImg from "../../assets/images/about.png"; 
import aboutCardImg from "../../assets/images/about-card.png"; 
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* about img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[700px] z-10 order-2 lg:order-1 ">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[400px] md:w-[400px] right-[-30%] md:right-[-7%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* about content */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">Setting the standard for local home care</h2>
          <p className="text__para">
            At SnapServe, we're more than just a service provider – we're your neighbors, dedicated to enhancing every home in Mumbai. Built on a foundation of trust and reliability, our 
            journey began with a simple vision: to offer unparalleled home care solutions that genuinely make a difference in daily life.
          </p>
          <p className="text__para mt-[30px]">
                Every project, big or small, is approached with a commitment to excellence and a deep understanding of local needs. We believe a strong community starts at home, and we're here to ensure yours is comfortable, functional, and exactly how you envision it. 
                Partner with us, and experience the dedication of a team truly invested in your peace of mind.
            </p>

            <Link to="/">
                <button className="btn">Learn More</button>
            </Link>
          </div>          
            
        </div>
      </div>
    </section>
  );
};

export default About;