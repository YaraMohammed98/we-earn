import reqSvgs from "../module";
import React from 'react'

const Footer = () => {
  return (
    <div className='dark-color d-flex justify-content-center'>
              <img src={reqSvgs["logo.svg"]} style={{width:"100px"}} className="mx-5 my-4" />

    </div>
  )
}

export default Footer