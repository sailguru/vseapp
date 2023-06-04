"use client"

import { checkAuth } from "@/app/services/auth/auth_service";
import { Pill } from "./pill";
import { Suspense, useEffect, useState } from "react";
import { GeneralPlaceholder } from "../../misc/placeholder/general_placeholder";
import { usePathname } from "next/navigation";


async function getData() {
  const res = await fetch('https://dummyjson.com/products/1');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function categoryFetchData() {
  const data = await getData();
  return;
}

export function CategoryStrip(props: any) {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    setAuth(true);
  }, [checkAuth()])

  categoryFetchData();

  if (usePathname() == "/") {
    return <div className="navigation__category__strip__wrapper animate__animated animate__fadeIn">
      <Suspense fallback={<GeneralPlaceholder></GeneralPlaceholder>}>
        <Pill title="Все" active={true}></Pill>
        <Pill title="Бытовая химия"></Pill>
        <Pill title="Техника"></Pill>
        <Pill title="Продукты"></Pill>
      </Suspense>
    </div>
  } else {
    return;
  }
} 