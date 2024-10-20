import { FaChevronLeft } from "react-icons/fa"

export default function CollectionsButton({ title, bio,ny }) {
    return (
        <div className="flex flex-col items-center z-50 gap-5">
            <div>
                <h4 className={`${!bio ? "text-white text-xl" : "text-black text-xl"} ${ny && "w-[200px] text-center "}`}>{title}</h4>
            </div>
            <div className="border border-white cursor-pointer rounded-full py-1 px-1 text-white flex flex-row-reverse items-center gap-2 group hover:bg-white transition-all">
                <span className="text-sm ml-2 group-hover:text-current">مشاهده مجموعه</span>
                <span className="border rounded-full group-hover:bg-current text-[8px] p-2"><FaChevronLeft /></span>
            </div>
        </div>
    )
}
