import React from 'react';
import logo from '../logo.svg';

function CategoryPodcasts(){
    return (
        <div className='container mt-4'>
        <h3 className='mb-4'><span className='text-success'>Python</span> Podcasts</h3>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
        {/* Card 1 */}
        <div className='col'>
          <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Podcast Title</h4>
              {/* <h5 className="card-title text-muted">Price: 100$</h5> */}
            </div>
            <div className='card-footer'>
              <button title="Add to Cart" className='btn btn-success btn-sm'><i className="fas fa-cart-plus"></i></button>
              <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fas fa-heart"></i></button>
            </div>
          </div>
        </div>
        {/* Add Card 2, Card 3, Card 4 */}
        {/* Card 2 */}
        <div className='col'>
          <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Podcast Title</h4>
              {/* <h5 className="card-title text-muted">Price: 100$</h5> */}
            </div>
            <div className='card-footer'>
              <button title="Add to Cart" className='btn btn-success btn-sm'><i className="fas fa-cart-plus"></i></button>
              <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fas fa-heart"></i></button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className='col'>
        <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Podcast Title</h4>
              {/* <h5 className="card-title text-muted">Price: 100$</h5> */}
            </div>
            <div className='card-footer'>
              <button title="Add to Cart" className='btn btn-success btn-sm'><i className="fas fa-cart-plus"></i></button>
              <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fas fa-heart"></i></button>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className='col'>
        <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Podcast Title</h4>
              {/* <h5 className="card-title text-muted">Price: 100$</h5> */}
            </div>
            <div className='card-footer'>
              <button title="Add to Cart" className='btn btn-success btn-sm'><i className="fas fa-cart-plus"></i></button>
              <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fas fa-heart"></i></button>
            </div>
          </div>
        </div>      
      </div>
    
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
     </nav>

    </div>
    );
}

export default CategoryPodcasts;