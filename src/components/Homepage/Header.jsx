import './Header.css'
import video from "../../assets/video/background.mp4"
import Navbar from './../Navbar';

function Header() {
  return(
    
    <div className='video-container'>
      <Navbar/>
        <video src={video} autoPlay loop muted />
        <div className="content my-5">
            <h1 className='header-txt my-5'>Start investing right now!</h1>
            <p className='col-7'>In June last year, TVL sat at about <span className='main-color'>$1 billion worth</span>  of cryptocurrency deposited in DeFi applications. Today, the TVL
                 figure exceeds the <span className='main-color'>$60 billion mark</span>. We specialize in capitalizing on this incredible growth.    
            Join us and benefit from our profitable investments.</p>
            <button className="btn-main fs-4 my-4 py-2 px-5 btn-lg">GET STARTED</button>
        </div>
    </div>
  );
}

export default Header;
