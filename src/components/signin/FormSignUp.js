import React, {useState} from "react";
import useForm from "./useForm";

const FormSignUp = () => {
    const {handleChange, handleSubmit, values, errors} = useForm();

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>SIGN IN</h1>
                <div className='form-input'>
                    <label htmlFor='username'
                           className='form-label'>
                        Username
                    </label>
                        <input
                            id='username'
                            type='text'
                            name='username'
                            className='form-input'
                            placeholder='Enter your username'
                            value={values.username}
                            onChange={handleChange}/>
                </div>
                <div className='form-input'>
                    <label htmlFor='email'
                           className='form-label'>
                        Email
                    </label>
                        <input
                            id='email'
                            type='email'
                            name='email'
                            className='form-input'
                            placeholder='Enter your email'
                            value={values.email}
                            onChange={handleChange}/>
                </div>
                <div className='form-input'>
                    <label htmlFor='password'
                           className='form-label'>
                        Password
                    </label>
                    <input
                        id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}/>
                </div>
                <button className='form-input-button'
                        type='submit'>
                    SIGN IN
                </button>
                <span className='form-input-login'>
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignUp;