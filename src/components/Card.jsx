import reqSvgs from "../module";

const Card=({title}) => {
    return(
      <div className="card-header p-4">
        <h2 className="text-white text-center">{title}</h2>
      </div>
      
  
    );
  }
  
export default Card