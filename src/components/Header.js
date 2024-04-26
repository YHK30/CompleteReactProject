import React from "react";

function Header({name, title}){
    return(
      <div className="text-center my-4" style={{background:"DodgerBlue"}}>
       <h1> Welcome to Let's Code</h1>
      </div>
    )
}

export default Header;

/*  <div style={{background:"yellow", padding: 20, width: 400}}>
            <h1>{title}</h1>
            <h1>{name}</h1>
            <p>This is Header component.</p>
        </div>
        */