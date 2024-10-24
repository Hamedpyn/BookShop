import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

export default function BreadCrumb({ title, tag }) {
    return (
        <div className="w-full breadCrumb bg-[#F8F8FA] h-[100px] flex items-end justify-start md:justify-between">
            <div className="md:w-11/12 justify-between pb-5 flex items-center">
                <h2 className="kalameh text-2xl pr-5 xl:pr-12 navbar-logo">{title}</h2>
                <div className="hidden md:flex items-center flex-row-reverse gap-2">
                    <div>
                        <span
                            className="text-sm text-[#333]"
                        >{tag}</span>
                    </div>
                    <div>
                        <FaChevronLeft className="text-[12px] text-[#333]" />
                    </div>
                    <div>
                        <Link to={"/"}>
                            <AiFillHome className="text-lg" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
