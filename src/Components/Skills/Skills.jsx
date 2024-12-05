import React, { useEffect } from 'react'
import Bootstrap from "../../Assets/Skills/icons8-bootstrap.svg";
import Git from "../../Assets/Skills/git.svg";
import HTML from "../../Assets/Skills/html5.a7362949.svg";
import JS from "../../Assets/Skills/javascript.455da02c.svg";
import JQ from "../../Assets/Skills/jquery.svg";
import Next from "../../Assets/Skills/next.svg";
import ReactLogo from "../../Assets/Skills/react.svg";
import Tailwind from "../../Assets/Skills/icons8-tailwindcss.svg";
 import  CSS  from '../../Assets/Skills/icons8-css.svg';
import Aos from 'aos';
export default function Skills() {


  const skillsData = [
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSS },
    { name: "Bootstrap", image: Bootstrap },
    { name: "Tailwind", image: Tailwind },
    { name: "JavaScript", image: JS },
    { name: "jQuery", image: JQ },
    { name: "React", image: ReactLogo },
    { name: "Next", image: Next },
    { name: "Git", image: Git },
  ];


  useEffect(()=>{
    Aos.init({
      offset: 100,
      easing: 'ease-in-sine',
    });
  },[])



  return <>
  <section  id='Skills'>
    <div className="container">
      <h2>Skills</h2>
      <div className="row gx-2 gy-1">
        {skillsData.map((item , index)=> {
            return <div key={index} className="col-md-4 " data-aos="fade-right" data-aos-duration="1000">
              <div className="skills-imge shadow rounded-2 mb-2">
                <img src={item.image}  alt={item.name} />
                <span>{item.name}</span>
              </div>
            </div>
          })}
      </div>
    </div>
  </section>
  
  </>
}
