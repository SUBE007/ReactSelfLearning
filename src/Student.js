import React, { Component } from "react";
 
// const Student=props=>{
//       return(
//             <div>
//               <h1>Hello:{props.name}</h1>
//               <h2> Your Marks:{props.marks}</h2>
//             </div>
//       )
// }


// class Student extends Component{
//       render(){
//             return (
//             <div>
//                 <h1>Hellow:</h1>
//             <   h2>Your Marks:</h2>
//             </div>
            
//             );
//       }
//     }

class Student extends Component{
  render(props){
        return (
        <div>
            <h1>Hellow:{this.props.name}</h1>
        <   h2>Your Marks:{this.props.marks}</h2>
        </div>
        
        );
  }
}

export default Student;