"use client";

import { ReactNode } from "react";

type DropdownProps = {
  open: boolean;
  trigger: ReactNode | undefined;
  menu: any[];
}
export default function Dropdown({ open, trigger, menu }: DropdownProps) {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem: any[], index) => (
            <li key={index} className="menu-item">{menuItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};