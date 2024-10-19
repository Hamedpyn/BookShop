import { useState } from "react";
export default function NavBar() {
  return (
    <ul className="flex navbar-menu h-full items-center">
      <li className="relative py-[62px] ">
        <NavLink to={"/"} className={({ isActive }) => (isActive ? "isActive border-l-2 h-4 flex items-center border-[#f6f7f9] px-2" : "cursor-pointer hover:text-current transition-all underEffect border-l-2 h-4 flex items-center border-[#f6f7f9] px-2")}>
          صفحه اصلی
        </NavLink>
      </li>
      <li className="relative py-[62px] ">
        <NavLink to={"/books"} className={({ isActive }) => (isActive ? "isActive border-l-2 h-4 flex items-center border-[#f6f7f9] px-2" : "cursor-pointer hover:text-current transition-all underEffect border-l-2 h-4 flex items-center border-[#f6f7f9] px-2")}>
          کتاب ها
        </NavLink>
      </li>
      <li className="relative py-[58px] ">
        <NavLink to={"/contact-us"} className={({ isActive }) => (isActive ? "isActive px-2" : "cursor-pointer hover:text-current transition-all underEffect px-2")}>
          تماس با ما
        </NavLink>
      </li>
    </ul>
  );
}
