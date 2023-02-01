  

  export default function Footer(props){

    return(
    <div className="row fixed-bottom">
     
      <button className="  btn btn-danger col-2 mt-3" onClick={()=>{
       props.ResetQuantity();
      }}>Reset</button>
      <div className="col-8 bg-dark text-white mt-3 text-center">
      <h2> Rs. {props.totalAmount}</h2>
      </div>
      <button className=" btn btn-success col-2 mt-3">Pay Now</button>
    </div>
   
    );
  }