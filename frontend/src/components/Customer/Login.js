import axios from "axios";
import { useState } from "react";

function Login(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [loginFormData, setLoginFormData] = useState({
        "username": '',
        "password": ''
    });

    const inputHandler = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = (event) => {
        // Send data as JSON payload
        axios.post(baseUrl + 'customer/login/', loginFormData)
            .then(function (response) {
                if (response.data.bool === false) {
                    setFormError(true);
                    setErrorMsg(response.data.msg);
                } else {
                    localStorage.setItem('customer_login', true);
                    localStorage.setItem('customer_username', response.data.user);
                    setFormError(false);
                    setErrorMsg('');
                    window.location.href = '/customer/dashboard'; // Navigate to dashboard on successful login
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const checkCustomer = localStorage.getItem('customer_login');
    if (checkCustomer) {
        window.location.href = '/customer/dashboard';
    }

    const buttonEnable = (loginFormData.username !== '') && (loginFormData.password !== '');

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Login</h4>
                        <div className='card-body'>
                            {formError &&
                                <p className="text-danger">{errorMsg}</p>
                            }
                            <form>
                                <div className="mb-3 text-start">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" name="username" value={loginFormData.username} onChange={inputHandler} className="form-control" id="username" />
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="pwd" className="form-label">Password</label>
                                    <input type="password" name="password" value={loginFormData.password} onChange={inputHandler} className="form-control" id="pwd" />
                                </div>
                                <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
