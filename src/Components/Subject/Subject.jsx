import React from "react";
import './subject.css';

export default function Subject(props){
    var f=1;
    // console.log(props.dict);
    // console.log(props.link);
    return(
        <div className="card">
        <div className="card-header">
            {props.name}
        </div>
        <div className="card-body">
        { props.dict[props.name].map((item,i)=>{
                if(i+1<props.dict[props.name].length && f===1){
                    f=2;
                    
                    return <div className="row">
                        <div className="col-lg-6 space"> <a href={props.link[props.name][i]}> <button className="btn btn-primary">{props.dict[props.name][i]}</button></a></div>
                        <div className="col-lg-6 space"> <a href={props.link[props.name][i]}> <button className="btn btn-primary">{props.dict[props.name][i+1]}</button></a></div>
                    </div>;
                }else if(f===0){
                    f=2;
                    return <div className="row">
                    <div className="col-lg-6 space"> <a href={props.link[props.name][i]}> <button className="btn btn-primary">{props.dict[props.name][i]}</button></a></div>
                    </div>;
                }else{
                    if(i+1<=props.dict[props.name].length-1){f=1;}else{f=0;}
                        if(i===props.dict[props.name].length-1){
                            return <div className="row">
                    <div className="col-lg-6 space"> <a href={props.link[props.name][i]}> <button className="btn btn-primary">{props.dict[props.name][i]}</button></a></div>
                    </div>;  
                        }
                }
            })
        }
    </div>
    </div>);
}