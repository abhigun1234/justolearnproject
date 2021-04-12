import React, { Component } from 'react';

class FormsDemo extends Component {
    constructor(props){
        super(props)
        this.state={
            itemnmae:'',
            price:'',
            description:''
        }
    }
    handleUsernameChange=(event)=>{
    this.setState({itemnmae:event.target.value})
    }
    handlePriceChange=(event)=>{
        this.setState({price:event.target.value})
        }
    handleDescriptionChange=(event)=>{
        this.setState({description:event.target.value})
        }
        handleSubmit=(event)=>{
           alert(this.state.itemnmae)
            }
    render() {
        return (
            <div>
                <h1>Enter Menu Details</h1>
            <form onSubmit={this.handleSubmit}> 
                <div>

                    <label>
                        name1
                    </label>
                    {/* <input type='text'  /> */}
                    <input value={this.state.username} className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" onChange={this.handleUsernameChange}/>
                    <label>
                        price
                    </label>
                    {/* <input type='text' value={this.state.price} onChange={this.handlePriceChange}/> */}
                    <input value={this.state.price} className="form-control" id="exampleFormControlInput1" placeholder="Enter Price" onChange={this.handlePriceChange}/>
   
                    <label>
                        description
                    </label>
                    {/* <input type='text' value={this.state.description} onChange={this.handleDescriptionChange}/> */}
                    <input value={this.state.description} className="form-control" id="exampleFormControlInput1" placeholder="Enter Description" onChange={this.handleDescriptionChange}/>
                   <br/>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
              
            </form>
            </div>
            
  
        );
    }
}

export default FormsDemo;   