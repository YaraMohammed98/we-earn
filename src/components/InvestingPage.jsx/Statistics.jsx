import React, { useState } from "react";
import Card from "../Card";

const Statistics = () => {
    const [isShow , setIsShow]=useState(false);
    return (
        <div className="profit-bg d-flex flex-column justify-content-center align-items-center py-5 profile-container">
        <div className="profit-card col-lg-8  bg-white profile-up">
            <Card title="YOUR STATISICS" />
            <div className="card-body px-5 text-start">
            <div className="container " >
                <div className="row text-uppercase fw-bold " style={{fontSize:"15px"}}>
                    <div className="col-md-6">
                        <div className="w-100">
                            <h4 className="bg-darkgrey text-white text-center p-2 ">
                            PERSONAL STATISTICS
                            </h4>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>NEXT INCOME (1.5%)</span>
                                    <p className="main-color">10/07/2022 11:30:00</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>estimated 1.5% daily earnings</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>accumulated income</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>direct referral income</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>matching bonus</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>top sponsor rewards</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>Your Address</span>
                                    <p className="main-color"style={{fontSize:"15px"}}>0x31484A76BB061BBAb1202D91f5BefC2F1878bA44</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>referred by</span>
                                    <p className="main-color">?</p>
                            </div>
                            <h4 className="bg-darkgrey text-white text-center p-2 ">
                                USER TOTALS
                            </h4>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>total amount of deposits</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>total amount of received bnb</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>direct bonus withdrawn</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>bonus reinvested (direct/match/pool)</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>match bonus withdrawn</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>pool bonus withdrawn</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>income reinvested</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>reinvested gross</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="w-100 ">
                            <h4 className="bg-darkgrey text-white text-center p-2 ">
                            SMART CONTRACT STATISTICS
                            </h4>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>total members</span>
                                    <p className="main-color">44.530</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>total bnb deposits all time</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>total withdrawn by members</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>total reinvested by members</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>top sponsor reward pool</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>next top sponsor pool reward</span>
                                    <p className="main-color">10/07/2022 11:30:00</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>maximum amount from top referrer</span>
                                    <p className="main-color">1.039847 BNB</p>
                            </div>
                            <h4 className="bg-darkgrey text-white text-center p-2 ">
                            ORGANIZTION
                            </h4>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>personal invited partners</span>
                                    <p className="main-color">149</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>total number of partners</span>
                                    <p className="main-color">19</p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>All downline’s investments</span>
                                    <p className="main-color">0 BNB</p>
                            </div>
                            <h4 className="bg-darkgrey text-white text-center p-2 ">
                            MY REFERRAL TEAM
                            </h4>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <span>team id <i className="fa-solid fa-rotate"></i></span>
                                    <p className="main-color">purpleVikings</p>
                            </div>
                            <h4 className="bg-darkgrey text-white text-center p-2 ">
                            my upline team
                            </h4>

                            <div className=" d-flex  w-100 justify-content-between" >
                                <p style={{fontSize:"17px"}}>TEAM ID: <span className="main-color">1760</span><span onClick={()=>setIsShow(!isShow)}> <i className="fa-solid fa-rotate" ></i> </span>  </p>
                                <p className="w-50 d-flex justify-content-end"style={{fontSize:"17px"}}>DEPOSITS 
                                <input type="checkbox" id="toggle2" checked={isShow} />
                                <label htmlFor="toggle2" className="toggle-label me-1" onClick={()=>setIsShow(!isShow)} ></label>
                                </p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <p className="main-color"style={{fontSize:"15px"}}>0x918919422635291f02ee56108618753c4fa0901f</p>
                                    <p style={{fontSize:"17px"}}>
                                        (owner)
                                        {isShow &&
                                        <span className="">(0.01 BNB)</span>
                                        }

                                    </p>
                                    <p className="main-color"style={{fontSize:"15px"}}>0xae2d4617c862309a3d75a0ffb358c7a5009c673f</p>
                                    {isShow &&
                                        <span className="mb-2">(0.01 BNB)</span>
                                    }
                            </div>
                            <h4 className="bg-darkgrey text-white text-center p-2 ">
                            next top referrers
                            </h4>

                            <div className=" d-flex  w-100  justify-content-center ">
                                <p style={{fontSize:"17px"}}>next reward: <span className="main-color">14/06/2022, 01:22:53</span> <i className="fa-solid fa-rotate" ></i> </p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <p className="main-color"style={{fontSize:"15px"}}>0x918919422635291f02ee56108618753c4fa0901f</p>
                                    <p style={{fontSize:"15px"}}>zygardude has 28 BNB referral investments</p>
                                    <p className="main-color"style={{fontSize:"15px"}}>0xbe2fd46639eae548552aa79b1245d65718cb89d9</p>
                                    <p style={{fontSize:"15px"}}>tommybones has 17  BNB referral investments</p>
                                    <p className="main-color"style={{fontSize:"15px"}}>0x1aceeeca69b4618c7d09a32f0e1ef6da3565c4c1</p>
                                   <p style={{fontSize:"15px"}}>frankygoes has 10.22 BNB referral investments</p>
                            </div>
                            <h4 className="bg-darkgrey text-white text-center p-2 ">
                            LAST top referrers
                            </h4>

                            <div className=" d-flex  w-100  justify-content-center ">
                                <p style={{fontSize:"17px"}}>Last reward: <span className="main-color">14/06/2022, 01:22:53</span> <i className="fa-solid fa-rotate" ></i> </p>
                            </div>
                            <div className=" d-flex flex-column w-100 text-center">
                                    <p className="main-color"style={{fontSize:"15px"}}>0x918919422635291f02ee56108618753c4fa0901f</p>
                                    <p style={{fontSize:"15px"}}>zygardude won 0.625 BNB for 28 BNB downline</p>
                                    <p className="main-color"style={{fontSize:"15px"}}>0xbe2fd46639eae548552aa79b1245d65718cb89d9</p>
                                    <p style={{fontSize:"15px"}}>won 0.5 BNB for 17 BNB downline</p>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Statistics;
