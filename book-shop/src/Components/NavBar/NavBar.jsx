import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { subMenuDetail } from "../../datas/subMenuDetails";
import { Button } from "flowbite-react";

export default function NavBar() {
  const [subMenuDetails,] = useState(subMenuDetail)
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
      <li className="py-[62px] group relative  group">
        <a className="underEffect border-l-2 h-4 flex items-center cursor-pointer hover:text-current transition-all border-[#f6f7f9] px-2 gap-1">
          <span>مجموعه</span>
          <span>
            <FaChevronDown className="group-hover:rotate-180 transition-all" />
          </span>
        </a>

        <ul className={`transition-opacity ease-out absolute top-[130px] right-[-200px] group-hover:visible group-hover:opacity-100 invisible opacity-0  w-[800px] xl:h-[300px] xl:w-[1000px] h-[200px] xl:right-[-300px] bg-white flex items-center justify-center z-50`}>
          {subMenuDetails.map(item => (
            <a key={item.id} className=" flex flex-col items-center transition-all" href="#">
              <img className="w-[200px] xl:w-[300px] rounded" src={item.img} alt={item.img} />
              <Button className={`mt-[-20px] ${item.btnColor && "bg-[#b2824c]"}`} color={item.btnType} pill>{item.title}</Button>
            </a>
          ))}
        </ul>
      </li>
      <li className="py-[62px] relative group">
        <a className="cursor-pointer hover:text-current transition-all underEffect border-l-2 h-4 flex items-center border-[#f6f7f9] px-2 gap-1">
          <span>دسته بندی</span>
          <span>
            <FaChevronDown className="group-hover:rotate-180 transition-all" />
          </span>
        </a>

        <ul className={`transition-opacity ease-out absolute top-[135px] right-0 w-[350px] group-hover:visible group-hover:opacity-100 invisible opacity-0 collectionMenu h-[280px] rounded-md bg-current z-50 group flex pt-5 text-white delay-100 duration-200 px-10`}>
          <li className="basis-1/2 flex flex-col items-start ml-10">
            <span>مجموعه جذاب</span>
            <div className={`subOrgMenu flex flex-col gap-2 pt-2`}>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-ماجراجویی</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-رمان</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-کمدی</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-فانتزی</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-تاریخی</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-جنایی</span>
            </div>
          </li>
          <li className="basis-1/2 flex flex-col items-start">
            <span>مجموعه رایگان</span>
            <div className={`subOrgMenu flex flex-col gap-2 pt-2`}>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-ستاره شناسی</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-جئوگرافی</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-ورزشی</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-تاریخی</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-ادبیات داستانی</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-اقتصاد</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-کلاسیک</span>
              <span className="opacity-60 hover:opacity-100 pr-3 text-sm"
              >-بیوگرافی</span>
            </div>
          </li>
        </ul>
      </li>
      <li className="py-[62px] relative group">
        <a className="cursor-pointer hover:text-current transition-all underEffect border-l-2 h-4 flex items-center border-[#f6f7f9] px-2 gap-1">
          <span>صفحات</span>
          <span>
            <FaChevronDown className="group-hover:rotate-180 transition-all" />
          </span>
        </a>
        </ul>
      </li>
      <li className="relative py-[58px] ">
        <NavLink to={"/contact-us"} className={({ isActive }) => (isActive ? "isActive px-2" : "cursor-pointer hover:text-current transition-all underEffect px-2")}>
          تماس با ما
        </NavLink>
      </li>
    </ul>
  );
}
