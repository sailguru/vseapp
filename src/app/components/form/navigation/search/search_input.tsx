import Image from "next/image";
import { Input } from "postcss";
import React, { useRef } from "react";

export function SearchInput(props: any) {
  return <input type="text" data-id="search_input" className={`navigation__searchbar__input`}>
  </input>;
}
