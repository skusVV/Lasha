"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage  from '../hooks/useLocalStorage';

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [user, setUser] = useLocalStorage('AUTH', null);
  const [currency, setCurrency] = useLocalStorage('CURRECNY', 'USD');

  const onSearch = (e) => {
    if (e.key === "Enter" && e.target.value) {
      router.push(`/search?term=${e.target.value}`);
    }
  };

  const logout = () => {
    setUser(null);
    router.refresh();
  }

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    router.refresh();
  };

  return (
    <div className="">
      <div className="container" style={{ minWidth: '100%' }}>
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
          {
            user && <div className="add-product mt-5 mr-5">
              <Link
                href={`/admin`}
                className="border rounded-md text-center px-3 py-3 dark-white"
              >
                <FontAwesomeIcon icon={faPlus} /> Sell
              </Link>
            </div>
          }
          <div className="language">
            <i className="fas fa-globe"></i>
            <select value={currency} className="currency-change" id="top-button"  onChange={handleCurrencyChange}>
              <option value="USD">$ - USD</option>
              <option value="GEL">₾ - GEL</option>
            </select>
          </div>
          {
            !user && <div className="add-product mt-5">
              <Link
                href={`/login`}
                className="border rounded-md text-center px-3 py-3 dark-white "
              >
                Log In
              </Link>
            </div>
          }
          {
            user && <div className="add-product mt-5">
              <span
                onClick={logout}
                className="border rounded-md text-center px-3 py-3 dark-white "
              >
                Log out
              </span>
            </div>
          }
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
