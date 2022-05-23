import React from "react";
import  ReactDOM  from "react-dom";
import Card from './Card.jsx';
import"./index.css";
import Sdata from "./Sdata";

const ncard =(val)=>{
  return(
    <Card 
    key={val.id}
    imgsrc={val.imgscr} 
      title={val.title}
    sname= {val.sname}
    link={val.links}
    />
  );
}

ReactDOM.render (<>
<h1 className="heading_style">List of top 5 netflix series 2022</h1>
    {Sdata.map(ncard)};
    </>,
    document.getElementById('root'));

