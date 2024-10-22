import ComponentsTitle from '../ComponentsTitle/ComponentsTitle'
import SwiperSlider from '../SwiperSlider/SwiperSlider'

export default function CustomersSlider() {
  return (
    <div className='mb-28'>
      <div>
        <ComponentsTitle tag={"نظرات و پیشنهادات"} title={"مشتریان ما چه می گویند؟"} />
      </div>
      <div className="flex justify-center items-center w-full h-[500px] mt-[-60px]">
        {/* Slider */}
        <SwiperSlider />
      </div>
    </div>
  )
}
