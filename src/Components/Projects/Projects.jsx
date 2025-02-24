import React, { useEffect } from 'react'
import Ecommerce from '../../Assets/Projects/E-commerce/Home.png'
import Yummy from '../../Assets/Projects/Yummy/Home.png'
import Fokir from '../../Assets/Projects/Fokir/fokir.png'
import Mealfy from '../../Assets/Projects/Mealfy/Mealfy.png'
import Weather from '../../Assets/Projects/Weather/Weather.png'
import Englsih from '../../Assets/Projects/English-track/Screenshot 2025-02-10 103042.png'
import Bootstrap from "../../Assets/Skills/icons8-bootstrap.svg";
import HTML from "../../Assets/Skills/html5.a7362949.svg";
import  CSS  from '../../Assets/Skills/icons8-css.svg';
import  Js  from '../../Assets/Skills/javascript.455da02c.svg';
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

        <div className="col-md-4">
          <div className="Project mb-2"  data-aos="fade-up"  data-aos-delay='800'>
            <div className="projec-img ">
              <img src={Englsih} className='w-100'  alt="Poriject Imge" />
            </div>
            <div className="poject-text">
            <h3>English-track</h3>
            <div className="icons">
            <a target='_blank' href={`https://haysmrabi3.github.io/English-track/`}><i className="fa-regular fa-eye"></i></a>
            <a target='_blank' href={`https://github.com/Haysmrabi3/English-track`}><i className="fa-brands fa-github"></i></a>
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
              <img src={Fokir} className='w-100'  alt="Poriject Imge" />
            </div>
            <div className="poject-text">
            <h3>Fokir</h3>
            <div className="icons">
            <a target='_blank' href={`https://haysmrabi3.github.io/Fokir/`}><i className="fa-regular fa-eye"></i></a>
            <a target='_blank' href={`https://github.com/Haysmrabi3/Fokir`}><i className="fa-brands fa-github"></i></a>
            </div>
            </div>
            <hr />
            <ul className='skills'>
              <li><img src={HTML} alt="skill image" /></li>
              <li><img src={CSS} alt="skill image" /></li>
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          <div className="Project mb-2"  data-aos="fade-up"  data-aos-delay='800'>
            <div className="projec-img ">
              <img src={Mealfy} className='w-100'  alt="Poriject Imge" />
            </div>
            <div className="poject-text">
            <h3>Mealfy</h3>
            <div className="icons">
            <a target='_blank' href={`https://haysmrabi3.github.io/Mealfy/`}><i className="fa-regular fa-eye"></i></a>
            <a target='_blank' href={`https://github.com/Haysmrabi3/Mealfy`}><i className="fa-brands fa-github"></i></a>
            </div>
            </div>
            <hr /> 
            <ul className='skills'>
              <li><img src={HTML} alt="skill image" /></li>
              <li><img src={CSS} alt="skill image" /></li>
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          <div className="Project mb-2"  data-aos="fade-up"  data-aos-delay='800'>
            <div className="projec-img ">
              <img src={Weather} className='w-100'  alt="Poriject Imge" />
            </div>
            <div className="poject-text">
            <h3>Weather App</h3>
            <div className="icons">
            <a target='_blank' href={`https://haysmrabi3.github.io/Weather-App/`}><i className="fa-regular fa-eye"></i></a>
            <a target='_blank' href={`https://github.com/Haysmrabi3/Weather-App`}><i className="fa-brands fa-github"></i></a>
            </div>
            </div>
            <hr /> 
            <ul className='skills'>
              <li><img src={HTML} alt="skill image" /></li>
              <li><img src={CSS} alt="skill image" /></li>
              <li><img src={Js} alt="skill image" /></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
  
  </>
}
