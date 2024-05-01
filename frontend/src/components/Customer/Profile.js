import React from 'react';

function Profile() {
  return (
    <div className='col-md-9 col-12 mb-2'>
      <div className='card'>
        <h4 className='card-header'>Update Profile</h4>
        <div className='card-body'>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
