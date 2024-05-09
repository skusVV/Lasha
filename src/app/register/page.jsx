"use client";
import { PageWrapper } from "../components/PageWrapper";
import { useState } from "react";
import { validateForm } from "./validation";
import Link from "next/link";

export default function register() {
  const [registerData, setRegisterData] = useState({
    personName: "",
    personSurname: "",
    personPhone: "",
    personGmail: "",
    personPassword: "",
    personRepeatPassword: "",
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messages = validateForm(
      registerData.personPhone,
      registerData.personPassword,
      registerData.personRepeatPassword
    );
    if (messages.length) {
      return alert(messages.join(" \n"));
    }

    fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      })
    .then((res) => res.json())
    .then((res) => {
      // TODO I want to be redirected to login page
      console.log("response from server: USER", res);
    })
    .catch(() => alert('Something went wrong'))
  };

  return (
    <PageWrapper>
      <section class="light-grey">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8  dark-grey rounded-lg">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label class="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="personName"
                    value={registerData.personName}
                    onChange={handleChange}
                    placeholder="Paul"
                    className="light-grey text-white bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label class="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="personSurname"
                    value={registerData.personSurname}
                    onChange={handleChange}
                    placeholder="Thompson"
                    className="light-grey text-white bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label class="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phone
                  </label>
                  <input
                    id="number"
                    type="number"
                    name="personPhone"
                    value={registerData.personPhone}
                    onChange={handleChange}
                    placeholder="+123 123 456 789"
                    className="light-grey text-white bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="personGmail"
                    value={registerData.personGmail}
                    onChange={handleChange}
                    placeholder="name@gmail.com"
                    className="light-grey text-white bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
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
                    type="password"
                    name="personPassword"
                    value={registerData.personPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="light-grey text-white bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="text-white block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="personRepeatPassword"
                    value={registerData.personRepeatPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="light-grey text-white bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="light-grey text-white w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="text-white font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-indigo-600 hover:text-indigo-500 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Create Account{" "}
                  </button>
                </div>
                <p class="text-white text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    <Link href={`/login`} className="logInButton">
                      Log In
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
