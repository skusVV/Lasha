"use client";
import { useState } from "react";
import { PageWrapper } from "../components/PageWrapper";
import Link from "next/link";

export default function Cheese() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    console.log('das')
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('DATA', loginData);
    // const messages = validateForm(
    //   registerData.personPhone,
    //   registerData.personPassword,
    //   registerData.personRepeatPassword
    // );
    // if (messages.length) {
    //   return alert(messages.join(" \n"));
    // }

    fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
    .then((res) => res.json())
    .then((res) => console.log("LOGIN", res));
  };

  return (
    <PageWrapper>
      <section class="light-grey">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8  dark-grey rounded-lg">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                Log In
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    value={loginData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    class="light-grey text-white bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    value={loginData.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="light-grey text-white bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log In{" "}
                  </button>
                </div>
                <div></div>
                <p class="text-white text-sm font-light text-gray-500 dark:text-gray-400">
                  don't have an account?{" "}
                  <a
                    href="#"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    <Link href={`/register`} className="registerButton">
                      Register
                    </Link>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
