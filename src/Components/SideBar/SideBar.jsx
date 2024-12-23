import { Button } from "flowbite-react";
import { useContext, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import LinkIcons from "../linkIcons/LinkIcons"
import SideBarSubMenu from "../SideBarSubMenu/SideBarSubMenu";
import { FaChevronDown } from "react-icons/fa6";
import { subMenuDetail } from "../../datas/Datas";
import UserBasketContext from "../../Contexts/UserBasketContext";

export default function SideBar(sideBarObject) {
    const { setOpenModal } = useContext(UserBasketContext)

    const [subMenuDetails,] = useState(subMenuDetail);
    let wrapperRef = useRef();
    const [, setWidth] = useState(window.innerWidth);
    let bodyRef = useRef(null);

    useEffect(() => {
        bodyRef.current = document.body;
        if (sideBarObject.isTrue) {
            wrapperRef.current.classList.add("wrapper");
            bodyRef.current.classList.add("overflow-hidden");
            bodyRef.current.addEventListener("click", sideBarObject.toggleMenu);
        } else {
            wrapperRef.current.classList.remove("wrapper");
            bodyRef.current.classList.remove("overflow-hidden");
        }

        return () => {
            bodyRef.current.removeEventListener("click", sideBarObject.toggleMenu);
        };
    }, [sideBarObject.isTrue]);

    // Handle window resize to close the menu when width is 1024 or greater
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            if (window.innerWidth >= 1024) {
                sideBarObject.setIsTrue(false);  // Close the menu when width is 1024 or greater
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div className={`z-50 bold fixed top-0 right-0 transition-all ease-out duration-300 h-full w-[270px] sm:w-[350px] bg-current overflow-auto overflow-x-hidden lg:invisible lg:opacity-0 ${sideBarObject.isTrue ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"}`}
                onClick={e => e.stopPropagation()}>
                <div className="mx-2 mt-5">
                    <div className="flex flex-wrap justify-between flex-row-reverse rounded p-3 bg-white">
                        <IoMdClose onClick={sideBarObject.toggleMenu} className="menuButton border transition-all hover:scale-110" />
                        <img src="Images/logo.png" className="w-[120px]" alt="Logo" />
                    </div>
                    <ul className="text-white bold flex flex-col mt-7 mb-20">
                        <li className="mr-[-1px]">
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "active" : "link-67")}
                                onClick={() => sideBarObject.setIsTrue(false)}
                            >
                                صفحه اصلی
                            </NavLink>
                        </li>
                        <li className="mr-[-1px]">
                            <NavLink
                                to="/Books"
                                className={({ isActive }) => (isActive ? "active" : "link-67")}
                                onClick={() => sideBarObject.setIsTrue(false)}
                            >
                                کتاب ها
                            </NavLink>
                        </li>
                        <li onClick={() => sideBarObject.setIsCollectionMenuOn(prev => !prev)} className={`link-67 ${sideBarObject.isCollectionMenuOn && "opacity-100"}`}>
                            <span className="subMenu">
                                <span>مجموعه</span>
                                <FaChevronDown className={`transition-all ${sideBarObject.isCollectionMenuOn ? "transform rotate-180" : ""}`} />
                            </span>
                        </li>
                        <SideBarSubMenu isSubMenuOn={sideBarObject.isCollectionMenuOn}>
                            {subMenuDetails.map(item => (
                                <a key={item.id} className="flex justify-center items-center flex-col opacity-70 mb-10 transition-all hover:opacity-100">
                                    <img className="w-4/5 sm:w-3/4 rounded" src={item.img} alt={item.img} />
                                    <Button className={`mt-[-20px] ${item.btnColor && "bg-[#b2824c]"}`} color={item.btnType} pill>{item.title}</Button>
                                </a>
                            ))}
                        </SideBarSubMenu>

                        <li onClick={() => sideBarObject.setIsCategoryMenuOn(prev => !prev)} className={`link-67 ${sideBarObject.isCategoryMenuOn && "opacity-100"}`}>
                            <span className="subMenu">
                                <span>دسته بندی</span>
                                <FaChevronDown className={`transition-all ${sideBarObject.isCategoryMenuOn ? "transform rotate-180" : ""}`} />
                            </span>
                        </li>

                        <SideBarSubMenu isSubMenuOn={sideBarObject.isCategoryMenuOn}>
                            <div className="flex flex-col mt-[-25px] mb-5">
                                <span onClick={() => sideBarObject.setInterestingCollection(prev => !prev)} className={`collectionSubMenu subMenu ${sideBarObject.interestingCollection && "opacity-100"}`}>
                                    <span className="!text-xl kalameh">-مجموعه جذاب</span>
                                    <FaChevronDown className={`transition-all ${sideBarObject.interestingCollection ? "transform rotate-180" : ""}`} />
                                </span>
                                <SideBarSubMenu isSubMenuOn={sideBarObject.interestingCollection}>
                                    <div className={`flex flex-col mt-[-10px] mb-5`}>
                                        <Link to={"/Collection/Adventures"} className="collectionSubMenu px-11 light"
                                            onClick={() => sideBarObject.setIsTrue(false)}
                                        >-ماجراجویی</Link>
                                        <Link to={"/Collection/Romance"} className="collectionSubMenu px-11 light"
                                            onClick={() => sideBarObject.setIsTrue(false)}
                                        >-رمان</Link>
                                        <Link to={"/Collection/Comedy"} className="collectionSubMenu px-11 light"
                                            onClick={() => sideBarObject.setIsTrue(false)}
                                        >-کمدی</Link>
                                        <Link to={"/Collection/Fantasy"} className="collectionSubMenu px-11 light"
                                            onClick={() => sideBarObject.setIsTrue(false)}
                                        >-فانتزی</Link>
                                        <Link to={"/Collection/Historical"} className="collectionSubMenu px-11 light"
                                            onClick={() => sideBarObject.setIsTrue(false)}
                                        >-تاریخی</Link>
                                        <Link to={"/Collection/Horror"} className="collectionSubMenu px-11 light"
                                            onClick={() => sideBarObject.setIsTrue(false)}
                                        >-جنایی</Link>
                                    </div>
                                </SideBarSubMenu>

                                <span onClick={() => sideBarObject.setFreeCollection(prev => !prev)} className={`collectionSubMenu subMenu ${sideBarObject.freeCollection && "opacity-100"}`} >
                                    <span className="!text-xl kalameh">-مجموعه رایگان</span>
                                    <FaChevronDown className={`transition-all ${sideBarObject.freeCollection ? "transform rotate-180" : ""}`} />
                                </span>
                                <SideBarSubMenu isSubMenuOn={sideBarObject.freeCollection}>
                                    <div className={`flex flex-col mt-[-10px]`}>
                                        <Link onClick={() => sideBarObject.setIsTrue(false)}
                                            to={"/Collection/Astronomy"} className="collectionSubMenu px-11 light"
                                        >-ستاره شناسی</Link>
                                        <Link onClick={() => sideBarObject.setIsTrue(false)}
                                            to={"/Collection/Geographic"} className="collectionSubMenu px-11 light"
                                        >-جئوگرافی</Link>
                                        <Link onClick={() => sideBarObject.setIsTrue(false)}
                                            to={"/Collection/Sports"} className="collectionSubMenu px-11 light"
                                        >-ورزشی</Link>
                                        <Link onClick={() => sideBarObject.setIsTrue(false)}
                                            to={"/Collection/Historical"} className="collectionSubMenu px-11 light"
                                        >-تاریخی</Link>
                                        <Link onClick={() => sideBarObject.setIsTrue(false)}
                                            to={"/Collection/Literary-fiction"} className="collectionSubMenu px-11 light"
                                        >-ادبیات داستانی</Link>
                                        <Link onClick={() => sideBarObject.setIsTrue(false)}
                                            to={"/Collection/Economy"} className="collectionSubMenu px-11 light"
                                        >-اقتصاد</Link>
                                        <Link onClick={() => sideBarObject.setIsTrue(false)}
                                            to={"/Collection/Classic"} className="collectionSubMenu px-11 light"
                                        >-کلاسیک</Link>
                                        <Link onClick={() => sideBarObject.setIsTrue(false)}
                                            to={"/Collection/Biography"} className="collectionSubMenu px-11 light"
                                        >-بیوگرافی</Link>
                                    </div>
                                </SideBarSubMenu>
                            </div>
                        </SideBarSubMenu>

                        <li onClick={() => sideBarObject.setIsPagesMenuOn(prev => !prev)} className={`link-67 ${sideBarObject.isPagesMenuOn && "opacity-100"}`}>
                            <span className="subMenu">
                                <span>صفحات</span>
                                <FaChevronDown className={`transition-all ${sideBarObject.isPagesMenuOn ? "transform rotate-180" : ""}`} />
                            </span>
                        </li>

                        <SideBarSubMenu isSubMenuOn={sideBarObject.isPagesMenuOn}>
                            <div className="flex flex-col mt-[-25px] mb-5">
                                <Link
                                    onClick={() => sideBarObject.setIsTrue(false)}
                                    to={'*'} className={`collectionSubMenu subMenu`} >
                                    <span className="light">-وبلاگ</span>
                                </Link>
                                <Link
                                    onClick={() => sideBarObject.setIsTrue(false)}
                                    to={'*'} className={`collectionSubMenu subMenu`} >
                                    <span className="light">-درباره ما</span>
                                </Link>
                                <Link
                                    onClick={() => sideBarObject.setIsTrue(false)}
                                    to={'*'} className={`collectionSubMenu subMenu`} >
                                    <span className="light">-سوالات متداول</span>
                                </Link>
                                <span onClick={() => sideBarObject.setSubMenu(prev => !prev)} className={`collectionSubMenu subMenu ${sideBarObject.subMenu && "opacity-100"}`} >
                                    <span className="light">-منوی کشویی</span>
                                    <FaChevronDown className={`transition-all ${sideBarObject.subMenu ? "transform rotate-180" : ""}`} />
                                </span>
                                <SideBarSubMenu isSubMenuOn={sideBarObject.subMenu}>
                                    <div className={`flex flex-col mt-[-10px]`}>
                                        <span className="collectionSubMenu px-11 light"
                                        >-زیر منو 1</span>
                                        <span className="collectionSubMenu px-11 light"
                                        >-زیر منو 2</span>
                                        <span className="collectionSubMenu px-11 light"
                                        >-زیر منو 3</span>

                                    </div>
                                </SideBarSubMenu>
                            </div>
                        </SideBarSubMenu>

                        <li className="mr-[-1px]">
                            <NavLink
                                to="/ContactUs"
                                className={({ isActive }) => (isActive ? "active" : "link-67")}
                                onClick={() => sideBarObject.setIsTrue(false)}
                            >
                                تماس با ما
                            </NavLink>
                        </li>
                        <Button onClick={() => setOpenModal(true)} className="md:hidden rounded mt-5" color="light">
                            ورود / ثبت نام
                        </Button>
                    </ul>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <LinkIcons isTrue={true} />
                    </div>
                </div>
            </div>
            <div ref={wrapperRef} className="lg:hidden"></div>
        </>
    )
}
