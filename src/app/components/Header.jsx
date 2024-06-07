"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "../hooks/useLocalStorage";
import { getWords } from "../languages/language";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [user, setUser] = useLocalStorage("AUTH", null);
  const [currency, setCurrency] = useLocalStorage("CURRECNY", "USD");
  const [language, setLanguage] = useLocalStorage("LANGUAGE", "ENG");

  const words = getWords(language);

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
    setUser(null);
    router.refresh();
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      setUserRole(user.role);
      console.log(user.role);
    }
  }, [user]);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    router.refresh();
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    router.refresh();
  };

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
              placeholder={words.search}
            />
          </div>
        </div>

        <div className="container-right">
          {user && (
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
            <select
              value={language}
              className="currency-change"
              id="top-button"
              placeholder={words.language}
              onChange={handleLanguageChange}
            >
              <option value="ENG">English</option>
              <option value="GEO">Georgia</option>
              <option value="ES">Spain</option>
            </select>
          </div>

          <div className="language">
            <i className="fas fa-globe"></i>
            <select
              value={currency}
              className="currency-change"
              id="top-button"
              onChange={handleCurrencyChange}
            >
              <option value="USD">$ - USD</option>
              <option value="GEL">₾ - GEL</option>
            </select>
          </div>
          {!user && (
            <div className="add-product mt-5">
              <Link
                href={`/login`}
                className="border rounded-md text-center px-3 py-3 dark-white "
              >
                {words.logIn}
              </Link>
            </div>
          )}
          {user && (
            <div className="add-product mt-5">
              <span
                onClick={logout}
                className="border rounded-md text-center px-3 py-3 dark-white "
              >
                {words.logOut}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="nav-bar">
        <div className="nav-left flex flex-align items-center ">
          <div>
            {!user && (
              <Link href="/login" className="nav-button">
                Favorites
              </Link>
            )}
            {
              !!user && <Link href="/favorites" className="nav-button">
              Favorites
            </Link>
            }
          </div>

          <div>
            {" "}
            <button className="nav-buttons">VIN check</button>
          </div>
          <div>
            {" "}
            <button className="nav-buttons">Dealers </button>
          </div>
          <div>
            {" "}
            <button className="nav-buttons">Car Showrooms</button>
          </div>
          <div>
            {" "}
            <button className="nav-buttons">Auctions</button>
          </div>

          <div>
            {" "}
            <button className="nav-buttons">Auto Parts</button>
          </div>
          <div>
            {" "}
            <button className="nav-buttons">Catalog</button>
          </div>
          <div>
            {" "}
            <button className="nav-buttons">Blog</button>
          </div>
        </div>
        <div className="nav-right">
          <button className="nav-buttons">Help</button>
          <button className="nav-buttons">Contact</button>
        </div>
      </div>
    </div>
  );
};
