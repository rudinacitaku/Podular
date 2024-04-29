import React, { useState, useEffect } from 'react';

const fetchData = async (url) => {
    const token = sessionStorage.getItem('access');
    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    if (!response.ok) {
        if (response.status === 403 || response.status === 401) {
            // This status code implies the token is either invalid or expired
            const refreshToken = sessionStorage.getItem('refresh');
            const refreshResponse = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ refresh: refreshToken }),
            });
            const refreshData = await refreshResponse.json();
            if (refreshResponse.ok) {
                sessionStorage.setItem('access', refreshData.access);  // Update the access token in sessionStorage
                return fetchData(url);  // Retry the original request with new token
            } else {
                console.error('Refresh token invalid or expired.');
                // Handling logout: Remove tokens and possibly redirect to login
                sessionStorage.removeItem('access');
                sessionStorage.removeItem('refresh');
                // Optionally, redirect the user to the login page or show a modal asking them to re-login
                window.location.href = '/SingleSeller';  // Redirect to login page or show appropriate UI feedback
            }
        }
        throw new Error(data.detail || 'Unknown error');  // Throw an error with the detail from the server or a generic error
    }
    return data;  // Return the data if everything is okay
};

function AllSellers() {
    const [sellers, setSellers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchData('http://127.0.0.1:8000/api/creator/')
            .then(data => {
                setSellers(data.results)
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);

    return (
        <div>
            <h1>All Sellers</h1>
            {error && <p>Error: {error}</p>}
            {sellers.length > 0 ? (
                <ul>
                    {sellers.map(seller => (
                        <li key={seller.id}>{seller.name}</li>
                    ))}
                </ul>
            ) : (
                !error && <p>No sellers found.</p>
            )}
        </div>
    );
}

export default AllSellers;

