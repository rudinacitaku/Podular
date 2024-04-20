import { Link } from "react-router-dom";
//import Sidebar from './Sidebar';
import { useEffect, useState } from "react";
const baseUrl='http://127.0.0.1:8000/api';

function AddressList(){
    var customer_id=localStorage.getItem('customer_id');

    const [AddressList, setAddressList]=useState([]);
    useEffect(() => {
        fetchData(baseUrl+'/customer/'+customer_id+'/address-list/');
    },[]);
    function fetchData(baseUrl){
        fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
            setAddressList(data.results);
        });
    }

    console.log(AddressList);


    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    {/*Sidebar*/}
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="col-12">
                        <Link to="/customer/add-address" className="btn btn-outline-success mb-4 float-end"><i className="fa fa-plus-circle"></i>Add Address</Link>
                        </div>
                    </div>
                    <div className="row">
                        {
                            AddressList.map((address,index)=>{
                                return <div className="col-4 mb-4">
                                            <div className="card">
                                                <div className="card-body text-muted">
                                                <h6>
                                                    {address.default_address && <span><i className="fa fa-check-circle text-success mb-2"/><br/></span>}
                                                    {address.address}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddressList;