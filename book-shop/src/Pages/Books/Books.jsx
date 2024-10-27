import { useContext, useEffect, useState, useMemo, useCallback } from "react";
import BookCard from "../../Components/BookCard/BookCard";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { allBooksDetails } from "../../datas/Datas";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import UserBasketContext from "../../Contexts/UserBasketContext";
import { Alert } from "flowbite-react";

export default function Books() {
  const [books] = useState(allBooksDetails);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { bookBasket, setBookBasket, isModal } = useContext(UserBasketContext);

  const pageSize = 6;
  const pageCount = useMemo(() => Math.ceil(books.length / pageSize), [books.length]);
  const pagesNumber = useMemo(() => Array.from(Array(pageCount).keys()), [pageCount]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Filter books based on current page
  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    setFilteredBooks(books.slice(startIndex, startIndex + pageSize));
  }, [currentPage, books]);

  const PaginateBooks = useCallback((buttonNum) => setCurrentPage(buttonNum), []);

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
        const newItemToBasket = { id: bookBasket.length, title, img, price, quantity: 1 };
        setBookBasket(prev => [newItemToBasket, ...prev]);
      }
    }
  }, [bookBasket, setBookBasket]);

  return (
    <div>
      <BreadCrumb title={"فروشگاه"} tag={"محصولات"} />

      <div className="flex flex-col mt-20 items-center gap-16 flex-wrap md:flex-row justify-center">
        {filteredBooks.map(item => (
          <BookCard onItem={() => preViewToBasket(item.id, item.title)} isTrue={true} key={item.id} {...item} />
        ))}
      </div>

      <div className="flex items-center justify-center w-full mt-24 gap-2 px-2 flex-wrap">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="border w-[65px] h-[65px] transition-all hover:bg-current rounded-full flex items-center justify-center group"
          >
            <HiArrowLongRight className="text-xl text-current group-hover:text-white" />
          </button>
        )}

        {pagesNumber.map(number => (
          <button
            onClick={() => PaginateBooks(number + 1)}
            key={number + 1}
            className={`border w-[65px] h-[65px] transition-all rounded-full text-sm ${currentPage === number + 1 ? "bg-current text-white" : "bg-white text-current"}`}
          >
            {number + 1}
          </button>
        ))}

        {currentPage < pageCount && (
          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="border w-[65px] h-[65px] transition-all hover:bg-current rounded-full flex items-center justify-center group"
          >
            <HiArrowLongLeft className="text-xl text-current group-hover:text-white" />
          </button>
        )}
      </div>
      <div className={`z-50 bold fixed top-[10px] right-[10px] transition-all ease-out duration-300 ${isModal ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"}`}>
        <Alert color="success" withBorderAccent>
          <span className="font-medium">محصول مورد نظر شما با موفقیت به سبد خرید اضافه شد.</span>
        </Alert>
      </div>
    </div>
  );
}
