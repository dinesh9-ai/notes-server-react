import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LeftNav.css';
import { SidebarData } from "./hover";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";



export default function LeftNav(){
    const [sidebar,setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);
    



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
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
  
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  CSE
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a href="#">2-1</a>
                  <a href="#">2-2</a>
                  <a href="#">3-1</a>
                  <a href="#">3-2</a>
                </div>
              </div>
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }

