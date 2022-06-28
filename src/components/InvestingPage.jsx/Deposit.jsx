import React from "react";
import Card from "../Card";

const Deposit = () => {
  return (
    <div className="profit-bg d-flex flex-column justify-content-center align-items-center py-5 profile-container" >
    <div className="profit-card col-lg-8  bg-white profile-up">
      <Card title="MAKE A DEPOSIT" />
      <div className="card-body px-5 text-start">
        <div className="container ">
          <div className="row">
            <div className="col-6">
              <p>Your Sponsor</p>
              <input type="text" className="form-control" placeholder="Type your Sponsor" />
            </div>
            <div className="col-6">
              <p>ِAmount in BNB</p>
              <input type="number" className="form-control" placeholder="0.1 BNB"/>
            </div>
            <div className="col-12 d-flex justify-content-center my-3">
            <button className="btn-main d-flex px-3 py-1 mx-2 btn-lg btn-hover"> DEPOSIT</button>
            <button className="bg-darkgrey d-flex px-3 py-2 btn-lg mx-2 btn-secondary">BUY WITH CREDIT CARD </button>
            </div>
            <div className="col-12 d-flex justify-content-between my-3">
            <p style={{fontSize:"15px"}}>NFORMATION: A new Deposit automatically reinvests the current unwithdrawn income</p>
            <p style={{fontSize:"15px"}}>Your Balance: 1.41 BNB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Deposit;
