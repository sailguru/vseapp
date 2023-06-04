import React from "react";
import Image from "next/image";

export function MenuPointer(props: any) {
  return <div data-id="menu_pointer" className={"navigation__menu__pointer"}>
    <Image alt={props.alt ?? 'Image'} src="../images/menu.svg" width="30" height="30"></Image>
  </div>;
}