"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { BrowserRouter as Router, Route } from "react-router-dom";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("AUTH"));
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (user) {
      setUserRole(user.role);
    }
  }, [user]);

  const onSearch = (e) => {
    if (e.key === "Enter" && e.target.value) {
      router.push(`/search?term=${e.target.value}`);
    }
  };

  const logout = () => {
    localStorage.removeItem("AUTH");
    router.refresh();
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      setUserRole(user.role);
      console.log(user.role);
    }
  }, [user]);

  return (
    <div className="">
      <div className="container" style={{ minWidth: "100%" }}>
        <div className="container-left">
          <div class="flex justify-center items-center">
            <a href="http://localhost:3000/">
              <img src="/logo.png" class="logo" className="mt-3" />
            </a>
            <i class="fa-solid fa-magnifying-glass" id="glass-icon"></i>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={onSearch}
              value={searchTerm}
              type="search-box"
              name=""
              id=""
              class="search-box"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="container-right">
          {user && userRole === "Admin" && (
            <div className="add-product mt-5 mr-5">
              <Link
                href={`/adminPanel`}
                className="border rounded-md text-center px-3 py-3 dark-white"
              >
                Admin Panel
              </Link>
            </div>
          )}
          {user && (
            <div className="add-product mt-5 mr-5">
              <Link
                href={`/admin`}
                className="border rounded-md text-center px-3 py-3 dark-white"
              >
                <FontAwesomeIcon icon={faPlus} /> Sell
              </Link>
            </div>
          )}
          <div className="language">
            <i className="fas fa-globe"></i>
            <select action="" className="currency-change" id="top-button">
              <option value="">$ - USD</option>
              <option value="">₾ - GEL</option>
            </select>
          </div>
          {!user && (
            <div className="add-product mt-5">
              <Link
                href={`/login`}
                className="border rounded-md text-center px-3 py-3 dark-white "
              >
                Log In
              </Link>
            </div>
          )}
          {user && (
            <div className="add-product mt-5">
              <span
                onClick={logout}
                className="border rounded-md text-center px-3 py-3 dark-white "
              >
                Log out
              </span>
            </div>
          )}
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
