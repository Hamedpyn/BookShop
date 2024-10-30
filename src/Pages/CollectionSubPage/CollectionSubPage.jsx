import { Navigate, useParams } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { allBooksDetails } from "../../datas/Datas";
import BookCard from "../../Components/BookCard/BookCard";
import { useCallback, useContext, useId } from "react";
import UserBasketContext from "../../Contexts/UserBasketContext";
import { Alert } from "flowbite-react";

export default function CollectionSubPage() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  let params = useParams()
  let findItems = allBooksDetails.find(item => item.category == params.category.toLowerCase())
  const { bookBasket, setBookBasket, isModal } = useContext(UserBasketContext);

  const uniqueId = useId();

  const preViewToBasket = useCallback((itemId, itemTitle) => {
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
        const newItemToBasket = { id: `${itemId}-${uniqueId}`, title, img, price, quantity: 1 };
        setBookBasket(prev => [newItemToBasket, ...prev]);
      }
    }
  }, [bookBasket, setBookBasket, uniqueId]);

  return (

    <>
      {
        findItems ? (
          <>
            <div>
              <div className="">
                <BreadCrumb title={"محصولات"} tag={"محصولات"} conditionalTag={findItems.category} />
              </div>
              <div className="flex flex-col mt-20 items-center gap-16 flex-wrap md:flex-row justify-center">
                <BookCard onItem={() => preViewToBasket(findItems.id, findItems.title)} isTrue={true} key={findItems.id} {...findItems} />
              </div>
              <div className={`z-50 bold fixed top-[10px] right-[10px] transition-all ease-out duration-300 ${isModal ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"}`}>
                <Alert color="success" withBorderAccent>
                  <span className="font-medium">محصول مورد نظر شما با موفقیت به سبد خرید اضافه شد.</span>
                </Alert>
              </div>
            </div>
          </>
        ) : (
          <Navigate to={"*"} />
        )
      }
    </>
  )
}
