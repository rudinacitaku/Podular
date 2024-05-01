import logo from '/logo.svg';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import SinglePodcast from './SinglePodcast';

function PodcastDetail(){
    const baseUrl='http://127.0.0.1:8000/api';
    const [podcastData,setpodcastData]=useState([]);
    const {podcast_slug,podcast_id} = useParams();

    useEffect(() => {
        fetchData(baseUrl+'/podcast/'+podcast_id_id);
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setpodcastData(data);
        });
    }

    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                <div id="productThumbnailSlider" className="carousel carousel-dark slide
                carousel-fade" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#productThumbnailSlider"
                        data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide
                        1"></button>
                        <button type="button" data-bs-target="#productThumbnailSlider"
                        data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#productThumbnailSlider"
                        data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={logo} className="img-thumbnail mb-5" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src={logo} className="img-thumbnail mb-5" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src={logo} className="img-thumbnail mb-5" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button"
                    data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-prev" type="button"
                    data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
                <div className="col-8">
                    <h3>{podcastData.title}</h3>
                    <p>{podcastData.detail}</p>
                    <h5 className="card-title">Price: $ {podcastData.price}</h5>
                </div>
            </div>
        </section>
    )
}

export default PodcastDetail;