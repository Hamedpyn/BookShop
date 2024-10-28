/* eslint-disable react/prop-types */
import { FaBasketShopping } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function DetailsNews({ tag,isTrue, Title }) {
    return (
        <div className={`flex overflow-hidden bg-[#465392] rounded-[40px] flex-col gap-10 h-[500px] w-11/12 items-center  pt-20 justify-center max-w-[1280px] ${isTrue ? "bg-image h-[700px] sm:h-[550px]" : "bg-current md:gap-14 relative boxEffect md:!h-[414px]"}`}>

            <button className={`regular cursor-auto text-white py-2 px-5 rounded-full text-[16px] ${isTrue ? "bg-current" : "bg-[#27187E]"} text-lg !py-1`}>{tag}</button>
            <h2 className="kalameh w-[71%] line text-center leading-tight text-white text-6xl">
                {typeof Title === 'string' ? Title : Title.someProperty}
            </h2>


            {isTrue ? (
                <>
                    <p className="text-center w-[71%] lg:w-2/4 text-lg light text-[#A9AAAC]">
                        کتاب آنلاین منبعی به شکل کتاب است که فقط برای مطالعه در اینترنت در دسترس است.

                        این کتاب با ایده رایج یک کتاب الکترونیکی متفاوت است.
                    </p>
                    <Link to={'/Books'}><button className="flex items-center rounded-full gap-3 flex-row-reverse bg-white text-current my-10 transition-all hover:bg-[#59659E] py-5 px-6 hover:text-white">
                        <span>همین الان خرید کنید</span>
                        <span><FaBasketShopping /> </span>
                    </button></Link>
                </>
            ) : (
                <div className="flex flex-col-reverse items-center joinInput w-2/4 rounded-full gap-2 mb-5">
                    <button className="flex flex-row-reverse items-center gap-2 text-white bg-current transition-all hover:bg-black rounded-full py-1 px-2 ml-[1px] my-[1px] text-lg regular hover:border-transparent border sm:border-0">
                        عضویت
                        <MdOutlineEmail />
                    </button>
                    <input style={{all:"unset"}} placeholder="ایمیل خود را وارد کنید ..." type="text" disabled className="light !w-3/4 !py-4 !px-2 !bg-white !rounded-full !text-sm" />
                </div>
            )}
        </div>
    )
}