/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import BookCard from "../../Components/BookCard/BookCard";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { allBooksDetails } from "../../Components/datas/Datas"
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Books() {
  const [books,] = useState(allBooksDetails)
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredBooks, setFilteredBooks] = useState([])
  let pageSize = 6
  let pagesNumber = null;

  useEffect(() => {
    let endIndex = pageSize * currentPage
    let startIndex = endIndex - pageSize
    let allBooks = books.slice(startIndex, endIndex)
    setFilteredBooks(allBooks)
  }, [currentPage])

  const PaginateBooks = (buttonNum) => {
    setCurrentPage(buttonNum)
    window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });
  };
  const pageCount = Math.ceil(books.length / pageSize)
  
  pagesNumber = Array.from(Array(pageCount).keys())

  return (
    <div className="">
      <div className="">
        <BreadCrumb title={"فروشگاه"} tag={"محصولات"} />
      </div>
      <div className="flex flex-col mt-20 items-center gap-16 flex-wrap md:flex-row justify-center">
        {filteredBooks.map(item => (
          <BookCard isTrue={true} key={item.id} {...item} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full mt-24 gap-2 px-2 flex-wrap">
        {currentPage > 1 && (
          <button onClick={() => {
            setCurrentPage(prev => prev - 1)
            window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });

          }} className="border w-[65px] h-[65px] transition-all hover:bg-current rounded-full flex items-center justify-center group">
          <HiArrowLongRight className="text-xl text-current group-hover:text-white" />
          </button>
        )}
        {pagesNumber.map(number => (
          <button onClick={() => PaginateBooks(number + 1)} key={number + 1} className={`border w-[65px] h-[65px] transition-all outline-none hover:text-white hover:bg-current rounded-full text-sm ${currentPage === number + 1 ? "bg-current text-white" : "bg-white text-current"}`}>{number + 1}</button>
        ))}
        {currentPage !== pageCount && (
          <button onClick={() => {
            setCurrentPage(prev => prev + 1)
            window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });

          }} className="border w-[65px] h-[65px] transition-all hover:bg-current rounded-full flex items-center justify-center group">
          <HiArrowLongLeft className="text-xl text-current group-hover:text-white" />
          </button>
        )}
      </div>
    </div>
  )
}