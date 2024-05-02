import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SingleSeller from './SingleSeller';

function AllSellers(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/creator/';
    const [sellerList, setSellerList] = useState([]);
    const [totalResult, setTotalResults] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchData(baseUrl); // Initial data fetch on component mount
    }, []);

    function fetchData(url) {
        console.log('Fetching data from:', url); // Debugging statement
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data); // Debugging statement
                if (Array.isArray(data.results)) {
                    setSellerList(data.results);
                    setTotalResults(data.count);
                } else {
                    throw new Error("Data format error: Expected results to be an array");
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to fetch sellers');
                setSellerList([]); // Maintain an array type on error
            });
    }

    function changeUrl(pageNumber) {
        fetchData(`${baseUrl}?page=${pageNumber}`);
    }

    const links = [];
    const limit = 12;
    const totalLinks = Math.ceil(totalResult / limit);
    for (let i = 1; i <= totalLinks; i++) {
        links.push(
            <li key={`page-${i}`} className='page-item'>
                <Link to={`/creator/?page=${i}`} className='page-link' onClick={() => changeUrl(i)}>
                    {i}
                </Link>
            </li>
        );
    }

    return (
        <section className='container mt-4'>
            <h3 className='mb-4'>All Sellers</h3>
            {error && <div>Error: {error}</div>}
            <div className='row mb-4'>
                {sellerList.length > 0 ? (
                    sellerList.map((seller, index) => (
                        <SingleSeller key={`${seller.id}-${index}`} seller={seller} />
                    ))
                ) : (
                    <p>No sellers found.</p>
                )}
            </div>
            <nav aria-label="Page navigation example">
                <ul className='pagination'>
                    {links}
                </ul>
            </nav>
        </section>
    );
}

export default AllSellers;


