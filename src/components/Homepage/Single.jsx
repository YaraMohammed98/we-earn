import reqSvgs from "../../module";
import React from 'react'

const Single = ({img,title,content}) => {
  return (
    <div className="container single-border p-5 my-4 w-75">
        <div className="row">
            <div className="col-md-3"><img src={reqSvgs[`${img}`]}  className="my-4 w-75" /></div>
            <div className="col-md-8 text-white text-start">
                <h2 className="fs-1" >{title}</h2>
                <hr className="w-50 main-color "/>
                <p>{content}</p>
            </div>
        </div>

        

    </div>
  )
}

export default Single