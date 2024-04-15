
import SellerSidebar from './SellerSidebar';

function AddProduct() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-9 col-12 mx-auto'> {/* Center the content */}
          <div className='row'>
            <div className='col-md-9 col-12 mb-2'> {/* Column for the form */}
              <div className='card'>
                <h4 className='card-header'>Add Podcast</h4>
                <div className='card-body'>
                  <form>
                    <div className='mb-3'>
                      <label htmlFor='Category' className='form-label'>Category</label>
                      <select className='form-control'>
                        <option>Comedy</option>
                        <option>History</option>
                        <option>True Crime</option>
                        <option>Relationships</option>
                        <option>Self-care</option>
                        <option>Educational</option>
                        <option>News and Politics</option>
                        <option>Stories</option>
                      </select>
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='title' className='form-label'>Title</label>
                      <input type='text' className='form-control' id='title' />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='description' className='form-label'>Description</label>
                      <textarea className='form-control' rows='8' id='description' />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='productImg' className='form-label'>Podcast Image</label>
                      <input type='file' className='form-control' id='productImg' />
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-12 mb-2'> {/* Column for the sidebar */}
              <SellerSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
