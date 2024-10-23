/* eslint-disable react/prop-types */
import { FaBasketShopping } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function DetailsNews({ tag,isTrue, Title }) {
    return (
        <div className={`flex bg-[#465392] z-50 rounded-[40px] flex-col gap-10 w-11/12 items-center justify-center max-w-[1270px] ${isTrue ? "bg-image pt-20" : "bg-current py-14 gap-14"}`}>

            <button className={`regular cursor-auto text-white py-2 px-5 rounded-full text-[16px] ${isTrue ? "bg-current" : "bg-[#27187E]"}`}>{tag}</button>
            <h2 className="kalameh w-[71%] line text-center leading-tight text-white text-6xl">
                {typeof Title === 'string' ? Title : Title.someProperty}
            </h2>


            {isTrue ? (
                <>
                    <p className="text-center w-[71%] lg:w-2/4 text-lg light text-[#A9AAAC]">
                        کتاب آنلاین منبعی به شکل کتاب است که فقط برای مطالعه در اینترنت در دسترس است.

                        این کتاب با ایده رایج یک کتاب الکترونیکی متفاوت است.
                    </p>
                    <button className="flex items-center rounded-full gap-3 flex-row-reverse bg-white text-current my-10 transition-all hover:bg-[#59659E] py-5 px-6 hover:text-white">
                        <span>همین الان خرید کنید</span>
                        <span><FaBasketShopping /> </span>
                    </button>
                </>
            ) : (
                <div className="flex flex-col-reverse items-center joinInput w-2/4 rounded-full gap-2">
                    <button className="flex flex-row-reverse items-center gap-2 text-white bg-current transition-all hover:bg-black rounded-full py-1 px-2 ml-[1px] my-[1px] text-lg regular hover:border-transparent border sm:border-0">
                        عضویت
                        <MdOutlineEmail />
                    </button>
                    <input style={{all:"unset"}} placeholder="ایمیل خود را وارد کنید ..." type="text" className="light !w-3/4 !py-4 !px-2 !bg-white !rounded-full !text-sm" />
                </div>
            )}
        </div>
    )
}