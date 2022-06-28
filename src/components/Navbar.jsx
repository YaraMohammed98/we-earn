import reqSvgs from "../module";
import { Link } from 'react-router-dom';
function Navbar({flag}) {
  return (

    <nav className={`navbar  navbar-expand-lg  py-3 ${flag ? "header-bg":""}`}>
    <div className="container">
      <img src={reqSvgs["logo.svg"]} style={{width:"100px"}} className="mx-5 my-4" />
      <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid  text-white fa-bars-staggered"></i>
      </button>

  

     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav offset-5">
          <li className="nav-item">
            <a className="nav-link active header-item text-white " aria-current="page" href="#">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active header-item text-white" aria-current="page" href="#">HOW IT WORKS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active header-item text-white " aria-current="page" href="#">HOW TO START</a>
          </li>

          <li className="nav-item my-2">
            {flag? 
            <Link to={"/"} className="btn-invest px-2 py-1 " aria-current="page" href="#">d5396886...k21</Link>
            :
            <Link to={"/invest"} className="btn-invest  px-2 py-1 " aria-current="page" href="#">INVEST NOW</Link>
          }
          </li>


        </ul>
        
      </div>
  </div>
</nav>

    
  )
  }

export default Navbar