import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'




export default function Contacts() {


  const form = useRef();
  const name = useRef();
  const email = useRef();
  const texter = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kiurv6x', 'template_47nmwq3', form.current, {
      publicKey: 'RYgFYxc4iPI7DPmmh',
      }
    )
      .then(
        () => {
          name.current.value = ""
          email.current.value = ""
          texter.current.value = ""
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });










  return <>
  <section id='Contacts'>
    <div className="container">
      <h2>Contact</h2>
      <div className="Contact-text">
        <h3>Have You Any Question?</h3>
        <h4>I'm at your service</h4>
      </div>
        <form ref={form} onSubmit={sendEmail}>
        <div className="row g-3">
        <div className="col-md-6">
          <div className="">
           <input ref={name} placeholder=' Name' name="user_name" className='form-control' type="text" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="">
           <input ref={email} placeholder=' Email' name="user_email" className='form-control' type="email" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="">
           <textarea ref={texter} rows={8}  name="message" placeholder='Message'  className='form-control' type="text" />
           <button  type='submit' className='btn' >Send Message</button>
          </div>
        </div>
      </div>
        </form>
    </div>
  </section>
  
  </>
}
