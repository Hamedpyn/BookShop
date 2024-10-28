import { Link } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { motion } from "framer-motion";

export default function NotFoundPage() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    return (
        <div>
            <div className="">
                <BreadCrumb title={"صفحه مورد نظر شما پیدا نشد"} tag={404} />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}>
                <div className="flex mt- flex-col mt-10 md:mt-0 gap-3 items-center justify-center">
                    <h1 className="lg:text-[300px] mb-[-30px] sm:mb-[-60px] md:text-[250px] NotFound text-[100px] sm:text-[200px] lg:mb-[-140px]">404</h1>
                    <span className="kalameh text-2xl sm:text-4xl text-center w-1/3">صفحه مورد نظر پیدا نشد!
                        کلیدواژه مورد نظر را جستجو کنید.</span>
                    <Link to={'/'} className="bg-current text-white hover:bg-black transition-all px-6 rounded-full py-3">بازگشت به صفحه اصلی</Link>
                </div>
            </motion.div>
        </div>
    )
}
