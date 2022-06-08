import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { State } from '../../Context'

function Contact() {
  // Define Variables
  const form = useRef()
  const initialValues = {
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  }
  // Define States
  const [formValues, setFormValues] = useState(initialValues)
  // Get states from Context
  const { notifications, setNotifications } = State()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  // This variable is true if all fields are filled
  const allowSubmit =
    formValues.from_name.length > 0 &&
    formValues.from_email.length > 0 &&
    formValues.subject.length > 0 &&
    formValues.message.length > 0

  const sendEmail = (e) => {
    // Prevent the default form submission
    e.preventDefault()

    // if the form is not filled out, show an error
    if (allowSubmit) {
      emailjs
        .sendForm(
          'service_rn03ref',
          'template_na8h7mo',
          form.current,
          'hdaBpmDFwP4Csfzne'
        )
        .then(
          (result) => {
            console.log(result.text)
            setNotifications({ ...notifications, emailSent: true })
          },
          (error) => {
            console.log(error.text)
            setNotifications({ ...notifications, emailError: true })
          }
        )
    } else {
      setNotifications({ ...notifications, formNotFilled: true })
    }
  }

  return (
    <section id='contact'>
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} onChange={() => console.log()}>
        <input
          type='text'
          name='from_name'
          placeholder='Name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='from_email'
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          onChange={handleChange}
        />
        <textarea
          name='message'
          placeholder='Message'
          onChange={handleChange}
        />

        <button type='submit' className='contact__submit-btn'>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact
