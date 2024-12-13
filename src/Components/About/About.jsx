import Aos from 'aos';
import React, { useEffect } from 'react'

export default function About() {





  useEffect(()=>{
    Aos.init({
      offset: 0,
      easing: 'ease-in-sine',
    });
  },[])




  return <>

    <section id='About'>
      <div className="container">
        <div className="row">
          <div className="" data-aos="fade-up"
                 data-aos-duration="1000">
          <h2>About Me</h2>
          <h3>I`m Haitham Rabea <span>Front End Developer.</span></h3>
          <p>I am a junior front-end developer with a strong foundation in web development. My expertise include JavaScript, React.js, HTML, CSS And Problem-solving skills, 
          I have a proven ability to deliver scalable web solutions and a passion for designing e-commerce websites, with a strong focus on UI/UX. I am committed to continuously enhancing my skills and staying updated with the latest technologies. My goal is to contribute to company growth and achieve impactful results.
          </p>
          </div>
          <div className='About-info'>
            <div className="row ">
              <div className="col-md-6">
                <div className="overflow-hidden" >
                  <p data-aos="fade-right" data-aos-delay="200"  data-aos-duration="1000" >
                    <i className="fa-solid fa-calendar-days"></i> 
                    Birthday : <span>15 sep 2003</span>
                  </p>
                  <hr />
                </div>
              </div>
              <div className="col-md-6">
                <p data-aos="fade-left" data-aos-delay="200"  data-aos-duration="1000">
                    <i className="fa-solid fa-location-dot"></i> 
                      City : <span>Cairo</span>
                </p>
                <hr />
              </div>
              <div className="col-md-6">
              <p data-aos="fade-right" data-aos-delay="200"  data-aos-duration="1000">
                  <i className="fa-solid fa-envelope"></i> 
                  Email : <span>haysmrabi325@gmail.com</span>
              </p>
              <hr />
              </div>
              <div className="col-md-6">
                <p data-aos="fade-left" data-aos-delay="200"  data-aos-duration="1000">
                      <i class="fa-solid fa-phone"></i> 
                          phone : <span>01097521770</span>
                </p>
                <hr />
              </div>
            </div>
          </div>
            <h3>Courses</h3>
          <div className="Courses-info shadow rounded-3 mt-2"  data-aos="fade-right" data-aos-duration="4000" >
              <h4>
              <i className="fa-solid fa-calendar-days"></i> <span>2024</span>
              </h4>
              <h5>Frontend Developer, Route Academy</h5>
              <p>The course covers frontend tools such as JavaScript, Ajax, JSON, and React.js. <br />
                 Development of a new, highly responsive, web-based user interface.</p>
          </div>
        </div>
      </div>
    </section>
  </>
}

