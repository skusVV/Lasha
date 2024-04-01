"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'
import { logo } from "../constants/constants";

export const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter()
    const onSearch = (e) => {
        if (e.key === "Enter" && e.target.value) {
          router.push(`/search?term=${e.target.value}`)
        }
      };


    return (
        <div className="">
        <div className="container">
          <div className="container-left">
            <div className="search">
              <img src='/logo.png' className="logo" />
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
              <button className="Log-In" id="top-button">
                Log In
              </button>
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
    )
}