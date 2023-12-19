import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { loginValidation } from '../helper/validate'

import styles from '../styles/Username.module.css';

function Login() {
    

    const formik = useFormik({
        initialValues : {
          username : '',
          password:''

        },
        validate: loginValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
          console.log(values)
        }
      })
    return (
        <div className="w-full mx-auto">
            <Toaster position='top-center' reverseOrder={false}></Toaster>

       
  
        <div className='flex justify-center items-center h-screen'>
          <div className={styles.glass}>
  
            <div className="title flex flex-col items-center">
              <h4 className='text-xl font-bold'>Sign In</h4>
              
            </div>
  
            <form className='py-1' onSubmit={formik.handleSubmit}>
            
  
                <div className="textbox flex flex-col items-center gap-6 my-4 w-full">
                    <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                    
                </div>
                <div className="textbox flex flex-col items-center gap-6 w-full">
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password' />
                 
                </div>

                <div className="text-center py-4">
                <span className='text-gray-500 text-sm'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
                </div>

                <div className='flex flex-col items-center gap-6'>
                <button className={styles.btn} type='submit'>Sign In</button>
                </div>
  
                <div className="text-center py-4">
                  <span className='text-gray-500 text-sm'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
                </div>
  
            </form>
  
          </div>
        </div>
      </div>
    )
}

export default Login

