import { Link } from 'react-router-dom';
import { CurrencyContext } from '../Context';
import { useContext } from 'react';
import logo from './logo.svg'

function SinglePodcast(props){
    const{CurrencyData}=useContext(CurrencyContext);
    return (
        <div className='col-12 col-md-3 mb-4'>
            <div className="card">
                <Link to={`/podcast/${props.podcast.title}/${props.podcast.id}`}>
                    <img src={logo} className="card-img-top" alt="..." /> 
                     {/* src={props.podcast.image} */}
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/podcast/${props.podcast.title}/${props.podcast.id}`}>{props.podcast.title}</Link></h5>
                    {
                        CurrencyData != 'usd' && <h5 className='card-title text-muted'>Price: {props.podcast.price} Euro</h5>
                    }
                    {
                        CurrencyData == 'usd' && <h5 className='card-title text-muted'>Price: {props.podcast.price} $</h5>
                    }
                </div>
                <div className='card-footer'>
                    <button title="Add to Cart" className='btn btn-success btn-sm'><i
                    className="fa-solid fa-cart-plus"></i></button>
                    <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-l'><i
                    className="fa fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}

export default SinglePodcast;