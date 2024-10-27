/* eslint-disable react/prop-types */

import { Spinner } from "flowbite-react";
import { useContext, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserBasketContext from "../../Contexts/UserBasketContext";

export default function BookCard(props) {
    const [isSpinner, setIsSpinner] = useState(false);
    const { setIsModal } = useContext(UserBasketContext);
    const [isInBasket, setIsInBasket] = useState(false)
    
    const addToBasket = () => {

        setIsSpinner(true); // Start spinner

        setTimeout(() => {
            setIsSpinner(false); // Stop spinner
            props.onItem(); // Add item to basket

            setIsModal(true); // Show modal after spinner stops
            setIsInBasket(true)

            setTimeout(() => {
                setIsModal(false); // Hide modal after 2000ms
            }, 3000);
        }, 2000);
    };


    return (
        <div className="relative flex items-center flex-col">
            <Link
                to={`/Books/${props.id}`}
                className={`bg-white rounded-3xl w-10/12 sm:w-1/2 md:w-[300px] group flex items-center flex-col ${props.isTrue ? "border md:w-[400px]" : ""}`}
            >
                <div>
                    <img
                        className={`h-full lg:w-[270px] rounded-3xl bg-cover ${props.isTrue ? "lg:w-[350px]" : ""}`}
                        src={props.img}
                        alt={props.title}
                    />
                </div>
                <div className="border-t w-[80%] gap-3 h-32">
                    <div className="mt-5 flex items-end flex-wrap justify-between">
                        <h3 className="cursor-pointer text-[26px] kalameh group-hover:text-current transition-all ease-linear">
                            {props.title}
                        </h3>
                        <span className="bold flex gap-1 opacity-70 group-hover:opacity-100 transition-all ease-linear">
                            {props.price} <span>هزار تومان</span>
                        </span>
                    </div>
                </div>
            </Link>

            {isInBasket ? (
                <button
                    className="bg-current absolute bottom-[-22px] sm:bottom-[-25px] sm:px-7 px-10 py-3 sm:py-2 text-lg rounded-full text-white hover:bg-black transition-all "
                >
                    <Link to={"/Basket"} className="w-full h-full flex items-center gap-2">
                        <FaCheck className="w-6 h-6" />
                        <span className="regular text-xl"> مشاهده سبد خرید</span>
                    </Link>
                </button>
            ) : (
                <button
                    className="bg-current absolute bottom-[-22px] sm:bottom-[-25px] sm:px-7 flex px-10 py-3 sm:py-2 text-lg justify-center gap-2 rounded-full text-white hover:bg-black transition-all items-center"
                    onClick={() => addToBasket(props.title)}
                    disabled={isSpinner} // Disables button while spinner is active
                >
                    {isSpinner ? (
                        <Spinner aria-label="Adding to cart" />
                    ) : (
                        <>
                            <RiShoppingCartLine className="w-6 h-6" />
                            <span className="regular text-xl">افزودن به سبد خرید</span>
                        </>
                    )}
                </button>
            )}
        </div>
    );
}
