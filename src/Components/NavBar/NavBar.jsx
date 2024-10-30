import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { NavLink,Link } from "react-router-dom";
import { subMenuDetail } from "../../datas/Datas";
import { Button } from "flowbite-react";

export default function NavBar() {
  const [subMenuDetails,] = useState(subMenuDetail)
  return (
    <ul className="flex gap-1 navbar-menu h-full items-center">
      <li className="relative py-[62px] group underEffect">
        <NavLink to={"/"} className={({ isActive }) => (isActive ? "isActive border-l-2 h-4 flex items-center border-[#f6f7f9] px-2" : "cursor-pointer group-hover:text-current transition-all border-l-2 h-4 flex items-center border-[#f6f7f9] px-2")}>
          صفحه اصلی
        </NavLink>
      </li>
      <li className="relative py-[62px] group underEffect">
        <NavLink to={"/Books"} className={({ isActive }) => (isActive ? "isActive border-l-2 h-4 flex items-center border-[#f6f7f9] px-2" : "cursor-pointer group-hover:text-current transition-all border-l-2 h-4 flex items-center border-[#f6f7f9] px-2")}>
          کتاب ها
        </NavLink>
      </li>
      <li className="py-[62px] group underEffect relative">
        <a className=" border-l-2 h-4 flex items-center cursor-pointer group-hover:text-current transition-all border-[#f6f7f9] px-2 gap-1">
          <span>مجموعه</span>
          <span>
            <FaChevronDown className="group-hover:rotate-180 transition-all" />
          </span>
        </a>

        <ul className={`transition-opacity ease-out absolute top-[130px] right-[-200px] group-hover:visible group-hover:opacity-100 invisible opacity-0  w-[800px] lg:h-[250px] xl:h-[300px] xl:w-[1000px] h-[200px] xl:right-[-300px] bg-white flex items-center justify-center z-50`}>
          {subMenuDetails.map(item => (
            <a key={item.id} className=" flex flex-col items-center transition-all">
              <img className="w-[200px] xl:w-[300px] rounded" src={item.img} alt={item.img} />
              <Button className={`mt-[-20px] ${item.btnColor && "bg-[#b2824c]"}`} color={item.btnType} pill>{item.title}</Button>
            </a>
          ))}
        </ul>
      </li>
      <li className="py-[62px] relative underEffect group">
        <a className="cursor-pointer group-hover:text-current transition-all underEffect border-l-2 h-4 flex items-center border-[#f6f7f9] px-2 gap-1">
          <span>دسته بندی</span>
          <span>
            <FaChevronDown className="group-hover:rotate-180 transition-all" />
          </span>
        </a>

        <ul className={`transition-opacity ease-out absolute top-[135px] right-0 w-[350px] group-hover:visible group-hover:opacity-100 invisible opacity-0 collectionMenu h-[280px] rounded-md bg-current z-50 group flex pt-5 text-white delay-100 duration-200 px-10`}>
          <li className="basis-1/2 flex flex-col items-start ml-10">
            <span className="kalameh !text-xl">مجموعه جذاب</span>
            <div className={`subOrgMenu flex flex-col gap-2 pt-2`}>
              <Link to={'/Collection/Adventures'} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-ماجراجویی</Link>
              <Link to={'/Collection/Romance'} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-رمان</Link>
              <Link to={'/Collection/Comedy'} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-کمدی</Link>
              <Link to={'/Collection/Fantasy'} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-فانتزی</Link>
              <Link to={'/Collection/Historical'} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-تاریخی</Link>
              <Link to={'/Collection/Horror'} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-جنایی</Link>
            </div>
          </li>
          <li className="basis-1/2 flex flex-col items-start">
            <span className="kalameh !text-xl">مجموعه رایگان</span>
            <div className={`subOrgMenu flex flex-col gap-2 pt-2`}>
              <Link to={"/Collection/Astronomy"} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-ستاره شناسی</Link>
              <Link to={"/Collection/Geographic"} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-جئوگرافی</Link>
              <Link to={"/Collection/Sports"}  className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-ورزشی</Link>
              <Link to={"/Collection/Historical"} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-تاریخی</Link>
              <Link to={"/Collection/Literary-fiction"} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-ادبیات داستانی</Link>
              <Link to={"/Collection/Economy"} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-اقتصاد</Link>
              <Link to={"/Collection/Classical"} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-کلاسیک</Link>
              <Link to={"/Collection/Biography"} className="opacity-60 hover:opacity-100 pr-3 text-sm light"
              >-بیوگرافی</Link>
            </div>
          </li>
        </ul>
      </li>
      <li className="py-[62px] relative underEffect group">
        <a className="cursor-pointer group-hover:text-current transition-all border-l-2 h-4 flex items-center border-[#f6f7f9] px-2 gap-1">
          <span>صفحات</span>
          <span>
            <FaChevronDown className="group-hover:rotate-180 transition-all" />
          </span>
        </a>
        <ul className={`transition-opacity ease-out absolute top-[135px] right-0 w-[200px] h-[150px] group-hover:visible group-hover:opacity-100 invisible opacity-0 cursor-auto rounded-md bg-current z-50 text-sm gap-2 flex pt-5 flex-col text-white delay-100 duration-200 px-10`}>
          <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all light">وبلاگ</li>
          <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all light">درباره ما</li>
          <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all light">سوالات متداول</li>
          <li className="cursor-pointer flex items-center opacity-70 hover:opacity-100 relative transition-all w-[200px] underMenuCollect gap-4">
            <span className="light">منوی کشویی</span>
            <span>
              <FaChevronDown className="transition-all underCheck" />
            </span>
            <ul className={`transition-opacity ease-out absolute top-0 right-[160px] w-[150px] h-[110px] cursor-auto rounded-md bg-current text-sm gap-2 flex pt-5 flex-col text-white delay-100 invisible opacity-0 subMenuCollect duration-200 px-5`}>
              <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all light">زیر منو 1</li>
              <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all light">زیر منو 2</li>
              <li className="cursor-pointer opacity-70 hover:opacity-100 transition-all light">زیر منو3</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="relative py-[58px] group underEffect">
        <NavLink to={"/ContactUs"} className={({ isActive }) => (isActive ? "isActive px-2" : "cursor-pointer group-hover:text-current transition-all px-2")}>
          تماس با ما
        </NavLink>
      </li>
    </ul>
  );
}
