import React from "react";
import { Logo } from "./logo";
import { Links } from "./links";
import "./navbar.css";
import { Button } from "./button";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Links />
      <Button/>
    </nav>
  );
};
