import { Swiper, SwiperSlide } from 'swiper/react';
import { usersComments } from "../datas/Datas";
import 'swiper/css';
import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function SwiperSlider() {
    const [usersSlider] = useState(usersComments);
    const swiperRef = useRef(null); // Create a ref to hold the swiper instance

    // Handle the swiper initialization
    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper; // Store the swiper instance
    };

    return (
        <Swiper
            centeredSlides={true}
            loop={true}
            onInit={handleSwiperInit} // Pass the handleSwiperInit function
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 0 },
                768: { slidesPerView: 2.5, spaceBetween: -30 },
                1024: { slidesPerView: 3.5, spaceBetween: -50 },
            }}
        >
            {usersSlider.map(item => (
                <SwiperSlide
                    key={item.id}
                    className='relative opacity-70 rounded-[40px] flex justify-center items-center py-20'>
                    <div className="bg-white relative rounded-[40px] py-16 w-3/4 shadow-[0px_33px_76px_0px_rgba(12,12,12,0.06)] text-center flex flex-col items-center">
                        <div className="flex flex-col px-5 items-center gap-5 mb-5">
                            <p className='light text-xl w-full text-center'>{item.title}</p>
                            <div className='flex items-center gap-3'>
                                <span className='text-current'>{item.userName}</span>
                                <span className='regular text-xl'>{item.userJob}</span>
                            </div>
                        </div>
                        <div className="rounded-full border-[9px] border-[#F7F7F7] overflow-hidden absolute bottom-[-35px]">
                            <img className='w-[80px]' src={item.img} alt="User Image" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="flex justify-center items-center gap-2">
                <button 
                    className='bg-current z-50 text-white rounded-2xl p-5 text-lg' 
                    onClick={() => swiperRef.current && swiperRef.current.slidePrev()} // Use the ref to call slideNext
                    aria-label="Next Slide"
                >
                    <FaChevronRight className='w-5 h-5' />
                </button>
                <button 
                    className='bg-current z-50 text-white rounded-2xl p-5 text-lg' 
                    onClick={() => swiperRef.current && swiperRef.current.slideNext()} // Use the ref to call slidePrev
                    aria-label="Previous Slide"
                >
                    <FaChevronLeft className='w-5 h-5' />
                </button>
            </div>
        </Swiper>
    );
}
