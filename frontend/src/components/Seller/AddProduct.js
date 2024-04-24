import SellerSidebar from './SellerSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api/';

function AddProduct() {
  const vendor_id=localStorage.getItem('vendor_id');
  const [ErrorMsg,setErrorMsg]=useState('');
  const [SuccessMsg,setSuccessMsg]=useState('');
  const [PodcastCategoryData, setPodcastCategoryData]=useState([]);
  const [PodcastData, setPodcastData]=useState({
    'category':'',
    'vendor':'',
    'title':'',
    'detail':'',
    'price':'',
    'image':''
  });

  const inputHandler = (event) =>{
    setPodcastData({
      ...PodcastData,
      [event.target.name]:event.target.value
    })
  };

  const fileHandler = (event) =>{
    setPodcastData({
      ...PodcastData,
      [event.target.name]:event.target.files[0]
    })
  };

  const submitHandler = () =>{
    const formData=new FormData();
    formData.append('vendor',PodcastData.vendor);
    formData.append('category',PodcastData.category);
    formData.append('title',PodcastData.title);
    formData.append('detail',PodcastData.detail);
    formData.append('price',PodcastData.price);
    formData.append('image',PodcastData.image);

    axios.post(baseUrl+'podcasts/',formData,{
      headers: {
        'content-type' : 'multipart/form-data'
      }
    })

    .then(function (response){
      console.log(response);
      if(response.status == 201){
        setErrorMsg('')
        setSuccessMsg(response.statusText);
      }else{
        setPodcastData({
          'category':'',
          'vendor':'',
          'title':'',
          'detail':'',
          'price':'',
          'image':''
        });
        setErrorMsg('');
        setSuccessMsg(response.statusText);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }


  useEffect(() => {
    setPodcastData({
      ...PodcastData,
      'vendor':vendor_id
    });
    fetchData(baseUrl+ 'categories/');
  }, []);


  function fetchData(baseurl){
    fetch(baseurl)
    .then((response) => response.json())
    .then((data) => {
      setPodcastCategoryData(data.results);
    });
  }




  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-9 col-12 mx-auto'> {/* Center the content */}
          <div className='row'>
            <div className='col-md-9 col-12 mb-2'> {/* Column for the form */}
              <div className='card'>
                <h4 className='card-header'>Add Podcast</h4>
                <div className='card-body'>
                {SuccessMsg && <p className="text-success">{SuccessMsg}</p>}
                {ErrorMsg && <p className="text-danger">{ErrorMsg}</p>}
                  <form>
                    <div className='mb-3'>
                      <label htmlFor='Category' className='form-label'>Category</label>
                      <select className='form-control' name='category' onChange={inputHandler}>

                        {
                          PodcastCategoryData.map((item, index)=><option value={item.id}>{item.title}</option>)
                        }
                        {/*
                        <option value='comedy'>Comedy</option>
                        <option value='history'>History</option>
                        <option value='truecrime'>True Crime</option>
                        <option value='relationships'>Relationships</option>
                        <option value='selfcare'>Self-care</option>
                        <option value='educational'>Educational</option>
                        <option value='newsandpolitics'>News and Politics</option>
                        <option value='stories'>Stories</option>
                      */}
                      </select>
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='title' className='form-label'>Title</label>
                      <input type='text' name="title" value={PodcastData.title} onChange={inputHandler} className='form-control' id='title' />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='price' className='form-label'>Price</label>
                      <input type='number' name="price" value={PodcastData.price} onChange={inputHandler} className='form-control' id='price' />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='description' className='form-label'>Description</label>
                      <textarea className='form-control' name="detail" value={PodcastData.detail} onChange={inputHandler} rows='8' id='description' />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='productImg' className='form-label'>Podcast Image</label>
                      <input type='file' className='form-control' name="image" onChange={fileHandler} id='productImg' />
                    </div>
                    <button type="submit" onClick={submitHandler} className='btn btn-primary'>Submit</button>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-12 mb-2 order-first order-md-last'> {/* Column for the sidebar, displayed on the right */}
              <SellerSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

