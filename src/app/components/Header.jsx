"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { BrowserRouter as Router, Route } from "react-router-dom";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // add the code here

  const onSearch = (e) => {
    if (e.key === "Enter" && e.target.value) {
      router.push(`/search?term=${e.target.value}`);
    }
  };

  return (
    <div className="">
      <div className="container">
        <div className="container-left">
          <div className="search">
            <a href="http://localhost:3000/">
              <img src="/logo.png" className="logo" />
            </a>
            <i className="fa-solid fa-magnifying-glass" id="glass-icon"></i>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={onSearch}
              value={searchTerm}
              type="search-box"
              name=""
              id=""
              className="search-box"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="container-right">
          <div className="add-product">
            <i className="fas fa-plus"></i>
            <button className="add-item" id="top-button">
              Sell
            </button>
          </div>
          <div className="language">
            <i className="fas fa-globe"></i>
            <select action="" className="currency-change" id="top-button">
              <option value="">$ - USD</option>
              <option value="">₾ - GEL</option>
            </select>
          </div>
          <div className="log-in">
            <Link href={`/login`} className="logInButton">
              Log In
            </Link>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="nav-left">
          <button className="nav-buttons">clearance</button>
          <button className="nav-buttons">VIN check</button>
          <button className="nav-buttons">Dealers </button>
          <button className="nav-buttons">Car Showrooms</button>
          <button className="nav-buttons">Auctions</button>
          <button className="nav-buttons">Auto Parts</button>
          <button className="nav-buttons">Catalog</button>
          <button className="nav-buttons">Blog</button>
        </div>
        <div className="nav-right">
          <button className="nav-buttons">Help</button>
          <button className="nav-buttons">Contact</button>
        </div>
      </div>
    </div>
  );
};
