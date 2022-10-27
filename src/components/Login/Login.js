import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.pass.value;
        console.log(email, password);

        signIn(email, password);
        form.reset();
        navigate(from, {replace: true});
    }
    return (
        <div className='form-container'>
            <h4 className='title'>Login</h4>
            <form onSubmit={handleLogin} action="">
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter password' name='pass' required />
                </div>
                <button>Login</button>
            </form>
            <p>New to Ema-Jhon <Link to='/signUp'>Create a new account</Link> </p>
        </div>
    );
};

export default Login;