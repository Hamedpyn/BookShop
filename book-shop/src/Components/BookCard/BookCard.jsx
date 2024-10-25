/* eslint-disable react/prop-types */

import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function BookCard(props) {
    return (
        <div className="relative flex items-center flex-col">
            <Link to={`/Books/${props.id}`} className={ `bg-white rounded-3xl w-10/12 sm:w-1/2 md:w-[300px] group flex items-center flex-col ${props.isTrue ?"border md:w-[400px]" :""}`}>
                <div className="">
                    <img className={`h-full lg:w-[270px] rounded-3xl bg-cover ${props.isTrue ? "lg:w-[350px]" : ""}`} src={props.img} alt={props.title} />
                </div>
                <div className="border-t w-[80%] gap-3 h-32">
                    <div className="mt-5 flex items-end flex-wrap justify-between">
                        <h3 className="cursor-pointer text-[26px] kalameh group-hover:text-current transition-all ease-linear">{props.title}</h3>
                        <span className="bold flex gap-1 opacity-70 group-hover:opacity-100 transition-all ease-linear">
                            {props.price}
                            <span>
                                هزار تومان
                            </span>
                        </span>
                    </div>
                </div>
            </Link>
                <div className="bg-current absolute bottom-[-22px] sm:bottom-[-25px] sm:px-7 flex px-10 py-3 sm:py-2 text-lg justify-center gap-2 rounded-full text-white cursor-pointer hover:bg-black items-center transition-all">
                    <RiShoppingCartLine className="w-6 h-6" />
                    <span className="regular text-xl">افزودن به سبد خرید</span>
                </div>
        </div>
    )
}
