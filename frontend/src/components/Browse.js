import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import SinglePodcast from './SinglePodcast';


function Browse() {
  const podcasts=[
    {
      'title':'Podcast 1',
      'price':100
    },
    {
      'title':'Podcast 2',
      'price':100
    },
    {
      'title':'Podcast 3',
      'price':100
    },
    {
      'title':'Podcast 4',
      'price':100
    },
  ]

  fetch ('http://127.0.0.1:8000/api/podcasts/')
  .then((response)=>response.json())
  .then((data)=>console.log(data));
  return (
    <>
      {/* Latest Podcasts */}
      <main className='mt-4'>
        <div className='container'>
          <h3 className='mb-4'>Latest Podcasts <a href='#' className='float-end btn btn-dark'>View All Podcasts <i className="fas fa-arrow-right"></i></a></h3>
          <div className='row mb-4'>
            {
              podcasts.map((podcast)=> <SinglePodcast podcast={podcast} />)
            }
          </div>
        </div>
      </main>
      
      {/* Start of row for Latest Podcasts */}
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
      {/* End of row for Latest Podcasts */}

      {/* Popular Categories */}
      <main className='mt-4'>
        <div className='container'>
          <h3 className='mb-4'>Popular Categories <a href='#' className='float-end btn btn-dark'>View All Categories <i className="fas fa-arrow-right"></i></a></h3>
        </div>
      </main>
      
      {/* Start of row for Popular Categories */}
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {/* Card 1 */}
        <div className='col'>
        <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Podcast Category</h4>
            </div>
            <div className='card-footer'>
              Downloads : 100
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className='col'>
        <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Podcast Category</h4>
            </div>
            <div className='card-footer'>
              Downloads : 100
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className='col'>
        <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Podcast Category</h4>
            </div>
            <div className='card-footer'>
              Downloads : 100
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className='col'>
        <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Podcast Category</h4>
            </div>
            <div className='card-footer'>
              Downloads : 100
            </div>
          </div>
        </div>
      </div>
      {/* End of row for Popular Categories */}

      {/* Popular Podcasts */}
      <main className='mt-4'>
        <div className='container'>
          <h3 className='mb-4'>Popular Podcasts <a href='#' className='float-end btn btn-dark'>View All Podcasts <i className="fas fa-arrow-right"></i></a></h3>
        </div>
      </main>
      
      {/* Start of row for Popular Podcasts */}
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {/* Card 1 */}
        <div className='col'>
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
        {/* Card 2 */}
        <div className='col'>
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
        {/* Card 3 */}
        <div className='col'>
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
        {/* Card 4 */}
        <div className='col'>
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
      </div>
      {/* End of row for Popular Podcasts */}

      {/* Popular Sellers */}
      <main className='mt-4'>
        <div className='container'>
          <h3 className='mb-4'>Popular Sellers <a href='#' className='float-end btn btn-dark'>View All Sellers <i className="fas fa-arrow-right"></i></a></h3>
        </div>
      </main>
      
      {/* Start of row for Popular Sellers */}
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {/* Card 1 */}

        <div className='col'>
        <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Seller Name</h4>
            </div>
            <div className='card-footer'>
              Categories : <a href="#">Python</a>, <a href="#">React</a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className='col'>
        <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Seller Name</h4>
            </div>
            <div className='card-footer'>
              Categories : <a href="#">PHP</a>, <a href="#">React</a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className='col'>
        <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Seller Name</h4>
            </div>
            <div className='card-footer'>
              Categories : <a href="#">UI</a>, <a href="#">UX</a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className='col'>
        <div className="card h-100">
            <img src={logo} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h4 className="card-title">Seller Name</h4>
            </div>
            <div className='card-footer'>
              Categories : <a href="#">WordPress</a>, <a href="#">Graphic Design</a>
            </div>
          </div>
        </div>
      </div>
      {/* End of row for Popular Sellers */}

      {/* Rating and Reviews start */ }
      <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A review of a podcast</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <cite title="Source Title">Customer 1</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
          <figure className="text-center">
              <blockquote className="blockquote">
                <p>Second review of a podcast</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star "></i>
                <cite title="Source Title">Customer 2</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
          <figure className="text-center">
              <blockquote className="blockquote">
                <p>Third review of a podcast</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star "></i>
                <i className="fa fa-star "></i>
                <cite title="Source Title">Customer 1</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* Rating and Reviews End */} 
      
      {/* Footer start */}
      <footer className="d-flex flex-wrap justify-content-between align-items-center my-5 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">Podcast website</a>
          <span className="mb-3 mb-md-0 text-muted">© 2024 Podular, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pt-2">
          <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-instagram fa-2x"></i></a></li>
          <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-twitter fa-2x"></i></a></li>
          <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-facebook fa-2x"></i></a></li>
        
        </ul>
      </footer>
      {/* Footer end */}
    </>
  );
}

export default Browse;
