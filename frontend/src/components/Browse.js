import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


function Browse(){
  const [categories,setCategories]=useState([]) 

  useEffect(()=>{
    fetchData ('http://127.0.0.1:8000/api/categories/')
  });

  function fetchData(baseUrl){
    fetch(baseUrl)
    .then((response)=>response.json())
    .then((data)=>setCategories(data.results));
  }
  
  // var links=[];
  // var limit=1;
  // var totalLinks=totalResult/limit;
  // for (let i=1; i<=totalLinks; i++){
  //   links.push(<li class='page-item'><Link onClick={()=>changeUrl(baseUrl=`/categories/?page=${i}`)} to={`/categories/?page=${i}`} class="page-link">{i}</Link>    
  //   </li>)
  // }
    return (
        <div className='container mt-4'>
        <h3 className='mb-4'><span className='text-success'>Podcast</span> Categories</h3>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
          {
            categories.map ((category)=><div className='col'>
            <div className="card h-100">
              <img src='#' className="card-img-top" alt={category.title} />
              <div className="card-body">
                <h4 className="card-title"><Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>
                {/* <h5 className="card-title text-muted">Price: 100$</h5> */}
              </div>
              <div className='card-footer'>
                <button title="Add to Cart" className='btn btn-success btn-sm'><i className="fas fa-cart-plus"></i></button>
                <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-1'><i className="fas fa-heart"></i></button>
              </div>
            </div>
            </div>
          )
          
          }
        
        
        {/* Add Card 2, Card 3, Card 4 */}
        </div>
    
    <nav aria-label="Page navigation example">
        <ul class="pagination">
           {/* {links} */}

            
        </ul>
     </nav>

    </div>
    );
}

export default Browse;