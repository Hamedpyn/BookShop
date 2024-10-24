/* eslint-disable react/prop-types */


export default function FooterMenu({title,firstSubMenu,secSubMenu,thirdSubMenu,forthSubMenu}) {
    return (
        <div className="flex relative md:border-r h-[220px] md:pr-14 border-[#dedede] flex-col items-center gap-10 md:items-start justify-center">
            <span className="afterEffect text-black kalameh text-2xl">{title}</span>
            <ul className="flex flex-col items-center md:items-start gap-1">
                <li className="light text-[16px] cursor-pointer transition-all hover:text-current text-[#00000080]">{firstSubMenu}</li>
                <li className="light text-[16px] cursor-pointer transition-all hover:text-current text-[#00000080]">{secSubMenu}</li>
                <li className="light text-[16px] cursor-pointer transition-all hover:text-current text-[#00000080]">{thirdSubMenu}</li>
                <li className="light text-[16px] cursor-pointer transition-all hover:text-current text-[#00000080]">{forthSubMenu}</li>
            </ul>
        </div>
    )
}
