/* eslint-disable react-hooks/exhaustive-deps */
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import { CiCircleCheck } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import UserBasketContext from "../../Contexts/UserBasketContext";
import { useCallback, useContext, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Spinner } from 'flowbite-react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { allBooksDetails } from '../../datas/Datas';

export default function EachBookPage() {
    window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });
    const [isClicked, setIsClicked] = useState(false)
    const [isSpinner, setIsSpinner] = useState(false);
    const { bookBasket, setBookBasket, setIsModal } = useContext(UserBasketContext);

    const addToBasket = useCallback((itemId, itemTitle) => {
        const isInBasket = bookBasket.some(item => item.title === itemTitle);

        if (isInBasket) {
            const updatedCart = bookBasket.map(item =>
                item.title === itemTitle ? { ...item, quantity: item.quantity + 1 } : item
            );
            setBookBasket(updatedCart);
        } else {
            const findItem = allBooksDetails.find(item => item.id === itemId);
            if (findItem) {
                const { title, img, price } = findItem;
                const newItemToBasket = { id: bookBasket.length + 1, title, img, price, quantity: 1 };
                setBookBasket(prev => [newItemToBasket, ...prev]);
            }
        }

        setIsSpinner(true); // Start spinner

        setTimeout(() => {
            setIsSpinner(false); // Stop spinner

            setIsModal(true); // Show modal after spinner stops
            setIsClicked(true)

            setTimeout(() => {
                setIsModal(false); // Hide modal after 2000ms
            }, 3000);
        }, 2000);
    }, [bookBasket, setBookBasket]);
    let params = useParams()
    let findBook = allBooksDetails.find(item => item.id == params.id)



    return (
        <div>
            <BreadCrumb conditionalTag={findBook.title} title={findBook.title} tag={"محصولات"} />
            <div className="flex flex-col items-center justify-center mt-20 md:flex-row relative md:px-5 md:gap-20 md:items-start navbar-logo">
                <div className={`border w-10/12 rounded-xl overflow-hidden md:w-1/2 max-w-[600px] md:mt-12 md:sticky top-0`}>
                    <img src={findBook.img} alt={findBook.title} />
                </div>
                <div className="flex flex-col items-start mt-10 w-10/12 md:w-1/2">
                    <div className="flex flex-col items-start gap-5 border-b pb-5">
                        <h2 className='kalameh text-4xl'>{findBook.title}</h2>
                        <h3 className='text-current text-2xl'>{findBook.price} هزار تومان</h3>
                        <p className='light text-[16px] w-11/12 mb-14 text-[#676767] max-w-[600px]'>البته لازم است توجه کنیم که هر کتاب می‌تواند در چند ژانر قرار بگیرد. در واقع نویسنده با ترکیب ژانرهای مختلف به گستردگی رمان خود و پیچیدگی شخصیت‌ها و رفتارهای آنان پرداخته است. همچنین باید گفت که دسته‌بندی مشخص و قطعی برای انواع ژانرهای کتاب وجود ندارد.</p>
                        {isClicked ? (
                            <button
                                className="bg-current sm:bottom-[-25px] sm:px-7 px-10 py-3 sm:py-2 text-lg rounded-full text-white hover:bg-black transition-all ">
                                <Link to={"/Basket"} className="w-full h-full flex items-center gap-2">
                                    <FaCheck className="w-6 h-6" />
                                    <span className="regular text-xl"> مشاهده سبد خرید</span>
                                </Link>
                            </button>
                        ) : (
                            <button
                                className={`bg-current sm:px-7 flex px-10 py-3 sm:py-2 text-lg justify-center gap-2 rounded-full text-white hover:bg-black transition-all items-center`}
                                disabled={isSpinner}
                                onClick={() => addToBasket(findBook.id,findBook.title)}
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
                    <div className="flex flex-row items-center gap-10 border-b w-full py-5">
                        <div className="flex flex-col items-start gap-2">
                            <span className='text-sm'>برند</span>
                            <span className='text-sm'>کد محصول</span>
                            <span className='text-sm'>وضعیت</span>
                            <span className='text-sm'>دسته بندی</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className='text-sm light'>اکسترا</span>
                            <span className='text-sm light'>{findBook.code}</span>
                            <span className='text-sm light'>{findBook.status}</span>
                            <span className='text-sm light'>{findBook.category}</span>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="flex items-center gap-4">
                            <CiCircleCheck className='text-xl' />
                            <span className='light'>ارسال رایگان برای سفارش های بالای ۱۰۰ تومان</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <CiCircleCheck className='text-xl' />
                            <span className='light'>۲۱ روز بازپرداخت و بازگشت آسان</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <CiCircleCheck className='text-xl' />
                            <span className='light'> محصول دارای مالیات و عوارض گمرکی نیست</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
