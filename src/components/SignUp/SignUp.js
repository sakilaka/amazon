import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css';

const SignUp = () => {
    
    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState(null);
    

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.pass.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        
        if(password.length < 6){
            setError('password must be 6 character or more.');
            return
        }

        if(password !== confirm){
            setError('password not matched');
            return
        }

        createUser(email, password);
        form.reset();
    }

    return (
        <div className='form-container'>
            <h4 className='title'>Sign Up</h4>
            <p className='error'>{error}</p>
            <form onSubmit={handleSignUp} action="">
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter password' name='pass' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" placeholder='Confirm password' name='confirm' required />
                </div>
                <button>Sign Up</button>
            </form>
            <p>Already Have an account <Link to='/login'>Login</Link> </p>
        </div>
    );
};


export default SignUp;