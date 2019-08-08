import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    
      <div id="cssmenu">
      <ul>
            <li className="active"><a href="/"><span>The Beer Store</span></a></li>
            <li className="has-sub"><a href="/brands"><span>Brand</span></a>
                <ul>
                    <li><a href="/brands"><span>All Brand</span></a></li>
                    <li><a href="/brands/new"><span>Create New</span></a></li>
                </ul>
            </li>
            <li className="has-sub"><a href="/beers"><span>Beer</span></a>
                <ul>
                    <li><a href="/beers"><span>All Beer</span></a></li>
                    <li className="last"><a href="/beers/new"><span>Enter New</span></a></li>
                </ul>
            </li>
            <li className="last"><a href="#"><span>Contact</span></a></li>
        </ul>
        </div>
   
    
  	);
}

export default MainNav;