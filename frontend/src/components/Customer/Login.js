// import { Link } from 'react-router-dom';

function Login(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Login</h4>
                        <div className='card-body'>
                            <form>
                            <div className="mb-3 text-start">
                                <label for="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username"/>
                            </div>
                            <div class="mb-3 text-start">
                                <label for="pwd" className="form-label">Password</label>
                                <input type="password" className="form-control" id="pwd"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;