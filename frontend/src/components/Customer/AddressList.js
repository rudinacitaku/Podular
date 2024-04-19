import { Link } from "react-router-dom";

function AddressList(){
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
                    <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <h6>
                                        <i className="fa fa-check-circle text-success mb-2"/><br/>
                                        UBT-Qendra: Bulevardi Bill Klinton,10000 Prishtina, Kosovo
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <h6>
                                        <span className="badge bg-secondary mb-2">Make default</span><br/>
                                        UBT-Prishtine: Lagjja Kalabria,10000 Prishtine, Kosovo
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <h6>
                                        <span className="badge bg-secondary mb-2">Make default</span><br/>
                                        UBT-Lipjan: Innovation Campus, 14000 Lipjan, Kosovo
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <h6>
                                        <span className="badge bg-secondary mb-2">Make default</span><br/>
                                        UBT-Ferizaj: Ahmet Kaçiku,70000 Ferizaj, Kosovo
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <h6>
                                        <span className="badge bg-secondary mb-2">Make default</span><br/>
                                        UBT-Gjilan: Rruga e Ferizajit, M25-3,60000 Gjilan, Kosovo
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddressList;