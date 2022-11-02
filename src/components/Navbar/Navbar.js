import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdExitToApp } from "react-icons/md";

import "./Navbar.css";
const Navbar = () => {
  const [selectedVal, setSelectedVal] = useState("All");
  return (
    <nav className="d-flex justify-content-between border-md-block">
      <ul>
        <li className="d-none d-md-block selected">All Posts(32)</li>
        <li className="d-none d-md-block">Article</li>
        <li className="d-none d-md-block">Event</li>
        <li className="d-none d-md-block">Education</li>
        <li className="d-none d-md-block">Job</li>
        <li className="d-md-none mobile__li selected">{selectedVal}</li>
      </ul>
      <div className="navbar__filter d-block d-md-none">
        <label>Filter:</label>
        <select
          onChange={(e) => {
            setSelectedVal(e.target.value);
          }}
        >
          <option>All</option>
          <option>Article</option>
          <option>Event</option>
          <option>Education</option>
          <option>Job</option>
        </select>
      </div>
      <div className="navbar__right d-none d-md-flex">
        <div className="d-flex align-items-center navbar__write__post gap-2">
          <label>Write a Post</label>
          <BiChevronDown />
        </div>
        <button>
          <MdExitToApp /> Leave Group
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
