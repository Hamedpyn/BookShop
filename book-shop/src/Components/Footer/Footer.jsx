import DetailsNews from "../DetailsNews/DetailsNews";
import LinkIcons from "../linkIcons/LinkIcons"
export default function Footer() {
    return (
        <div className="flex w-full flex-col items-center justify-center mt-32">
            <div className="mb-[-70px] flex w-full flex-col items-center justify-center">
                <DetailsNews
                    isTrue={false}
                    Title="برای اخبار جدید به ما بپیوندید"
                    tag={"دریافت تخفیف ویژه"}
                />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around h-[600px] w-11/12 max-w-[1380px] rounded-[40px] bg-[#F1F2F6]">
                <div className="flex flex-col xl:w-[230px] leading-6 items-start gap-7">
                    <img src="/Images/logo.png" alt="Logo" />
                    <p className="text-[#575757] tracking-widest lg:text-start text-center text-[16px] xl:tracking-wide">وقتی صبحها کسی از خواب بیدارتون نمیکنه و شبها کسی منتظرتون نیست،و هر کاری که دوست دارین میتونین انجام بدین،اسمش آزادیه یا تنهایی؟</p>
                    <span className="text-current">چارلز بوکوفسکی</span>
                </div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
            <div className="mt-[-70px] bg-current flex items-center flex-col md:flex-row-reverse gap-20 justify-around z-50 w-11/12 max-w-[1300px] rounded-t-[40px] py-8 ">
                <div className="">
                    <LinkIcons isTrue={false} />
                </div>
                <div className="light text-white text-center">
                    © توسعه شده توسط HAMEDPYN
                </div>
                <p className="text-[#EAEDFF] text-sm">hamedpyn@gmail.com</p>
            </div>
        </div>
    )
}
