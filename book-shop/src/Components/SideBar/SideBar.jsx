import { useEffect, useRef, useState } from "react";
export default function SideBar(sideBarObject) {
    let wrapperRef = useRef();
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

    return (
        <>
            <div className={`z-50 fixed top-0 right-0 transition-all ease-out duration-300 h-full w-[270px] sm:w-[350px] bg-current overflow-auto overflow-x-hidden lg:invisible lg:opacity-0 ${sideBarObject.isTrue ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"}`}
                onClick={e => e.stopPropagation()}>
            </div>
            <div ref={wrapperRef} className="lg:hidden"></div>
        </>
    )
}
