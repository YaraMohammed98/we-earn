import React from 'react'
import Card from '../Card'

const AirdropStatistics = () => {
    return (
        <div className="profit-bg d-flex flex-column justify-content-center align-items-center py-5 profile-container">
        <div className="profit-card col-lg-8  bg-white profile-up">
            <Card title="AIRDROP STATISTICS" />
            <div className="card-body px-5 text-start">
            <div className="container">
                <div className="row   w-75 mx-auto text-uppercase fw-bold">
                    <div className="col-md-6">
                        <div className="col-lg-4 d-flex flex-column w-100 text-center">
                            <span>last airdrop sent</span>
                                <p className="text-center"> <span className="main-color">Never </span></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-lg-4 d-flex flex-column w-100 text-center">
                            <span>total airdrops claimed</span>
                                <p> <span className="main-color">0 BNB</span></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-lg-4 d-flex flex-column w-100 text-center text-center">
                            <span>total airdrop sent</span>
                                <p> <span className="main-color">0 BNB</span></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-lg-4 d-flex flex-column w-100 text-center">
                            <span>contracts total airdrops</span>
                                <p> <span className="main-color">0 BNB</span></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-lg-4 d-flex flex-column w-100 text-center">
                            <span>lairdrops available</span>
                                <p> <span className="main-color">0 BNB</span></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default AirdropStatistics