import React from "react";
import {Component} from 'react';
class AddItem extends Component {
    constructor(props){
        super(props);
        this.state={
            productName : "",
            productPrice : 0,
        }
    }
    render() { 
        return (
        <form className="row mb-5" onSubmit={(e)=>{
            e.preventDefault();
            this.props.addItem(this.state.productName,Number(this.state.productPrice))
        }}>
            <div className="mb-3 col-4">
              <label htmlFor="inputName" class="form-label">Name</label>
              <input type="text" className="form-control" id="inputName" aria-describedby="emailnameHelp" onChange={(e)=>{
                    this.setState({productName:e.currentTarget.value});
              }}value={this.state.productName} />
              {/* <div id="name" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="inputPrice" className="form-label">Price</label>
              <input type="number" className="form-control" id="inputPrice" onChange={(e)=>{
                this.setState({productPrice: e.currentTarget.value});
              }}  value={this.state.productPrice}/>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="inputPrice" className="form-label">Password</label>
              <input type="number" className="form-control" id="inputPrice"/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-warning  col-4 mb-3 mt-3 rounded-end "><span>ADD</span></button>
          </form>);
    }
}
 
export default AddItem;