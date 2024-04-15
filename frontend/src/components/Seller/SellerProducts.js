import React from 'react';
import SellerSidebar from './SellerSidebar';
import { Link } from 'react-router-dom';

function SellerProducts(props) {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-9 col-12'>
                    {/* Adjust the width of the column here */}
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <td colSpan="6" align='right'>
                                        <Link to="/seller/add-product" className='btn btn-primary mb-2'> Add Podcast </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th>#</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Comedy</td>
                                    <td>Podcast title</td>
                                    <td>Random</td>
                                    <td>None</td>
                                    <td>
                                        <a href='#' className='btn btn-info'>View</a>
                                        <a href='#' className='btn btn-primary ms-1'>Edit</a>
                                        <a href='#' className='btn btn-danger ms-1'>Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-md-3 col-12'>
                    {/* Adjust the width of the sidebar column */}
                    <SellerSidebar />
                </div>
            </div>
        </div>
    );
}

export default SellerProducts;
