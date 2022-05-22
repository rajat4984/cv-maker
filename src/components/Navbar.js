import React from "react";

function Navbar({ brand }) {
  return (
    <nav className="black text-light ">
      <div className="d-flex justify-content-between px-3 pt-3">
        <div className="h4">
          <p>{brand}</p>
        </div>
        <div className="h4">
          <a className="p-2 rounded" href="#">
            Preview
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
