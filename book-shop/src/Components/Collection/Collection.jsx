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
            </div>
        </div>
    )
}
