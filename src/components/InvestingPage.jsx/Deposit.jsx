import React, {useState} from "react";
import Card from "../Card";
import reqSvgs from "../../module";

const Deposit = () => {
  const [active, setActive] = useState(false);
  
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
            <div className="parent">
            <button className={`bg-darkgrey d-flex px-3 py-2 btn-lg btn-secondary ${active ? 'active' : ''} `} onClick = {() => setActive(!active)}>BUY WITH CREDIT CARD </button>
            <div className="dropdown bg-white px-2 py-5" style={active ? {} : {opacity: 0}}>
              <div className="row">
                <div className="d-flex">
              <img src={reqSvgs["left.svg"]} style={{width:"100px"}} className=" mx-1 my-4" />
              <img src={reqSvgs["right.svg"]} style={{width:"100px"}} className="mx-4 my-4" />
              </div>
              <h2 className="text-center fw-bold " style={{fontSize:"20px"}}>Buying Crypto Was Never This Easy</h2>
              <p style={{fontSize:"18px"}} className="py-2">Buy with Debit or Credit Card</p>
              <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex  col-11 align-items-center">
                                <input className="form-control w-50 " type="number" placeholder="1.13138572"/>
                                <span  style={{fontSize:"11px" , height:"40px"}} className="bg-darkgrey text-white p-2  fw-bold flex-fill">BNB</span>
              </div>
              <div className="d-flex col-11 align-items-center mt-4">
                                <input className="form-control w-50 " type="number" placeholder="300"/>
                                <span  style={{fontSize:"11px" , height:"40px"}} className="bg-darkgrey text-white p-2  fw-bold flex-fill">USD</span>
              </div>
              </div>
              <p style={{fontSize:"18px"}} className="py-2">Binance Chain (BNB) address</p>
             <div> <input className="form-control" type="text" placeholder="Type your address"/></div>
              <p  style={{fontSize:"11px"}} className="py-2">or <span className="main-color">Connect your wallet to add the address</span>(BNB address must be yours and under your full control.)</p>
            <div className="text-center"><button className="continue py-2 fw-bold w-50">continue</button></div>  
            </div>
            </div>
            </div>
            </div>

            <div className="col-12 d-flex justify-content-between my-3">
            <p style={{fontSize:"15px"}}>INFORMATION: A new Deposit automatically reinvests the current unwithdrawn income</p>
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
