import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(props) {
     // Ensure this URL is correctly configured as per your server settings
  const baseUrl = 'http://127.0.0.1:8000/api/';  // Include the trailing slash here
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  // Check if user is already logged in and redirect
  useEffect(() => {
    if (localStorage.getItem('customer_login')) {
      navigate('/customer/dashboard');
    }
  }, [navigate]);

  const inputHandler = (event) => {
    setLoginFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', loginFormData.username);
    formData.append('password', loginFormData.password);

    // Corrected the API endpoint concatenation here
    axios.post(baseUrl + 'customer/login/', formData)
      .then(response => {
        const data = response.data;
        if (data.bool) {
          // Assuming your response has these keys and bool represents success
          localStorage.setItem('customer_login', true);
          localStorage.setItem('customer_username', data.user);
          localStorage.setItem('customer_id', data.id);
          navigate('/customer/dashboard');
        } else {
          setErrorMsg(data.msg);
        }
      })
      .catch(error => {
        console.log(error);
        setErrorMsg('Login failed. Please try again.');
      });
  };
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Login</h4>
                        <div className='card-body'>
                        <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" name="username" autoComplete="username" value={loginFormData.username} onChange={inputHandler} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password" autoComplete="current-password" value={loginFormData.password} onChange={inputHandler} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                {errorMsg && <p className="text-danger mt-2">{errorMsg}</p>}
              </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
