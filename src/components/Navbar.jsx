import reqSvgs from "../module";

function Navbar() {
  return (

    <nav className="navbar  navbar-expand-lg  py-3  header-bg">
    <div className="container">
      <img src={reqSvgs["logo.svg"]} style={{width:"100px"}} className="mx-5 my-4" />

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
            <a className="btn-invest mx-2 px-2 py-1 " aria-current="page" href="#">INVEST NOW</a>
          </li>


        </ul>
        
      </div>
  </div>
</nav>

    
  )
  }

export default Navbar