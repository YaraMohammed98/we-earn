import React from "react";
import Card from "./../Card";

const Start = () => {
  return (
    <div className="profit-bg d-flex flex-column justify-content-center align-items-center py-5">
      <div className="profit-card col-lg-8 shadow bg-white">
        <Card title="HOW TO START" />
        <div className="card-body px-5 text-start">
          <div className="container ">
            <p>
              You can participate in the WE EARN project by depositing a minimum
              of 0.1 BNB to the Fund, you are now eligible to receive 365% back.
            </p>
            <br />
            <p>
              The 365% is returned in 4 ways (one passive and three via direct
              referral, match bonus and top sponsor pool) and when the 365% is
              accumulated through any of the 4 ways, you can reinvest or make
              new deposits from your earnings to increase your daily 1.5% rate
              per day and your 365% total income.
            </p>
            <ol>
              <li className="my-4"> 1.5% Daily return on your Deposit,100% Passive.</li>
              <li className="my-4">
                5% Direct Referral Commission for Sharing and Growing the
                Community Fund.
              </li>
              <li className="my-4">
                Matching Commission on Daily Income for your referrals and their
                downline (to 15 levels) every time they make a WITHDRAWAL. Level
                1 - 5 = 10% commission per downline withdrawal. Level 6 to 10 =
                7% commission per downline withdrawal. Level 11 to 15 = 5%
                commission per downline withdrawal. * Your direct partners are
                one level below you. If one of them adds a partner, a level is
                added below them. This can continue downward for 15 levels.
              </li>
              <li className="my-4">
                Daily Top Referrer Pool 3%, of ALL Deposits set aside in pool,
                every 24 hour 7% of the pool is shared among top 4 sponsors in
                volume. Pool Distribution: Top 1 - 2.5%, Top 2 - 2.0%, Top 3 -
                1.5%, Top 4 - 1.0% .
              </li>
              <li className="my-4">
                10% fee for investing and withdrawing. Additional Anti Whale
                Taxes for withdrawing see 'Anti Whale Withdrawal Taxes'. Tax for
                investing is paid by the contract balance. Your Deposit stays
                1:1. Tax for withdrawing is paid from your withdrawable amount.
                You receive 90% of the withdrawable amount.
              </li>
              <li className="my-4">
                Minimum deposit to join is 0.1 BNB and a maximum of 54 BNB total
                deposit per wallet is also implemented as an anti-whale measure.
              </li>
              <li className="my-4">
                Users can withdraw their payout as often as every day. It is
                cumulative; once 24 hours have passed, you will receive a total
                of 1.5% in rewards.
              </li>
              <li className="my-4">
                Users are given the option to Re-invest/Compound so they do not
                have to withdraw their daily earnings and deposit them again in
                separate transactions, incurring unnecessary gas fees. In
                addition, at the time of reinvesting a 5% bonus is added to the
                amount of unwithdrawn income being compounded as an incentive to
                continue building the value of the project.
              </li>
              <li className="my-4">
                Airdrops: Users can send any amount of BNB from their wallet to
                users in their team or to any individual member of MDT.
              </li>
              <li className="my-4">
                Team: The first time someone uses an investor's referral link, a
                new team will be created with the initial investor as the team
                owner and their referral as a team member. From that point, any
                direct referrals by this initial investor become additional team
                members.. Upon creation of the team, the team name can be
                customized. There is no maximum number of members in a team.
              </li>
              <li className="my-4">
                Nicknames: By going to Settings, a user can assign themselves a
                nickname which will then be used in place of their wallet
                address in the referral link. This measure preserves privacy for
                investors who do not feel comfortable revealing their addresses.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
