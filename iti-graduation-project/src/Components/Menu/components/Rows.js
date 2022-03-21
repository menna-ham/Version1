import React from "react"
import IncDecCounter from "../pages/icrement/inc"
import { useState } from "react";
import '../../Menu/Menu.css'




function Rows (props){

    // constructor(props){
    //     super()
    // }
    const [input, setInput] = useState(); 
    // const myinput = document.getElementById('myinput').value;

    //  getInputValue = (event)=>{
    //     const userValue = event.target.value;
    //     console.log(userValue);
    // };

//    render (){
    return(
        <>
            <tr>
               
                <td className="col-3">
                    <div>
                    <img className="myimg" src={props.img}/>   
                    </div>
                </td>  
                <td >{props.name}</td>
                <td>{props.price}</td>
                <td className="count">
                <input type="number" id='myinput' defaultValue={1} onChange={event => setInput(event.target.value)} />
                </td>
                <td>{props.total *input }</td>
                <td >
                    <button type="button"  className="add btn btn-danger" onClick={()=>{props.remove(props.id)}} >
                        <i className="far fa-star"></i> Remove From Cart  </button>
                </td>

            </tr>
        </>
    )
//    }

}
export default Rows