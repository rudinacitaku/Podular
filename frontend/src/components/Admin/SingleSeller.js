import { Link } from 'react-router-dom';
import { useContext } from 'react';

function SingleSeller(props){
    const {CurrencyData}=useContext(CurrencyData);
    return (
        <div className='col-12 col-md-3 mb-4'>
            <div className="card">
                <Link to={`/seller/${props.seller.id}`}>
                    <img src={props.seller.profile_img} className="card-img-top" alt={props.seller.user} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/seller/${props.seller.id}/${props.seller.user}`}></Link></h5>
                    </div>
            </div>
        </div>
    )
}

export default SingleSeller;