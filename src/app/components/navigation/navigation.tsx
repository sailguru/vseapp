import React, { Suspense, useEffect, useState } from "react";
import { SearchBar } from "./search/searchbar";
import { UserAvatar } from "./user_avatar";
import { Heading } from "./heading";
import { MenuPointer } from "./menu/menu_pointer";
import { useTranslations } from 'next-intl';
import { GeneralPlaceholder } from "../misc/placeholder/general_placeholder";
import { checkAuth, getPhone } from "@/app/services/auth/auth_service";
import { purgeAuth } from "@/app/services/auth/persistence";
import { CategoryStrip } from "./category_strip/category_strip";

async function getData() {
  const res = await fetch('https://dummyjson.com/products/1');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function navigationFetchData() {
  const data = await getData();
  return;
}

export function Navigation(props: any) {
  navigationFetchData();

  const t = useTranslations();

  return <div className={`navigation__wrapper ${props.isMobile ? 'mobile' : 'desktop'} animate__animated animate__fadeIn`}>
    <Suspense fallback={<GeneralPlaceholder></GeneralPlaceholder>}>
      <Heading size='bg' heading={t('welcome.heading')}></Heading>
    </Suspense>
    <Suspense fallback={<GeneralPlaceholder></GeneralPlaceholder>}>
      <SearchBar alt={t('alt.search')} placeholder={t('search.placeholder')}></SearchBar>
    </Suspense>
    <Suspense fallback={<GeneralPlaceholder></GeneralPlaceholder>}>
      <UserAvatar></UserAvatar>
    </Suspense>
    <Suspense fallback={<GeneralPlaceholder></GeneralPlaceholder>}>
      <MenuPointer alr={t('alt.menu')}></MenuPointer>
    </Suspense>
  </div>;
}