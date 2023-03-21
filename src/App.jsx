import React from "react";
import Tooltip from "./Tooltip";
import TooltipText from "./TooltipText";

export default function App() {
  
  return (
    <div className="App">
     
     <p><TooltipText tooltip={"Soy un tooltip"}>Lorem ipsum</ TooltipText> dolor sit amet consectetur, adipisicing elit. Eveniet, eos aperiam.</p>
      <p>Sed officiis autem inventore nemo consequatur repellat vitae doloremque iusto deleniti</p>
      <p> unde itaque, velit, <TooltipText tooltip={"Soy un tooltip"}>amet culpa.</TooltipText> Qui, sapiente commodi.</p>
   
    </div>
  )
}


// <p><TooltipText tooltip={"texto generado"}>

