import React from 'react';
import "../../css/about.css";
import Idol from "../image/about-idol.png";
import Collection1 from "../image/collection1.png";
import Collection2 from "../image/collection2.png";
import Collection3 from "../image/collection3.png";

const About  = () => {
   return(
      <>

      {/* Hero Section */}
      <section className="hero-section">
         <div className="hero-content">
            <h1 className="hero-title" data-aos="fade-up">About</h1>
            <div className="hero-scroll-indicator" data-aos="fade-up" data-aos-delay={400}>
            </div>
         </div>
      </section>

      {/* Who are we */}
      <section className='about1'>
         <div className='about1-page'>

            <div className='about-grid'>
               <div className="foto-about">
                  <img src={Idol} alt='' className='' />
               </div>
               <div className="content-about">
                   <div class="intro-text">
                     <h2 class="section-title">Who We Are</h2>
                     <p class="intro-description">
                        We are a team of passionate innovators, designers, and developers dedicated to transforming ideas into exceptional digital experiences. Our journey began with a simple belief: technology should enhance human potential, not complicate it.
                     </p>
                   </div>
               </div>
            </div>

         </div>
      </section>

      {/* collection */}
      <section className="collection">
         <h2 className='collection-head'>Fashion is not just about clothes, it’s about expression.</h2>
         <p className='collection-descrption'>Here, every detail tells a story of identity, culture, and freedom.</p>
         <div className="collection-grid">
            <div className="card-collection">
               <img src={Collection1} alt="Collection 1" />
            </div>
            <div className="card-collection">
               <img src={Collection2} alt="Collection 2" />
            </div>
            <div className="card-collection">
               <img src={Collection3} alt="Collection 3" />
            </div>
         </div>
      </section>


      
      </>
   );
};

export default About;