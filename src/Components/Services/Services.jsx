import React from 'react'

export default function Services() {
  return <>
  <section id='Services'>
    <div className="container">
      <h2>Services</h2>
      <div className="row g-4">
        <div className="col-md-4 ">
          <div className="Service-info ">
              <div className="icon"><i className="fa-solid fa-mobile-screen-button"></i></div>
            <h3>HTML5 / CSS3</h3>
            <h4>Responsive Development</h4>
            <p>Get your desired web page coded into a fully responsive HTML & CSS page ready to deploy.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="Service-info">
            <div className="icon"><i className="fa-solid fa-laptop-code"></i></div>
            <h3>React</h3>
            <h4>Web App Development</h4>
            <p>Create your complex web app for your business using React with the Next.js framework.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="Service-info">
            <div className="icon"><i className="fa-solid fa-images"></i></div>
            <h3>Editing & Re-design</h3>
            <p>Do you have some edits and retouches or even a complete re-design? I am here to do it.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  </>
}
