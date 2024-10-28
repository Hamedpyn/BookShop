import { useState } from "react";
import { footerSubMenu } from "../../datas/Datas";
import DetailsNews from "../DetailsNews/DetailsNews";
import LinkIcons from "../linkIcons/LinkIcons"
import FooterMenu from "../FooterMenu/FooterMenu";
export default function Footer() {
    const [subMenu,] = useState(footerSubMenu)

    return (
        <div className="flex w-full flex-col items-center justify-center mt-32">
            <div className="mb-[-110px] flex w-full flex-col items-center justify-center">
                <DetailsNews
                    isTrue={false}
                    Title="برای اخبار جدید به ما بپیوندید"
                    tag={"دریافت تخفیف ویژه"}
                />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center h-[1100px] md:h-[600px] w-full max-w-[1380px] lg:rounded-[40px] bg-[#F1F2F6]">
                <div className="flex flex-col w-11/12 md:w-[220px] items-center md:items-start leading-6 gap-7 mt-12 md:mt-6">
                    <img src="Images/logo-book-shop.png" alt="Logo" />
                    <p className="text-[#575757] tracking-widest md:-tracking-normal md:text-start text-center text-[16px] light">وقتی صبح ها کسی از خواب بیدارتون نمیکنه و شبها کسی منتظرتون نیست،و هر کاری که دوست دارین میتونین انجام بدین،اسمش آزادیه یا تنهایی؟</p>
                    <span className="text-current">چارلز بوکوفسکی</span>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-evenly w-8/12 lg:gap-[100px] md:mb-[20px]">
                    {subMenu.map(item => (
                        <FooterMenu key={item.id} {...item} />
                    ))}
                </div>
            </div>
            <div className="mt-[-75px] bg-current flex items-center flex-col md:flex-row-reverse gap-5 md:gap-28 justify-around z-50 w-11/12 max-w-[1280px] rounded-t-[40px] py-10 ">
                <div className="">
                    <LinkIcons isTrue={false} />
                </div>
                <div className="light text-white text-center">
                © توسعه داده شده توسط HAMEDPYN
                </div>
                <p className="text-[#EAEDFF] text-sm">hamedpyn@gmail.com</p>
            </div>
        </div>
    )
}
