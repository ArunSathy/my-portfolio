import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Notification from '../notification/Notification';

const Contact = () => {

    const form = useRef();
    const [notification, setNotification] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_edrx13y', 'template_f5zzsbi', form.current, {
                publicKey: 'hNgtQlV2nhRMSNitp',
            })
            .then(
                () => {
                    setNotification({
                        message: 'Your message has been sent successfully!',
                        type: 'success'
                    });
                    e.target.reset();
                },
                (error) => {
                    setNotification({
                        message: 'Oops! Something went wrong. Please try again.',
                        type: 'error'
                    });
                    console.error('FAILED...', error.text);
                },
            );
    }

    const closeNotification = () => setNotification(null);

    return (
        <section className="contact py-24 pb-8 md:py-8 md:pb-16" id="contact">
            <h2 className="text-h1 text-title text-center font-bold mb-3">Contact Me</h2>
            <span className="block text-small mb-16 text-center md:mb-12">Get in Touch</span>

            <div className="max-w-[968px] mx-auto px-6 md:px-4 xs:px-2 grid grid-cols-[repeat(2,max-content)] justify-center gap-x-24 pb-12 lg:gap-x-12 md:grid-cols-1 md:gap-y-12">

                <div className="contact__content">
                    <h3 className="text-center text-h3 font-medium mb-6">Talk to me</h3>

                    <div className="grid gap-y-4 grid-cols-[300px] md:justify-center sm:grid-cols-1 sm:w-full">

                        <div className="bg-container border border-[rgba(0,0,0,0.1)] p-4 rounded-xl text-center sm:p-3">
                            <i className="bx bx-mail-send text-[2rem] text-title mb-1 block"></i>
                            <h3 className="font-medium text-small">Email</h3>
                            <span className="block mb-3 text-small">arunsathyan660@gmail.com</span>

                            <a href="mailto:arunsathyan660@gmail.com" className="text-text text-small inline-flex items-center justify-center gap-x-1 hover:text-text group">Write me <i className="bx bx-right-arrow-alt text-[1rem] transition-transform duration-300 group-hover:translate-x-1"></i> </a>
                        </div>

                        <div className="bg-container border border-[rgba(0,0,0,0.1)] p-4 rounded-xl text-center sm:p-3">
                            <i class="bx bxl-whatsapp text-[2rem] text-title mb-1 block"></i>
                            <h3 className="font-medium text-small">Whatsapp</h3>
                            <span className="block mb-3 text-small">91+ 9495873194</span>

                            <a href="https://api.whatsapp.com/send?phone=9495873194" className="text-text text-small inline-flex items-center justify-center gap-x-1 hover:text-text group">Write me <i className="bx bx-right-arrow-alt text-[1rem] transition-transform duration-300 group-hover:translate-x-1"></i> </a>
                        </div>

                        <div className="bg-container border border-[rgba(0,0,0,0.1)] p-4 rounded-xl text-center sm:p-3">
                            <i className="bx bxl-telegram text-[2rem] text-title mb-1 block"></i>
                            <h3 className="font-medium text-small">Telegram</h3>
                            <span className="block mb-3 text-small">arunsathyan1998</span>

                            <a href="t.me/arunsathyan1998" className="text-text text-small inline-flex items-center justify-center gap-x-1 hover:text-text group">Write me <i className="bx bx-right-arrow-alt text-[1rem] transition-transform duration-300 group-hover:translate-x-1"></i> </a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="text-center text-h3 font-medium mb-6">Write me</h3>

                    <form ref={form} onSubmit={sendEmail} className="w-[360px] md:mx-auto sm:w-full sm:max-w-full">
                        <div className="relative mb-8 h-[4rem] xs:mb-6">
                            <label className="absolute top-[-0.75rem] left-[1.25rem] text-small p-1 bg-body z-10">Name</label>
                            <input type="text" name='name' className='absolute top-0 left-0 w-full h-full border-2 border-[rgba(0,0,0,0.3)] bg-transparent text-text outline-none rounded-xl p-6 z-0 focus:border-title sm:p-4' placeholder='enter your name' />
                        </div>

                        <div className="relative mb-8 h-[4rem] xs:mb-6">
                            <label className="absolute top-[-0.75rem] left-[1.25rem] text-small p-1 bg-body z-10">Email</label>
                            <input type="email" name='email' className='absolute top-0 left-0 w-full h-full border-2 border-[rgba(0,0,0,0.3)] bg-transparent text-text outline-none rounded-xl p-6 z-0 focus:border-title sm:p-4' placeholder='enter your email' />
                        </div>

                        <div className="relative mb-8 h-[11rem]">
                            <label className="absolute top-[-0.75rem] left-[1.25rem] text-small p-1 bg-body z-10">Message</label>
                            <textarea name="message" cols="30" rows="10" placeholder='enter your message' className='absolute top-0 left-0 w-full h-full border-2 border-[rgba(0,0,0,0.3)] bg-transparent text-text outline-none rounded-xl p-6 z-0 resize-none focus:border-title'></textarea>
                        </div>

                        <button className="inline-block bg-title text-container py-5 px-8 rounded-2xl font-medium hover:bg-title-dark transition-colors lg:py-4 lg:px-7 inline-flex items-center">Send Message
                            <i class="uil uil-message ml-2 lg:w-[22px] lg:h-[22px]"></i>
                        </button>

                    </form>
                </div>

            </div>
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={closeNotification}
                />
            )}
        </section>
    )
}

export default Contact
