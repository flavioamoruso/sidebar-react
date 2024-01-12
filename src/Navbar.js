import React from "react";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="nav">
      <h3>Hola chico</h3>
    </nav>
  );
};

export default Navbar;