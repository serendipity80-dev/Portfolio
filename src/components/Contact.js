import {useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import {Button} from '@material-ui/core';
      

const Contact = () => {

  const [ name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [ subject, setSubject] = useState('');
  const [ message, setMessage] = useState('');
  const [ emailSent, setEmailSent] = useState(false);


   const form = useRef();


     
    //   const isValidEmail = email => {
    //     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return regex.test(String(email).toLowerCase());
    // };
      const submit = () => {
        if (name && email && subject && message) {
           // TODO - send mail
           const serviceId = 'service_5ipxixf';
           const templateId = 'template_tosh5pk';
           const userId = 'M5NMTiMwR_gI5C6YP';
           const templateParams = {
               name,
               email,
               subject,
               message
           };

           emailjs.send(serviceId, templateId, templateParams, userId)
               .then(response => console.log(response))
               .then(error => console.log(error));
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');

            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5ipxixf', 'template_tosh5pk', form.current, 'M5NMTiMwR_gI5C6YP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
// reset()
// toastifySuccess()
  };

  return (
  
    <div className="ContactForm">
        <div className="container">
            <div className="row">
                <div className="col s12 text-center">
                    <div className="contactForm">
                        <form ref={form} id="contact-form" onSubmit={sendEmail} noValidate>
                            <div className="row formRow">
                                <div className=" input-field col s6">
                                    <input
                                        type="text"
                                        name="user_name"
                                       value={name}
                                       onChange = { (e) => setName(e.target.value)}
                                        className="form-control formInput"
                                        placeholder="Name"/>  
                                </div>

                                <div className='input-field col s6'>
                    <input
                      type='email'
                      name='user_email'
                    value={email}
                    
                      className='form-control formInput'
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='E-mail Addresse'
                    ></input> 
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='input-field col-12'>
                    <input
                      type='text'
                      name='user_subject'
                    value={subject}
                      className='form-control formInput'
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder='Betreff'
                    ></input>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className=' input-field col-12'>
                    <textarea
                      rows={3}
                      name='message'
                      value={message}
                      className='form-control formInput'
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder='Schreibe mir'
                    ></textarea>
                </div>
                </div>
                {/* <button className=' btn btn-secondary submit-btn' type='submit'>
                  Submit
                </button> */}
                 <Button onClick={submit} variant="contained" color="secondary" className="btn-banner">
                             senden
                          </Button>
                          

                        </form>
                    </div>
                    <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
                    {/* <ToastContainer/> */}
                </div>
            </div>
        </div>
    </div>
)
}

//   );
// };

export default Contact;