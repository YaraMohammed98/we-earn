import React from "react";
import reqSvgs from "../../module";
import Card from "../Card";

const Profile = () => {
    return (
        <div className="profit-bg d-flex flex-column justify-content-center align-items-center py-5 profile-container" >
        <div className="profit-card col-lg-8  bg-white profile-up">
            <Card title="YOUR PROFILE" />
            <div className="card-body px-5 text-start">
            <div className="container ">
                <div className="row text-center">
                    <div className="col-lg-4">
                            <p>you received: <span className="main-color">0 BNB</span></p>
                    </div>
                    <div className="col-lg-4">
                            <p>tour reinvest count: <span className="main-color">0 BNB</span></p>
                    </div>
                    <div className="col-lg-4">
                            <p>REAL DEPOSITS: <span className="main-color">0.01 BNB</span></p>
                    </div>
                    <hr />
                    <div className="col-lg-4 d-flex flex-column">
                        <span>My Deposits</span>
                            <p> <span className="main-color">0.01 BNB </span>($2.24)</p>
                    </div>
                    <div className="col-lg-4 d-flex flex-column">
                        <span>Max Payout Left</span>
                            <p> <span className="main-color">0.0365 BNB </span>($8.18)</p>
                    </div>
                    <div className="col-lg-4 d-flex flex-column">
                        <span>Unwithdrawn</span>
                            <p> <span className="main-color">0.000000125 BNB </span>($0.00)</p>
                    </div>
                    <div className="col-lg-4 d-flex flex-column">
                        <span>Withdrawn</span>
                            <p> <span className="main-color">0 BNB  </span>($0.00)</p>
                    </div>
                    <div className="col-lg-4 d-flex flex-column">
                        <span>total roi</span>
                            <p><span className="main-color">0 % </span></p> 
                    </div>
                    <div className="col-lg-4 d-flex flex-column">
                        <span>airdrops</span>
                            <p> <span className="main-color">0 BNB </span>($0.00)</p>
                    </div>
                    <div className="col-lg-4 d-flex flex-column">
                        <span>Ulast action</span>
                            <p> <span className="main-color">2h ago </span></p>
                    </div>
                    <div className="col-lg-4 d-flex  flex-column align-items-center justify-content-center">
                    <button className="btn-main d-flex px-3 py-1  btn-hover">
                    <img src={reqSvgs["refund-blue.svg"]}  style={{width:"40px"}} />
                    <span className="d-flex flex-column mx-2">
                        <span className="fs-5"> REINVEST</span> 
                        <span style={{fontSize:"10px"}}>-5% BONUS</span>
                    </span>
                    </button>
                    <p style={{fontSize:"14px"}}>18h 24m until your next action</p>
                    </div>
                    <div className="col-lg-4 d-flex  flex-column align-items-center justify-content-start">
                    <button className="bg-darkgrey d-flex px-3 py-2  btn-secondary">
                    <img src={reqSvgs["insert-money-euro-black.svg"]}  style={{width:"40px"}} className="" />
                    <span className="fs-5"> WITHRAW</span> 
                    </button>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                        <a href="#" className="profile-btn"><i className="fa-solid fa-copy"></i><span className="mx-2">COPY REFERRAL LINK</span></a>
                        <button className={`nav-link text-dark btn`} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-gear mx-2"></i><span className="mx-2">SETTINGS</span></button>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className="profile-mini-container col-md-8 mt-1 ">
            <div className="profit-card  shadow bg-white">
                <div className="row text-center p-3 " >
                    <div className="col-md-4">
                            <p>MY 5x status: <span className="main-color">1x</span></p>
                    </div>
                    <div className="col-md-4">
                            <p>MAx deposits: <span className="main-color">0.05 BNB</span></p>
                    </div>
                    <div className="col-md-4">
                            <p>REAL DEPOSITS: <span className="main-color">0.01 BNB</span></p>
                    </div>
                </div>
            </div>
            </div>
            <p className="col-8 mt-1 text-center" style={{fontSize:"15px"}}>The total amount in “MY DEPOSITS” cannot be more than 5 times the amount of real deposits of BNB. If you hit the 5x limit, you must deposit
                    more BNB if you wish to continue reinvesting or receiving airdrops, referral benefits, etc.</p>



        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">SETTINGS</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p>Your address</p>
                <p className="main-color fw-bold" style={{fontSize : "15px"}}>0xef97c6ba089770b230e89009787fe3415e7137d7</p>
                <p style={{fontSize : "15px"}}>Your Referral link </p>
                <a className="text-decoration-none main-color fw-bold" style={{fontSize : "12px"}}>https://www.weearn.io/v2/?ref=0xef97c6ba089770b230e89009787fe3415e7137d7</a>
                <p style={{fontSize : "15px"}}>Set a nickname to hide your public address from referral links</p>
                <div className="col-12 d-flex align-items-center w-100">
                    <input className="form-control w-75" type="number" placeholder="Type your Nickname" />
                    <span style={{fontSize:"11px" , height:"40px"}} className="main-bg text-white p-2 reinvest-span fw-bold flex-fill">SAVE CHANGES</span>
                </div>
            <p className="fw-bold m-2 " style={{color:"#E73B9B" , fontSize:"13px"}}>setting new Nickname is currently disabled.we are working hard to improve this features</p>
            </div>
            </div>
        </div>
        </div>

        </div>
    );
};

export default Profile;
