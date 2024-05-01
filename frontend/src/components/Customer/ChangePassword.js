import React from 'react';

function ChangePassword() {
  return (
    <div className='col-md-9 col-12 mb-2'>
      <div className='card'>
        <h4 className='card-header'>Change Password</h4>
        <div className='card-body'>
          <form>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">New Password</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
            <div className="mb-3">
              <label htmlFor="cpwd" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="cpwd" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
