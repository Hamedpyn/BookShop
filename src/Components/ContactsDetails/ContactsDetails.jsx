import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactsDetails() {
  return (
    <div className="flex mt-20 gap-20 md:gap-10 lg:justify-evenly flex-col items-center md:items-start lg:items-center lg:flex-row">
      <div className=" flex p-1 group md:gap-7 md:flex-row cursor-pointer flex-col items-center gap-2">
        <span className="w-[70px] group-hover:bg-[#f8f8f8] transition-all ease-in-out h-[70px] flex items-center justify-center bg-current rounded-full">
          <IoMdMail className="text-white group-hover:text-current text-4xl" />
        </span>
        <div className="text-center md:text-start">
        <h2 className="kalameh text-4xl group-hover:text-current transition-all ease-in-out delay-200">پشتیبانی</h2>
        <a href="mailto:support@hamedpyn.com" className="light text-[#666] text-sm">support@hamedpyn.com</a>
        </div>
      </div>
      <div className=" flex p-1 group md:gap-7 md:flex-row cursor-pointer flex-col items-center gap-2">
        <span className="w-[70px] group-hover:bg-[#f8f8f8] transition-all ease-in-out h-[70px] flex items-center justify-center bg-current rounded-full">
          <BiSolidPhoneCall className="text-white group-hover:text-current text-4xl" />
        </span>
        <div className="text-center md:text-start">

        <h2 className="kalameh text-4xl group-hover:text-current transition-all ease-in-out delay-200">تلفن</h2>
        <a href="tel:02122233445566" className="light text-[#666] text-sm">9822334455+</a>
        </div>
      </div>
      <div className=" flex p-1 group md:gap-7 md:flex-row flex-col items-center gap-2">
        <span className="w-[70px] group-hover:bg-[#f8f8f8] transition-all ease-in-out h-[70px] flex items-center justify-center bg-current rounded-full">
          <FaLocationDot className="text-white group-hover:text-current text-4xl" />
        </span>
        <div className="text-center md:text-start">
        <h2 className="kalameh text-4xl group-hover:text-current transition-all ease-in-out delay-200">آدرس</h2>
        <span className="light text-[#666] text-sm">تهران- خیابان آزادی- خیابان بهبودی</span>
        </div>
      </div>
    </div>
  )
}
