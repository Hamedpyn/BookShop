import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import SideBar from "../SideBar/SideBar";

function Header() {
    const [isCategoryMenuOn, setIsCategoryMenuOn] = useState(false);
    const [isPagesMenuOn, setIsPagesMenuOn] = useState(false);
    const [isTrue, setIsTrue] = useState(false);
    const [isCollectionMenuOn, setIsCollectionMenuOn] = useState(false);
    const [interestingCollection, setInterestingCollection] = useState(false)
    const [freeCollection, setFreeCollection] = useState(false)
    const [subMenu, setSubMenu] = useState(false)

    const toggleMenu = (e) => {
        if (!isTrue) {
            setIsCollectionMenuOn(false);
            setIsCategoryMenuOn(false);
            setIsPagesMenuOn(false);
            setInterestingCollection(false)
            setFreeCollection(false)
            setSubMenu(false)
        }
        e.stopPropagation();
        setIsTrue((prev) => !prev);
    };

    const sideBarObject = {
        isTrue,
        setIsTrue,
        setIsCollectionMenuOn,
        setIsCategoryMenuOn,
        isCategoryMenuOn,
        isCollectionMenuOn,
        toggleMenu,
        isPagesMenuOn,
        setIsPagesMenuOn,
        interestingCollection,
        setInterestingCollection,
        freeCollection,
        setFreeCollection,
        subMenu,
        setSubMenu
    };

    return (
        <>
            <div className="py-3 sm:py-5 lg:h-[140px] bg-white lg:bg-[#f8f8fa] lg:flex items-center max-w-[1450px]">
                <div className="flex flex-wrap text-white relative items-center px-5 lg:px-0" >
                    <div className="basis-1/3 lg:hidden">
                        <IoMenu className="menuButton bg-current" onClick={toggleMenu} />
                    </div>
                    <div className="menuBasis justify-center md:justify-start lg:basis-auto lg:justify-start lg:bg-white lg:h-[140px] pr-5 xl:pr-12 items-center navbar-logo z-50 lg:border-[0.5px] border-[rgba(149, 157, 165, 0.2)] lg:border-l-0"
                    >
                        <img src="/Images/logo.png" className="w-[120px] lg:h-[60px] md:w-[140px]" alt="Logo" />
                    </div>
                    <div className="menuBasis md:relative justify-end items-center gap-4 relative lg:basis-auto lg:h-[140px] lg:mr-3 lg:justify-center lg:w-[200px] basket xl:mr-10">
                        <FaBasketShopping className="menuButton bg-[#f8f8fa] text-gray-700 border border-gray-300" />
                        <span id="fontF" className="absolute bottom-0 md:left-[185px] lg:bottom-[48px] 
                         md:bottom-[5px] lg:left-[155px] bg-red-600 rounded-full p-1 h-4 flex justify-center items-center text-xs">0</span>
                        <button className="hidden md:flex rounded-full bg-current items-center hover:bg-black transition-all duration-200 px-6 py-4 lg:py-0 lg:text-sm lg:h-[60px] gap-2">
                            <FaUserAlt />
                            <span> ورود / ثبت نام</span>
                        </button>
                    </div>
                </div>
            </div>

            <SideBar {...sideBarObject} />
        </>
    );
}
export default Header;
