import React, { useEffect } from 'react'
import Ecommerce from '../../Assets/Projects/E-commerce/Home.png'
import Yummy from '../../Assets/Projects/Yummy/Home.png'
import Bootstrap from "../../Assets/Skills/icons8-bootstrap.svg";
import HTML from "../../Assets/Skills/html5.a7362949.svg";
import  CSS  from '../../Assets/Skills/icons8-css.svg';
import ReactLogo from "../../Assets/Skills/react.svg";
import Aos from 'aos';


export default function Projects() {


  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
    });
  },[])



  return <>
  <section id='Projects' >
    <div className="container">
      <h2>Projects</h2>
      <div className="row gx-3 gy-4">

        <div className="col-md-4 ">
          <div className="Project mb-2 "  data-aos-delay='800' data-aos="fade-up" >
            <div className="projec-img ">
              <img src={Ecommerce} className='w-100'  alt="Poriject Imge" />
            </div>
            <div className="poject-text">
            <h3>Online Shop</h3>
            <div className="icons">
            <a target='_blank' href={`https://haysmrabi3.github.io/Fresh-Cart/`}><i className="fa-regular fa-eye"></i></a>
            <a target='_blank' href={`https://github.com/Haysmrabi3/Fresh-Cart`}><i className="fa-brands fa-github"></i></a>
            </div>
            </div>
            <hr />
            <ul className='skills'>
              <li><img src={ReactLogo} alt="skill image" /></li>
              <li><img src={HTML} alt="skill image" /></li>
              <li><img src={CSS} alt="skill image" /></li>
              <li><img src={Bootstrap} alt="skill image" /></li>
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          <div className="Project mb-2"  data-aos="fade-up"  data-aos-delay='800'>
            <div className="projec-img ">
              <img src={Yummy} className='w-100'  alt="Poriject Imge" />
            </div>
            <div className="poject-text">
            <h3>Food Recipes</h3>
            <div className="icons">
            <a target='_blank' href={`https://haysmrabi3.github.io/Yummy/`}><i className="fa-regular fa-eye"></i></a>
            <a target='_blank' href={`https://github.com/Haysmrabi3/Yummy`}><i className="fa-brands fa-github"></i></a>
            </div>
            </div>
            <hr />
            <ul className='skills'>
              <li><img src={ReactLogo} alt="skill image" /></li>
              <li><img src={HTML} alt="skill image" /></li>
              <li><img src={CSS} alt="skill image" /></li>
              <li><img src={Bootstrap} alt="skill image" /></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
  
  </>
}
