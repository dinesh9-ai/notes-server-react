import React from "react";
import Contributor from "../Contributor/Contributor";
import Subject from "./Subject";


export default function Page(props){
    var f=1;
    if(props.array.length===0){
        return <Contributor item={0} />
    }
    else{
    return (
        <div className="q ">
            {props.array.map((item,index)=>{
                if(index+1<props.array.length && f===1)
                {   f=2;
                    
                    return <div className="row">
                <div className="col-sm-12 col-md-6">
                <Subject name={props.array[index]} unit={props.unit} dict={props.dict} link={props.link} /> 
                </div>
                <div className="col-sm-12 col-md-6">
                <Subject name={props.array[index+1]} unit={props.unit} dict={props.dict} link={props.link} /> 
                </div>;
            </div>
                }else if(f===0){
                    return <div className="col-sm-6 col-md-6">
                <Subject name={props.array[index]} unit={props.unit} dict={props.dict} link={props.link} /> 
                </div>;
                }else{
                    if(index+1<=props.array.length-1){f=1;}else{f=0;}
                    if(index===props.array.length-2){
                        return <div className="col-sm-6 col-md-6">
                <Subject name={props.array[index]} unit={props.unit} dict={props.dict} link={props.link} /> 
                </div>;
                    }
                }
            })}
        </div>
    );
        }
}