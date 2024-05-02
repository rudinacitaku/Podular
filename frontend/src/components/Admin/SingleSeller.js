import { Link } from 'react-router-dom';

function SingleSeller(props) {
    return (
        <div className='col-12 col-md-3 mb-4'>
            <div className="card">
                <Link to={`/seller/${props.seller.id}`}>
                    <img src={props.seller.profile_img} className="card-img-top" alt="Seller Profile" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/seller/${props.seller.id}`}>{props.seller.user.username || 'Unknown User'}</Link>
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default SingleSeller;
