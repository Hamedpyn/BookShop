import { useContext, useState, useCallback, useMemo } from 'react';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { Table } from "flowbite-react";
import { AiOutlineDelete } from "react-icons/ai";
import UserBasketContext from '../../Contexts/UserBasketContext';
import { BsCartX } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { PayUpModal } from '../../Components/PayUpModal/PayUpModal';
import { motion } from 'framer-motion';

export default function UserBasket() {

  const [isModal, setIsModal] = useState(false);
  const contextData = useContext(UserBasketContext);

  const removeItem = useCallback((itemId) => {
    const newBasket = contextData.bookBasket.filter(item => item.id !== itemId);
    contextData.setBookBasket(newBasket);
  }, [contextData]);

  const increaseQuantity = useCallback((itemId) => {
    const updatedQuantity = contextData.bookBasket.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    contextData.setBookBasket(updatedQuantity);
  }, [contextData]);

  const decreaseQuantity = useCallback((itemId) => {
    const doesExist = contextData.bookBasket.some(i => i.quantity >= 2);
    if (doesExist) {
      const updatedQuantity = contextData.bookBasket.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
      contextData.setBookBasket(updatedQuantity);
    }
  }, [contextData]);

  const getTotalPrice = useMemo(() => {
    return contextData.bookBasket.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [contextData.bookBasket]);

  const openModal = useCallback(() => {
    setIsModal(true);
  }, []);

  return (
    <div>
      <div>
        <BreadCrumb tag={"سبد خرید"} title={"سبد خرید"} />
      </div>
      <div>
        {contextData.bookBasket.length ? (
          <>
          <motion.div
          className='flex flex-col mt-20 md:mt-10 md:flex-row w-full items-center gap-16 flex-wrap justify-center'
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}>
            <Table striped className='md:pt-10 flex md:flex-col px-10 drop-shadow-none'>
              <Table.Head className='hidden md:flex items-center justify-center md:w-full'>
                <Table.HeadCell className='text-[16px] text-center thWidth md:w-[100px] 2xl:!w-[220px]'>محصول</Table.HeadCell>
                <Table.HeadCell className='text-[16px] text-center thWidth md:w-[100px] 2xl:!w-[220px]'>اسم</Table.HeadCell>
                <Table.HeadCell className='text-[16px] text-center thWidth md:w-[100px] 2xl:!w-[220px]'>قیمت</Table.HeadCell>
                <Table.HeadCell className='text-[16px] text-center thWidth md:w-[100px] 2xl:!w-[220px]'>تعداد</Table.HeadCell>
                <Table.HeadCell className='text-[16px] text-center thWidth md:w-[100px] 2xl:!w-[220px]'>جمع جزء</Table.HeadCell>
                <Table.HeadCell className='text-[16px] text-center thWidth md:w-[100px] 2xl:!w-[220px]'>حذف</Table.HeadCell>
              </Table.Head>
              <Table.Body className="w-full">
                {contextData.bookBasket.map(books => (
                  <Table.Row key={books.id} className="bg-black border shadow-xl flex items-center flex-row md:flex-nowrap flex-wrap justify-center trWidth md:w-[600px] 2xl:!w-[1320px]">
                    <Table.Cell className='md:text-start md:w-full flex items-center justify-center'>
                      <img className='w-3/5 md:w-[70px]' src={books.img} alt="book cover" />
                    </Table.Cell>
                    <Table.Cell className='md:text-center w-full sm:text-[16px] text-center'>
                      <span className='md:hidden'>اسم کتاب: </span>
                      {books.title}
                    </Table.Cell>
                    <Table.Cell className='md:text-center w-1/2 sm:text-[16px] md:w-full text-center'>
                      <span className='md:hidden'>قیمت:</span>
                      {books.price} هزار تومان
                    </Table.Cell>
                    <Table.Cell className='md:text-center w-1/2 sm:text-[16px] md:w-full text-center'>
                      <span className='md:hidden'>تعداد: </span>
                      <span onClick={() => increaseQuantity(books.id)} className='bg-[#f9f9f9] text-current border px-2 transition-all hover:bg-current hover:text-white ml-1 cursor-pointer rounded-full'>+</span>
                      {books.quantity}
                      <span onClick={() => decreaseQuantity(books.id)} className='bg-[#f9f9f9] text-current border px-2 transition-all hover:bg-current hover:text-white cursor-pointer rounded-full mr-1'>-</span>
                    </Table.Cell>
                    <Table.Cell className='md:text-center w-1/2 sm:text-[16px] md:w-full text-center'>
                      <span className='md:hidden'>جمع جزء:</span>
                      {books.price * books.quantity}000
                    </Table.Cell>
                    <Table.Cell onClick={() => removeItem(books.id)} className="md:text-center w-1/2 sm:text-[16px] md:w-full justify-center flex-wrap flex items-end">
                      <span className='md:hidden'>حذف محصول: </span>
                      <AiOutlineDelete className='text-red-600 cursor-pointer text-2xl' />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            
            <div className="flex flex-col items-center w-full">
              <div className="w-11/12 max-w-[500px] flex gap-5 flex-col items-center h-[340px] sm:h-[260px] rounded-[40px] bg-[#F1F2F6]">
                <h3 className='bg-current kalameh text-xl text-white transition-all rounded-full text-center w-11/12 py-3 mt-5 mx-5'>جمع کل سبد خرید</h3>
                <table className='border flex w-2/3'>
                  <tr className='border w-2/4 px-5 py-4 text-center'>
                    <th className='light text-xl w-1/2 text-center'>مجموع</th>
                  </tr>
                  <tr className='border w-3/4 px-5 py-4'>
                    <td className='text-lg word pr-1 text-center w-3/4'>{getTotalPrice}000 تومان</td>
                  </tr>
                </table>
                <div className="flex mt-5 w-11/12 sm:justify-between gap-3 sm:flex-row-reverse flex-col-reverse items-center">
                  <Link to='/Books'>
                    <button className='bg-current text-white transition-all hover:bg-black rounded-full w-[120px] h-12'>ادامه خرید</button>
                  </Link>
                  <button onClick={openModal} className='bg-current text-white transition-all hover:bg-black rounded-full w-[180px] h-12'>ادامه جهت تسویه حساب</button>
                </div>
              </div>
              <PayUpModal isModal={isModal} setIsModal={setIsModal} />
            </div>
            </motion.div>
          </>
        ) : (
          <div className="flex items-center flex-col gap-5">
            <span><BsCartX className='text-[150px] sm:text-[200px]' /></span>
            <h2 className="kalameh text-3xl">سبد خرید شما خالی است!</h2>
            <h4 className="light text-xl text-gray-400">زمان اون رسیده که خریدتون رو شروع کنید</h4>
            <Link to='/Books'>
              <button className='mt-20 bg-current text-white transition-all hover:bg-black rounded-full w-[170px] h-12'>بازگشت به فروشگاه</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
