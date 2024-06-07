"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageWrapper } from "../components/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function favorites({}) {
  const user = JSON.parse(localStorage.getItem("AUTH"));

  useEffect(() => {
    fetch(`http://localhost:3001/api/user/favorites?userId=${user?.id}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
    });
  }, []);


  return (
    <PageWrapper>
      <div>hello</div>
    </PageWrapper>
  );
}
