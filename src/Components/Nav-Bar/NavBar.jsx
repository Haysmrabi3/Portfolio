import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'




export default function NavBar() {

const nav = useRef(null)

  const hidenav = ()=> {
    nav.current.classList.remove('show')
  }
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('Darkstate') === 'true';
  })

  useEffect(() => {
    document.querySelector('body').setAttribute('data-them', isDark ? 'dark' : 'light');
  }, [])

  useEffect(() => {
    document.querySelector('body').setAttribute('data-them', isDark ? 'dark' : 'light');
    localStorage.setItem('Darkstate', isDark.toString());
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark(prevIsDark => !prevIsDark)
  };


  return <>
<nav className="navbar navbar-expand-lg ">
  <div className="container ">
    <Link className="navbar-brand" to={`Home`}>Protfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><i className="fa-solid fa-list-ul"></i></span>
    </button>
    <div ref={nav} className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav m-auto ">



        <li className="nav-item">
          <Link onClick={hidenav} className="nav-link " spy={true} smooth={true} offset={-200} duration={500}  to={`Home`}>Home</Link>
        </li>

        <li className="nav-item">
          <Link onClick={hidenav} className="nav-link " spy={true} smooth={true} offset={-100} duration={500}  to={`About`}>About</Link>
        </li>

        <li className="nav-item">
          <Link onClick={hidenav} className="nav-link "  spy={true} smooth={true} offset={-100} duration={500} to={`Skills`}>Skills</Link>
        </li>

        <li className="nav-item">
          <Link onClick={hidenav} className="nav-link " spy={true} smooth={true} offset={-100} duration={500}  to={`Services`}>Services</Link>
        </li>

        <li className="nav-item">
          <Link onClick={hidenav} className="nav-link " spy={true} smooth={true} offset={-100} duration={500}  to={`Projects`}>Projects</Link>
        </li>

        <li className="nav-item">
          <Link onClick={hidenav} className="nav-link " spy={true} smooth={true} offset={-100} duration={500}  to={`Contacts`}>Contacts</Link>
        </li>
        
      </ul>
      <button  className='cv'><a download target='_blank'  href='https://drive.google.com/file/d/1Nto0sZsDYfnI1e2c-VE3fY8hSYeec1mJ/view?usp=sharing'>Download CV</a></button>
      <button  className='DarkMood' onClick={toggleDarkMode}  >{isDark ? <i className="fa-regular moon fa-moon"></i>: <i className="fa-regular sun fa-sun"></i>}  </button>
           </div>
  </div>
</nav>
  </>
}
