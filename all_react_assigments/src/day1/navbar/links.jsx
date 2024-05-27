import React from "react";

const links = ["Home","About","Services","Blog"];

export const Links = () =>{

    return (
        <ul className="nav-links">
            {links.map((link,index)=>(
                <li key={index}>{link}</li>
            ))}
        </ul>
    );

};