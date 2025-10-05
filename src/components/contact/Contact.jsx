import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_edrx13y', 'template_f5zzsbi', form.current, {
        publicKey: 'hNgtQlV2nhRMSNitp',
      })
      e.target.reset();
  }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in Touch</span>

            <div className="contact__container container grid">

                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">arunsathyan660@gmail.com</span>

                            <a href="mailto:arunsathyan660@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                        </div>

                        <div className="contact__card">
                            <i class="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">91+ 9495873194</span>

                            <a href="https://api.whatsapp.com/send?phone=9495873194" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-telegram contact__card-icon"></i>
                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">arunsathyan1998</span>

                            <a href="t.me/arunsathyan1998" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name='name' className='contact__form-input' placeholder='enter your name' />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name='email' className='contact__form-input' placeholder='enter your email' />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" cols="30" rows="10" placeholder='enter your message' className='contact__form-input contact__form-area'></textarea>
                        </div>
                        
                        <button className="button button--flex message__button">Send Message
                            <i class="uil uil-message button__icon"></i>
                        </button>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact
