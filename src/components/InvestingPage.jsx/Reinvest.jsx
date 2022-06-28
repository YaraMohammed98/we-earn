import React from "react";
import Card from "../Card";

const Reinvest = () => {
    return (
        <div className="profit-bg d-flex flex-column justify-content-center align-items-center py-5 profile-container">
        <div className="profit-card col-lg-8  bg-white profile-up">
            <Card title="REINVEST CALCULATOR" />
            <div className="card-body px-5 text-start">
                <div className="container">
                    <div className="row  justify-content-center offset-1 w-75">
                            <div className="col-12">
                                <label htmlFor="" className="py-2" >Initial investment in BNB</label>
                            </div>
                            <div className="col-12 d-flex align-items-center w-100">
                                <input className="form-control w-50 " type="number" placeholder="1,000000000000"/>
                                <span  style={{fontSize:"11px" , height:"40px"}} className="bg-darkgrey text-white p-2 reinvest-span fw-bold flex-fill">Your revenue: Daily 1.5%: 0.015BNB </span>
                            </div>
                            <div className="col-12 mt-3">
                                <label htmlFor="" className="py-2">Total days of reinvestment</label>
                            </div>
                            <div className="col-12 d-flex align-items-center w-100">
                                <input className="form-control w-25" type="number" placeholder="73 days" />
                                <span style={{fontSize:"11px" , height:"40px"}} className="bg-darkgrey text-white p-2 reinvest-span fw-bold flex-fill">Deposit after 73 Days: 3.129 BNB | Daily 1.5%: 0.015 BNB </span>
                            </div>
                            <div className="col-12 d-flex justify-content-center pt-5 pb-3">
                            <button className="btn-main d-flex px-3 py-1 mx-2 btn-lg btn-hover "> DEPOSIT</button>
                            </div>

                    </div>
                </div>
                </div>
        </div>
        </div>
    );
};

export default Reinvest;
