import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCircleCheck, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

function Contact() {

  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('') // '' | 'sending' | 'sent' | 'error'
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm('service_zsf7vw5', 'template_2jbnjnd', form.current, {
        publicKey: 'JoHfQPjxOvPQTEIwx',
      })
      .then(() => {
        setStatus('sent');
        setFields({ name: '', email: '', message: '' });
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const isSending = status === 'sending';

  return (
    <div id="contact" className="pt-9">
      <div className='text-white font-bold text-2xl sm:text-3xl mb-2 text-center'>
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
            className="bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-violet-400 focus:outline-none backdrop-blur-md p-3 rounded-lg w-full transition duration-300 disabled:opacity-50"
            name='name'
            placeholder="Your Name"
            required
            disabled={isSending}
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
          />

          <input
            type="email"
            className="bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-violet-400 focus:outline-none backdrop-blur-md p-3 rounded-lg w-full transition duration-300 disabled:opacity-50"
            name='email'
            placeholder="Your Email"
            required
            disabled={isSending}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
          />

          <textarea
            className="bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-violet-400 focus:outline-none backdrop-blur-md p-3 rounded-lg w-full h-40 sm:h-48 transition duration-300 disabled:opacity-50"
            name='message'
            placeholder="Your Message"
            required
            disabled={isSending}
            onChange={(e) => setFields({ ...fields, message: e.target.value })}
          />

          <button
            className='glass-btn-primary w-full sm:w-1/2 md:w-1/3 mx-auto text-white font-bold p-3 rounded-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed'
            type='submit'
            disabled={isSending}
          >
            {isSending ? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Submit <FontAwesomeIcon icon={faPaperPlane} />
              </>
            )}
          </button>

          {/* STATUS MESSAGES */}
          {status === 'sent' && (
            <p className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-medium mt-1 animate-fade-in">
              <FontAwesomeIcon icon={faCircleCheck} />
              Message sent — I'll get back to you soon!
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center justify-center gap-2 text-red-400 text-sm font-medium mt-1">
              <FontAwesomeIcon icon={faCircleXmark} />
              Something went wrong. Try emailing me directly.
            </p>
          )}

        </form>

      </div>
    </div>
  )
}

export default Contact

