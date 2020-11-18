import React from "react";

export default function index() {
  return (
    <div data-test="navbar-component">
      <div className="navbar">
        <div data-test="logo" className="logo">
          <h1>The Logo</h1>
        </div>

        <ul data-test="nav-items" className="nav-menu">
          <li>
            <span href="#">Home</span>
          </li>
          <li>
            <span href="#">Home</span>
          </li>
          <li>
            <span href="#">Home</span>
          </li>
          <li>
            <span href="#">Home</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
