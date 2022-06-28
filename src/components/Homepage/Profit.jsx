import Card from "../Card";

function Profit() {
  return(
    <div className="profit-bg d-flex flex-column justify-content-center align-items-center profit pb-5">
              <p>Calculate your daily passive income considering a reinvestment period</p>

     <div className="profit-card col-lg-8 shadow bg-white">


            <Card title="PROFIT CALCULATOR"/>
            <div className="card-body px-5">
                <div className="container ">
                    <div className="row mb-5  ">
                        <div className="col-lg-4 d-flex flex-column align-items-start justify-content-center my-2">
                            <p>Amount Invested</p>
                            <input type="number" className="form-control w-100 fs-3  px-2" value={10000000000} />
                        </div>
                        <div className="col-lg-4 d-flex flex-column  my-2 ">
                            <p>Compounding Amount</p>
                            <div className="d-flex align-items-start justify-content-around">
                                <span className="p-3 border border-3 border-info" >No</span>
                                <span className="p-3 border border-3" >50%</span>
                                <span className="p-3 border border-3">100%</span>

                            </div>

                        </div>
                        <div className="col-lg-4 d-flex flex-column align-items-start justify-content-center  my-2">
                            <p>Duration</p>
                            <input type="number" className="form-control w-100 fs-3  px-2" value={30} />

                        </div>

                    </div>
                    <h2>YOUR RESULTS</h2>
                    <div className="row mb-5 flex-wrap">
                        <div className="col-lg-6 d-flex mb-4 justify-content-center  align-items-center">
                            <span className="bg-lightgrey p-3 fs-5">Starting Daily Profit</span>
                            <span className="bg-darkgrey text-white p-3 fs-5">0.030000000</span>

                        </div>
                        <div className="col-lg-6 d-flex mb-4 justify-content-center  align-items-center ">
                            <span className="bg-lightgrey p-3 fs-5">Total Return</span>
                            <span className="bg-darkgrey text-white p-3 fs-5">1.90000000</span>

                        </div>

                    </div>

                    <button className="btn-main py-2 px-5 btn-lg fs-4 btn-hover">INVEST NOW</button>
                    <p className="py-3 fw-bold profit-txt"> INFORMATION: The values shown in the Profit Calculator are for informational purposes only.
The actual profit rates may vary</p>
                </div>

            </div>
            </div>

        </div>
    

  );
}

export default Profit