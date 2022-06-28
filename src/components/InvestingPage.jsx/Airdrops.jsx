import React from "react";
import Card from "../Card";

const Airdrops = () => {
    return (
        <div className="profit-bg d-flex flex-column justify-content-center align-items-center py-5 profile-container">
        <div className="profit-card col-lg-8 col-md-12 bg-white profile-up ">
            <Card title="AIRDROP" />
            <div className="card-body px-5 text-start">
            <div className="container">
                <div className="row   w-100 mx-auto">
                <div className="col-md-6">
                    <h4 className="bg-darkgrey text-white text-center p-2 ">
                    TEAM AIRDROP
                    </h4>
                    <label htmlFor="">Team Id</label>
                    <input
                    type="text"
                    className="form-control w-100"
                    placeholder="0"
                    />
                    <label htmlFor="">Amount in BNB</label>
                    <input
                    type="text"
                    className="form-control w-100"
                    placeholder="0.1"
                    />
                    <div className="d-flex w-100 my-3">
                    <input type="checkbox" id="toggle" />
                    <label htmlFor="toggle" className="toggle-label me-1"></label>
                    <span> Also send to team owner</span>
                    </div>
                    <div className=" m-auto  w-100  ">
                    <button
                        className="btn-main d-flex px-3 py-1 mx-auto btn-lg btn-hover text-center "
                        style={{ width: "150px" }}
                    >
                        SEND NOW
                    </button>
                    <p className="text-center" style={{ fontSize: "15px" }}>
                        Your Balance: 1.402541 BNB
                    </p>
                    </div>
                </div>
                <div className="col-md-6 h-100">
                    <h4 className="bg-darkgrey text-white text-center p-2 ">
                    DIRECT AIRDROP
                    </h4>
                    <label htmlFor="">Recipient</label>
                    <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Type recipient"
                    />
                    <label htmlFor="">Amount in BNB</label>
                    <input
                    type="text"
                    className="form-control w-100"
                    placeholder="0.1"
                    />
                    <div className=" mx-auto w-100 mt-2  pt-5">
                    <button
                        className="btn-main d-flex px-3 py-1 mx-auto btn-lg btn-hover text-center "
                        style={{ width: "150px" }}
                    >
                        SEND NOW
                    </button>
                    <p className="text-center" style={{ fontSize: "15px" }}>
                        Your Balance: 1.402541 BNB
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Airdrops;
