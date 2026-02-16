import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

function Contact() {

  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: ''
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zsf7vw5', 'template_2jbnjnd', form.current, {
        publicKey: 'JoHfQPjxOvPQTEIwx',
      })
      .then(() => {
        console.log('SUCCESS!');
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };

  return (
    <>
      <div className='text-white font-bold text-2xl sm:text-3xl mb-2 text-center mt-9' id='contact'>
        My Contact
      </div>

      <p className='text-white text-center px-4'>
        Please contact me directly at my <span className='underline'>e-mail</span> or through this form
      </p>

      <div className='flex justify-center items-center flex-col w-full mt-10 px-4'>

        <form
          className='flex flex-col gap-4 w-full max-w-xl'
          ref={form}
          onSubmit={sendEmail}
        >

          <input
            type="text"
            className="border bg-white p-3 rounded-lg w-full"
            name='name'
            placeholder="Your Name"
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
          />

          <input
            type="text"
            className="border bg-white p-3 rounded-lg w-full"
            name='email'
            placeholder="Your Email"
            onChange={(e) => setMessage({ ...message, email: e.target.value })}
          />

          <textarea
            className="border bg-white p-3 rounded-lg w-full h-40 sm:h-48"
            name='message'
            placeholder="Your Message"
            onChange={(e) => setMessage({ ...message, message: e.target.value })}
          />

          <button
            className='w-full sm:w-1/2 md:w-1/3 mx-auto border-none bg-gray-500 p-3 rounded-full text-white font-bold cursor-pointer hover:scale-110 transition'
            type='submit'
          >
            Submit <FontAwesomeIcon icon={faPaperPlane} />
          </button>

        </form>

      </div>
    </>
  )
}

export default Contact
