import { FaSearch } from "react-icons/fa";

export default function MainHome() {
  return (
    <div className="h-[780px] sm:h-[730px] lg:h-[470px] overflow-hidden xl:h-[660px] max-w-[1450px] md:h-[800px] lg:rounded-bl-[100px] bg-[#f8f8fa]">
      <div className="flex flex-col items-center pt-5 px-5 gap-14 lg:flex-row-reverse md:justify-center lg:justify-end lg:px-10 xl:mt-10 mainHomePage lg:pt-0">
        <div className="mainHome justify-center overflow-hidden relative flex md:basis-1/2">
          <img className="w-[400px] md:w-[500px] z-10 xl:w-[800px]" src="/Images/layer-slider-model.png" alt="Model" />
        </div>
        <div className="flex flex-col md:items-start items-center basis1/2 gap-7 xl:gap-16 xl:mb-[150px]">
          <div className="text-4xl text-center lg:text-start w-[100%] lg:w-[450px] tracking-wider lg:text-5xl xl:text-[52px] lg:leading-tight">
            <span className="text-black">مجموعه عظیم از</span>
            <span className="text-current mr-1">بهترین کتاب ها</span>
          </div>
          <p className="text-[#B3B3B4] lg:w-[300px] tracking-widest lg:text-start text-center xl:w-[510px] xl:tracking-wide">کتاب آنلاین منبعی به شکل کتاب است که فقط برای مطالعه در اینترنت در دسترس است. این کتاب با ایده رایج یک کتاب الکترونیکی متفاوت است.</p>
          <div className="border flex flex-row-reverse bg-white rounded-full w-[100%] p-1">
            <button className="flex items-center bg-current text-white gap-2 p-[2%] rounded-full ">
              <span>جستجو</span>
              <span><FaSearch /></span>
            </button>
            <input style={{ all: "unset" }} className="!text-sm !w-[80%] !pr-2" type="text" placeholder="اسم کتاب, نویسنده" />
          </div>
        </div>
      </div>
    </div>
  )
}
