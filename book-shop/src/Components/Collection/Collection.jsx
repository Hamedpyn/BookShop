import ComponentsTitle from "../ComponentsTitle/ComponentsTitle";

export default function Collection() {
    return (
        <div className="flex items-center flex-col w-full justify-center">
            <div>
                <ComponentsTitle tag={"دسته بندی"} title={"مجموعه کتاب"} extraText={"اکسترا"} />
            </div>
            <div className="flex max-w-[1400px] flex-col md:justify-center items-center mb-10 h-[550px] md:flex-row md:px-10 gap-7 md:gap-0">
                <div className="flex flex-col w-full md:w-[500px] items-center">
                    <div className="relative bg-[#105372] flex items-center md:items-start flex-col overflow-hidden w-11/12 grow md:w-5/6 rounded-[40px] h-[550px]">
                        <div className="absolute md:right-[30px] top-[30px] z-50">
                            <CollectionsButton title={"اکشن و ماجراجویی"} />
                        </div>
                        <img src="/Images/book2.png" className="absolute bottom-0 z-0 w-full h-full object-cover" alt="action" />
                    </div>
                </div>
                <div className="md:h-full flex-wrap flex flex-col md:justify-between items-center">

                    <div className="flex items-center flex-col md:w-full md:items-start md:flex-row gap-7">
                        <div className="relative bg-[#26292A] flex items-center md:items-start flex-col w-11/12 classic md:w-1/2 md:h-[260px] rounded-[40px] overflow-hidden">
                            <div className="absolute md:right-[30px] top-[30px]">
                                <CollectionsButton title={"کلاسیک"} />
                            </div>
                            <img className="w-full h-full object-cover" src="/Images/book3.png" alt="classic" />
                        </div>
                        <div className="relative bg-[#FF6600] flex items-center flex-col w-11/12 md:w-1/2 md:h-[230px] overflow-hidden rounded-[40px]">
                            <div className="absolute md:right-[30px] top-[30px]">
                                <CollectionsButton title={"کارگاه رمز و راز"} />
                            </div>
                            <img className="w-full h-full object-cover md:pr-10" src="/Images/book1.png" alt="secret" />
                        </div>
                    </div>
            </div>
        </div>
    )
}
