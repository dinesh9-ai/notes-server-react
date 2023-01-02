import React, { useState } from "react";
import './card.css';
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";



function Card(props){
  const [hs,sHs]=useState(false);
  const [cs,sCs]=useState(false);
  const [es,sEs]=useState(false);
  const [ms,sMs]=useState(false);
  const [cis,sCis]=useState(false);

  const showH = () => {sHs(!hs);}
  const showC = () => {sCs(!cs);}
  const showE = () => {sEs(!es);}
  const showM = () => {sMs(!ms);}
  const showCi = () => {sCis(!cis);}

  const a=eval(props.func);
  const b=eval(props.state);
  var name=props.name;
  var Lname=name.toLowerCase();


  function q(e){
    e.preventDefault();
    a();
  }

    return(
    <>
      <div>
      <li key={props.index} className="nav-text" onClick={q}>
      <a href="#"> 
      <span>
      {name}
      </span>
      <AiIcons.AiFillCaretDown />
      </a>
      </li>
      <div className={b ? "dropdown active" : "dropdown"}>
            <div className="dropdown-items">
              {props.sems.map((item,index)=>{
                var a= item ? item:'';
                
                return (<><a key={index} className="dropdown-list" href={"/"+Lname+'-'+a.replace(' ','')}>{item}</a> <br /></>);
              })
              }
            </div>
      </div>
      </div>
    </>
    );
}


export default Card;