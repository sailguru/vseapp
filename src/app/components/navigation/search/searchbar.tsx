"use client"

import { SearchInput } from "@/app/components/form/navigation/search/search_input";
import Image from "next/image";
import { Input } from "postcss";
import React, { useEffect, useRef } from "react";

export function SearchBar(props: any) {
  useEffect(() => {
    focusOnKeyUp();
  })
  return <div className={`navigation__searchbar`}>
    <p data-id="search_overlay" className="search__text_placeholder text__sm">
      <Image alt={props.alt ?? 'Image'} src="../images/search.svg" width="20" height="20"></Image>
      {props.placeholder}</p>
    <SearchInput onChange={(event:any) => Toggle(event)}></SearchInput>
    <span className="key_helper">ctrl+S</span>
  </div>;
}

function Toggle(event: any) {
  if (event.currentTarget.value != null){
    event.currentTarget.parentNode.querySelector('[data-id=search_overlay]').style.opacity = 0;
  } else {
    event.currentTarget.parentNode.querySelector('[data-id=search_overlay]').style.opacity = 1;
  }
}

function focusOnKeyUp() {
  window.addEventListener("keypress", e => {
    //e.preventDefault();
    if(e.which == 83) {
         document.querySelector('[data-id=search_input]').focus();
    }
});
}