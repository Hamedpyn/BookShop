/* eslint-disable react/prop-types */
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { useState } from "react";

export default function LinkIcons({ isTrue }) {
    const [icons,] = useState([
        { id: 1, icon: <FaFacebookF />, bg: "#3b5998" },
        { id: 2, icon: <FaXTwitter />, bg: "#000" },
        { id: 3, icon: <FaInstagram />, bgHover: true },
    ]);
    return (
        <>
            <div className="flex flex-wrap justify-center gap-2">
                {icons.map(item => (
                    <div
                        key={item.id}
                        className={`cursor-pointer transition-all duration-300 menuButton bg-white flex justify-center items-center ${item.bgHover ? 'iconInsta' : ''}`}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = item.bgHover || item.bg
                            e.currentTarget.style.color = "#fff"
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = "#fff"
                            e.currentTarget.style.color = "#000"
                        }}
                    >
                        <span>{item.icon}</span>
                    </div>
                ))}
            </div>
            {isTrue && (
                <div>
                    <span className="text-white word">توسعه داده شده توسط <span id="enFont">HAMEDPYN</span>
                    </span>
                </div>
            )}
        </>
    );
}
