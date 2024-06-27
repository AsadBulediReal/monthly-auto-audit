import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <>
        <div className="logo-container">
          <Link to={"/"}>
            <img src="logo.png" alt="logo" />

            <div>
              <p>Finance Wing {"(CMD Section)"}</p>
              <p>University of Sindh, Jamshoro</p>
            </div>
          </Link>
        </div>
        <ul>
          <li>
            <Link to={"/"}>Get Report</Link>
          </li>
          <li>
            <Link to={"/upload"}>Upload</Link>
          </li>
        </ul>
      </>
    </nav>
  );
};

export default Navbar;
