import React from 'react'

const Taxes = () => {
  return (
    <div className="profit-bg d-flex flex-column justify-content-center align-items-center py-5">
    <div className="profit-card col-lg-8 shadow bg-white">
      <div className="card-body px-5 text-start">
        <div className="container ">
            <h2>Anti Whale Withdrawal Taxes</h2>
            <p>Withdrawal taxes in the project are scaled based on the amount of the withdrawal compared to the total amount of the contract balance.</p>
            <br/>
            <p>See breakdown of fees below:</p>
            <ul>
                <li>0% tax additional if amount is &lt; 1% of contract balance</li>
                <li>5% tax additional if amount is &ge; 1% of contract balance</li>
                <li>10% tax additional if amount is &ge; 2% of contract balance</li>
                <li>15% tax additional if amount is &ge; 3% of contract balance</li>
                <li>20% tax additional if amount is &ge; 4% of contract balance</li>
                <li>25% tax additional if amount is &ge; 5% of contract balance</li>
                <li>30% tax additional if amount is &ge; 6% of contract balance</li>
                <li>35% tax additional if amount is &ge; 7% of contract balance</li>
                <li>40% tax additional if amount is &ge; 8% of contract balance</li>
                <li>45% tax additional if amount is &ge; 9% of contract balance</li>
                <li>50% tax additional if amount is &ge; 10% of contract balance</li>
            </ul>
         <div className='d-flex flex-column mb-4'>
          <span>* LEGEND:</span>
          <span>= - Equal to</span>
          <span>&lt; - Less Than or</span>
          <span>&gt; - Greater Than or </span>
          </div>
          <p>Withdrawal taxes are additional on 10% base tax for withdrawls.</p>
          </div>
          </div>
          </div>
</div>
            )
}

export default Taxes