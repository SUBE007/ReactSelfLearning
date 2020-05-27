import React, { Component } from "react";
import Pt from "prop-types";
 
  
class Student extends Component{
  render(){
        return (
        <div>
            <h1>Hellow:{this.props.name}</h1>
        <   h2>Your Marks:{this.props.marks}</h2>
        </div>
        
        );
  }
}

Student.propTypes={
      name: Pt.string.isRequired
};

export default Student;