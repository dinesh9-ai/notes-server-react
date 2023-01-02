import React, { useState } from "react";
import {sidebarData} from './Navv';
import './format.css';
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import Card from "../Card/Card";




function Nav(){
  const [sidebar,setSidebar]=useState(false);
  // const [cont,setcont]=useState(false);
  // const [nf,setNf]=useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  // const showCont = () =>setcont(!cont);
  // const showNf = ()  => setNf(!nf);


  return (
    <>
    
      <IconContext.Provider value={{ color: "black" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
            
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              if(item.number===0){
                return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.Name}</span>
                  </Link>
                </li>
              );}
              else{
                
                return <Card key={index} name={item.Name} func={item.func} state={item.state} sems={item.sems}/>;
              }
              
             

            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );

}


export default Nav;