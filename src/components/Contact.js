import {useRef} from 'react';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import {Button} from '@material-ui/core';
// require ('dotenv').config();


const Contact = () => {
    const { register, handleSubmit, reset, formState: {errors}} = useForm();
  const form = useRef();

    const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };
const onSubmit = async (data) => {
    const { name, email, subject, message} = data;

   
    try {
        const templateParams = {
          name,
          email,
          subject,
          message
        };   
        
        await emailjs.send(
        //  process.env.REACT_APP_SERVICE_ID,
        //   process.env.REACT_APP_TEMPLATE_ID,
        //   templateParams,
        //   process.env.REACT_APP_USER_ID

          
          "service_xd0lt88",
          "template_rvr2uzr",
          templateParams,
          "user_ZYHhw5Xp4i3qpbBRcr0Xw"
        );
        reset();
        toastifySuccess();
      } catch (e) {
        console.log(e);
      }
    };
   



return (
    <div className="ContactForm">
        <div className="container">
            <div className="row">
                <div className="col s12 text-center">
                    <div className="contactForm">
                        <form ref={form} id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="row formRow">
                                <div className=" input-field col s6">
                                    <input
                                        type="text"
                                        name="name"
                                        {...register("name", {
                                            required: {value: true, message:"Please enter your name"},
                                            maxLength: {
                                                value:30,
                                                message:"Please use 30 characters or less"
                                            }
                                        })}
                                        className="form-control formInput"
                                        placeholder="Name"/>
                                        {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                                </div>
                                <div className='input-field col s6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='E-mail Addresse'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='input-field col-12'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Betreff'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className=' input-field col-12'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Schreibe mir'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                {/* <button className=' btn btn-secondary submit-btn' type='submit'>
                  Submit
                </button> */}
                 <Button variant="contained" color="secondary" className="btn-banner">
                             senden
                          </Button>
                           
                        </form>
                    </div>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    </div>
)
}
export default Contact
