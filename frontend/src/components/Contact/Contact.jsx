import React, { useState , useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

function Contact() {
    const [message , setMessage] = useState({
        name : '',
        email : '',
        message : ''
    })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zsf7vw5', 'template_2jbnjnd', form.current, {
        publicKey: 'JoHfQPjxOvPQTEIwx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
    <div className='text-white font-bold text-3xl mb-2 text-center mt-9 ' id='contact'>My Contact</div>
    <p className='text-white text-center' >Please contact me directly at my <span className='underline' >e-mail</span> or through this form</p>
        <div className='flex justify-center items-center gap-6 flex-col w-full h-full mt-10 '>
            
            <form action="" className='flex flex-col gap-4 justify-center items-center' ref={form} onSubmit={sendEmail}  >
                

    <input type="text" className="border bg-white p-3 rounded-lg w-lg " name='name'  placeholder="Your Name" onChange={(e) => setMessage({...message, name : e.target.value})} />
    <input type="text" className="border bg-white p-3 rounded-lg w-lg " name='email'  placeholder="Your Email" onChange={(e) => setMessage({...message, email : e.target.value})} />
    <textarea type="text" className="border bg-white p-3 rounded-lg w-lg h-48 " name='message'  placeholder="Your Messsage" onChange={(e) => setMessage({...message, message : e.target.value})} />
    <button className='w-1/3 border-none bg-gray-500 p-3 rounded-full text-center text-white font-bold cursor-pointer hover:scale-110 ' type='submit'>Submit <FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
            
            
        </div>
        
    </>
  )
}

export default Contact