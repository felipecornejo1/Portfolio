import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rn03ref', 'template_na8h7mo', form.current, 'hdaBpmDFwP4Csfzne')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <section id="contact">
            <h1>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail} >
                <input
                    type="text"
                    name='from_name'
                    placeholder="Name"
                />
                <input
                    type="text"
                    name='from_email'
                    placeholder="Email"
                />
                <input
                    type="text"
                    name='subject'
                    placeholder="Subject"
                />
                <textarea
                    name='message'
                    placeholder="Message"
                />
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact