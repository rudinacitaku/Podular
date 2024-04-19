function AddAddress(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    {/*Sidebar*/}
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <h4 className="card-header">Add Address</h4>
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="address" className="form-label">Address:</label>
                                <textarea className="form-control" id="address"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddAddress;