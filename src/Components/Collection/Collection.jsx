import CollectionsButton from "../CollectionsButton/CollectionsButton";
import ComponentsTitle from "../ComponentsTitle/ComponentsTitle";

export default function Collection() {
    return (
        <div className="flex items-center flex-col w-full justify-center">
            <div className="text-center">
                <ComponentsTitle tag={"دسته بندی"} title={"مجموعه کتاب"} extraText={"اکسترا"} />
            </div>
            <div className="flex h-auto md:h-[550px] max-w-[1400px] flex-col md:justify-center items-center mb-10 md:flex-row md:px-10 gap-7 md:gap-0">
                <div className="flex flex-col w-full md:w-[500px] items-center">
                    <div className="relative bg-[#105372] flex items-center md:items-start flex-col overflow-hidden w-11/12 grow md:w-5/6 rounded-[40px] h-[550px]">
                        <div className="absolute md:right-[30px] top-[30px] z-50">
                            <CollectionsButton title={"اکشن و ماجراجویی"} />
                        </div>
                        <img src="Images/book2.png" className="absolute bottom-0 z-0 w-full h-full object-cover" alt="action" />
                    </div>
                </div>
                <div className="md:h-full flex-wrap flex flex-col md:justify-between items-center">

                    <div className="flex items-center flex-col md:w-full md:items-start md:flex-row gap-7">
                        <div className="relative bg-[#26292A] flex items-center md:items-start flex-col w-11/12 classic md:w-1/2 md:h-[260px] rounded-[40px] overflow-hidden">
                            <div className="absolute md:right-[30px] top-[30px]">
                                <CollectionsButton title={"کلاسیک"} />
                            </div>
                            <img className="w-full h-full object-cover" src="Images/book3.png" alt="classic" />
                        </div>
                        <div className="relative bg-[#FF6600] flex items-center flex-col w-11/12 md:w-1/2 md:h-[230px] overflow-hidden rounded-[40px]">
                            <div className="absolute md:right-[30px] top-[30px]">
                                <CollectionsButton title={"کارگاه رمز و راز"} />
                            </div>
                            <img className="w-full h-full object-cover md:pr-10" src="Images/book1.png" alt="secret" />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center md:flex-row gap-7 mt-7 md:mt-0 ">
                        <div className="relative bg-[#758BFD] flex items-center md:items-start flex-col w-11/12 md:w-4/6 md:h-[260px] rounded-[40px] h-[250px] overflow-hidden">
                            <div className="absolute md:right-[30px] top-[30px] z-50">
                                <CollectionsButton ny={true} title={"زمان هایی در نیویورک پر فروش ترین ها"} />
                            </div>
                            <img className="w-[500px] h-[250px] z-0 absolute top-[20px] lg:right-[50px] object-cover" src="Images/books2.png" alt="newYork" />
                        </div>
                        {/* bio */}
                        <div className="relative bg-[#F1F2F6] flex items-center md:items-start flex-col md:w-2/6 md:h-[260px] overflow-hidden w-11/12 rounded-[40px] h-[250px]">
                            <div className="absolute md:right-[30px] top-[30px] z-50">
                                <CollectionsButton title={"بیوگرافی"} bio={true} />
                            </div>
                            <img className="absolute bottom-0 z-0 left-0 w-[400px] md:w-full md:h-full object-cover" src="Images/biography.png" alt="biography" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
