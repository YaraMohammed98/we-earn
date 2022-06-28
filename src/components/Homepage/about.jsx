import React from "react";
import Single from "./Single";

const About = () => {
  return (
    <div className="dark-color d-flex flex-column align-items-center justify-content-center single-container">
     <div>
      <Single
        img="single1.svg"
        title="WHAT"
        content="WE EARN is a high reward contract on Binance Smart Chain that is paying out 1.5% daily
return on investment up to 365%. Investors can compound and extend their earnings
through deposits and reinvestments rewards as well as through team based referrals.
The principal deposit cannot be withdrawn, only the returns and referral rewards are
paid out. Using Smart Contracts, Tokens and Cryptocurrency in general is always a risk
DYOR before investing."
      ></Single>
</div>
<div>
<Single
        img="single1.svg"
        title="HOW"
        content="WE EARN uses this technology to help participants reaching financial independence.
        When a participant deposits BNB into the system, that contribution supports the
        community. This activates the contract code which supports that contributor in turn.
        "
      ></Single>
</div>

<div>

<Single
        img="single1.svg"
        title="WHY"
        content="This is a 100% decentralized and community-based project, meaning that there are
        no additional sources of funding within the project; it is supported by all members
        for the benefit of the financial advancement of the community as a whole.
        In short, you support others, and others support you back.
        WE EARN can be viewed as a decentralized third party which insures fairness,
        transparency, and financial benefit for all according to a carefully constructed
        algorithm. It is the most reasonable, safest, and best cutting-edge financial support
        model currently available"
      ></Single>
    </div>
    </div>
  );
};

export default About;
