// import { Link } from 'react-router-dom';

function Dashboard(props){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-2 col-12 mb-2'>
                    <div className="list-group">
                        <a className="list-group-item list-group-item-action disabled text-success fw-bold" aria-disabled="true">Dashboard</a>
                        <a href="#" className="list-group-item list-group-item-action">Profile Settings</a>
                        <a href="#" className="list-group-item list-group-item-action">Following Podcasts</a>
                        <a href="#" className="list-group-item list-group-item-action">Favorite Creators</a>
                        <a href="#" className="list-group-item list-group-item-action">My Orders</a>
                        <a href="#" className="list-group-item list-group-item-action text-danger">Logout</a>
                    </div>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-4 mb-2'>
                            <div className="card"> 
                                <div className="card-body text-center">
                                    <h4>Profile Settings</h4>
                                    <h6><a href="#" className="text-success">Language</a></h6>
                                    <h6><a href="#" className="text-success">Content Preferences</a></h6>
                                    <h6><a href="#" className="text-success">Address</a></h6>
                                    <h6><a href="#" className="text-success">Change Password</a></h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className="card"> 
                                <div className="card-body text-center">
                                    <h4>Following Podcasts List</h4>
                                    <h6><a href="#" className="text-success">000</a></h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className="card"> 
                                <div className="card-body text-center">
                                    <h4>Favorite Creators List</h4>
                                    <h6><a href="#" className="text-success">000</a></h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className="card"> 
                                <div className="card-body text-center">
                                        <h4>My Total Orders</h4>
                                        <h6><a href="#" className="text-success">000</a></h6>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;