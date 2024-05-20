"use client";
import { useState } from "react";
import { PageWrapper } from "../components/PageWrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { setAuthInfo } from '../auth';

export default function AdminPanel() {
  const router = useRouter();

  return (
    <PageWrapper>
      <div className="text-white">admin pannel</div>
    </PageWrapper>
  );
}
