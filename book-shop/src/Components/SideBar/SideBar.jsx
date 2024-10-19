export default function SideBar(sideBarObject) {
    return (
        <>
            <div className={`z-50 fixed top-0 right-0 transition-all ease-out duration-300 h-full w-[270px] sm:w-[350px] bg-current overflow-auto overflow-x-hidden lg:invisible lg:opacity-0 ${sideBarObject.isTrue ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"}`}
                onClick={e => e.stopPropagation()}>
            </div>
        </>
    )
}
