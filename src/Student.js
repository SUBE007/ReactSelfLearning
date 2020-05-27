import React from "react";
 
const Student=props=>{
      return(
            <div>
              <h1>Hello:{props.name}</h1>
              <h2> Your Marks:{props.marks}</h2>
            </div>
      )
}
export default Student;