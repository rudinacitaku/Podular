import {Link} from 'react-router-dom';
function SellerSidebar(){
    return(
        <div className="list-group">
            <Link to="/seller/dashboard"className='list-group-item list-group-item-action'> Dashboard</Link>
            <Link to="/seller/orders"className='list-group-item list-group-item-action'> Orders</Link>
            <Link to="/seller/products"className='list-group-item list-group-item-action'> Podcasts</Link>
            <Link to="/seller/add-product"className='list-group-item list-group-item-action'> Add Podcast </Link>
            <Link to="/seller/customers"className='list-group-item list-group-item-action'> Customers</Link>
            <Link to="/seller/reports"className='list-group-item list-group-item-action'> Reports</Link>
            <Link to="/seller/addresses"className='list-group-item list-group-item-action'> Addresses</Link>
            <a href="#"className='list-group-item list-group-item-action text-danger'> Log Out</a>
        </div>
    )
}
export default SellerSidebar;