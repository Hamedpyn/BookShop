import { FaBasketShopping } from "react-icons/fa6";


export default function DetailsNews({ isTrue, Title }) {
    return (
        <div className={`flex bg-[#465392] z-50 rounded-[40px] pt-20 flex-col gap-10 w-11/12 items-center justify-center max-w-[1250px] ${isTrue ? "bg-image" : "bg-current"}`}>

            <button className={`regular cursor-auto text-white py-2 px-5 rounded-full text-[16px] ${isTrue ? "bg-current" : "bg-[#27187E]"}`}>تخفیف ویژه</button>
            <h2 className="kalameh w-[71%] line text-center leading-tight text-white text-6xl">
                {Title}
            </h2>
            <p className="text-center w-[71%] lg:w-2/4 text-lg light text-[#A9AAAC]">
                کتاب آنلاین منبعی به شکل کتاب است که فقط برای مطالعه در اینترنت در دسترس است.

                این کتاب با ایده رایج یک کتاب الکترونیکی متفاوت است.
            </p>
            {isTrue ? (
                <button className="flex items-center rounded-full gap-3 flex-row-reverse bg-white text-current my-10 transition-all hover:bg-[#59659E] py-5 px-6 hover:text-white">
                    <span>همین الان خرید کنید</span>
                    <span><FaBasketShopping /> </span>
                </button>
            ) : (
                {/* input */ }
            )}
        </div>
    )
}