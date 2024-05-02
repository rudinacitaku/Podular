import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function DeleteAddress(){
    
    const { address_id } = useParams();

   
    const [ErrorMsg, setErrorMsg] = useState('');
    const [SuccessMsg, setSuccessMsg] = useState('');

    
    const history = useHistory();

    const DeleteAddress = () => {
        
        axios.delete(baseUrl+'/address/'+parseInt(address_id)+'/')
        .then((response) => {
            
            if(response.status === 204){
                setSuccessMsg('Address deleted successfully');
                setErrorMsg('');
            
                history.push('/address');
            } else {
                setSuccessMsg('');
                setErrorMsg('Failed to delete address');
            }
        })
        .catch((error) => {
            console.log(error);
            setErrorMsg('Failed to delete address');
        });
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <h4 className="card-header">Delete Address</h4>
                        <div className="card-body">
                            {ErrorMsg && <p className="alert alert-danger">{ErrorMsg}</p>}
                            {SuccessMsg && <p className="alert alert-success">{SuccessMsg}</p>}
                            <p>Are you sure you want to delete this address?</p>
                            <button type="button" onClick={DeleteAddress} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteAddress;
