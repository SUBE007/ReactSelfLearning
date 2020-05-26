 import React from "react";
 import Student from "./Student";
 //these component Student are independent
 const App =()=>{
   return(
     <div>
       <Student name="Sube" />
       <Student name="Dube" />
       <Student name="Lube" />
       <Student name="Mube" />
      </div>
   );
 };

 export default App;
