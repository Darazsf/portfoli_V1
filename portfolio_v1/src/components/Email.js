import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../css/email.css"
import "../css/modal.css"





export default function Mail() {


  const form = useRef();
  const [modal, setModal] = useState()


  const toggleModal = () => {
    setModal(!modal);

  }


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gr70dbf', 'template_jook6ch', form.current, 'AEHnTAVWCgtZ3Lvmr')
      .then((result) => {
        toggleModal()
      }, (error) => {
        console.log(error.text, "valami félre ment!");
      });
  };





  return (
    <>
      {/* Modal */}
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div>
              <span class="close" onClick={() => setModal(!modal)}>+</span>
            </div>
            <div className="modal-header">
               <h2>You have successfully sent the email!</h2>
              <span class="material-symbols-outlined" >
                check_circle
              </span></div>

          </div>
        </div>
      )}

      {/* Email */}
      <div className="mail">
        <div>
          <form action="#" className="contact-form" ref={form} onSubmit={sendEmail}>

            <p className="description">I'm happy to answer any question.
            </p>
            <div>
              <input type="text" name="user_name" className="form-control " id="name" placeholder="Your name" required />
            </div>
            <div>
              <input type="email" name="user_email" className="form-control" placeholder="Your e-mail" required />
            </div>
            <div>
              <textarea name="message" id="message" className="form-control" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="submit-button-wrapper">
              <input className="btn-submit" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>


    </>
  );
};