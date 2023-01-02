import React from "react";
import './cont.css';
import bg from '../images/contp.jpg';
import nf from '../images/404.jpg'


export default function Contributor(props){    
    if(props.item===1){
        return <div  className="bgg"> <img src={bg} alt="imgg" className="imgg"></img> </div>;
    
    }else{
        return <div  className="bgg"> <img src={nf} alt="imgg" className="imgg"></img> </div>;
    }

}