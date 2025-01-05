import Aos from 'aos';
import React, { useEffect } from 'react'
import Typewriter from "typewriter-effect";

export default function Header() {


  const typingOptions = {
    autoStart: true,
    loop: true,
    delay: 100,
    strings: [ " Front End Developer"],
  };

useEffect(()=>{
  Aos.init({
    offset: 200,
    duration: 1000,
    easing: 'ease-in-sine',
    delay: 100,
  });
},[])





  return <>
  <section id='Home' >
    <div className="container" data-aos="fade-left">
        <div className="row">
          <div className="Head-info col-md-8 ">
            <div className="typing">
            <span>I`am a </span>
            <span > < Typewriter options={typingOptions} /></span>
            </div>
            <h2>Hello, My Name Is <span>Haitham</span></h2>
            <p>Highly skilled Front-End Developer with experience in designing, developing, and maintaining web applications using modern front-end frameworks.</p>
            <div className="social">
              <h4>Find Me On :</h4>
              <ul>
                <li><i className="fa-brands fa-linkedin one"></i></li>
                <li><a target='_blank' href="https://github.com/Haysmrabi3"><i className="fa-brands fa-github two"></i></a></li>
                <li><i className="fa-brands fa-whatsapp three"></i></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </section>
  
  </>
}
