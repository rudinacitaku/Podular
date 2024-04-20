import SellerSidebar from "./SellerSidebar";

function Customers() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-9 col-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>T Shirt</td>
                  <td>$$$</td>
                  <td>Available</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Orders</button>
                    <button className="btn btn-danger btn-sm ms-1">Remove from List</button>
                    
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Totebag</td>
                  <td>$$$</td>
                  <td>Available</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Orders</button>
                    <button className="btn btn-danger btn-sm ms-1">Remove from List</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebar />
        </div>
      </div>
    </div>
  );
}

export default Customers;
