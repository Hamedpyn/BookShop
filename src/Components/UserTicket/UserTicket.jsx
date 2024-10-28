import Location from "../Location/Location";

export default function UserTicket() {
    return (
        <div className="w-full lg:flex-row mt-28 justify-center flex flex-col items-center lg:px-5">
            <div className="w-11/12 bg-current rounded-[40px] py-10 max-w-[840px] lg:w-[840px] lg:h-[750px]">
                <form className="flex flex-col items-center gap-5 flex-wrap lg:w-full lg:gap-16 justify-center lg:items-start lg:pr-16">
                    <h2 className="kalameh text-5xl text-white text-center lg:pr-5">با ما در تماس باشید</h2>
                    <div className="flex flex-col items-center gap-5 w-full lg:flex-row">
                    <div className="flex flex-col items-center gap-2 w-full lg:items-start">
                        <label className="text-[#C5CBFE] pr-3 light" htmlFor="username">نام شما (*)</label>
                        <input placeholder="غیر فعال" disabled type="text" className="w-1/2 text-[#2d2d2d] rounded-md border-0  py-3 light lg:w-3/4" id="username" />
                    </div>
                    <div className="flex flex-col items-center gap-2 w-full lg:items-start">
                        <label className="text-[#C5CBFE] pr-3 light" htmlFor="email">
                            پست الکترونیکی (*)</label>
                        <input placeholder="غیر فعال" disabled type="text" className="w-1/2 text-[#2d2d2d] rounded-md border-0  py-3 light lg:w-3/4" id="email" />
                    </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 w-full lg:flex-row">
                    <div className="flex flex-col items-center gap-2 w-full lg:items-start">
                        <label className="text-[#C5CBFE] pr-3 light" htmlFor="subject">موضوع</label>
                        <input placeholder="غیر فعال" disabled type="text" className="w-1/2 text-[#2d2d2d] rounded-md border-0  py-3 light lg:w-3/4" id="subject" />
                    </div>
                    <div className="flex flex-col items-center gap-2 w-full lg:items-start">
                        <label className="text-[#C5CBFE] light" htmlFor="department">دپارتمان</label>
                        <select placeholder="غیر فعال" disabled id="department" className="text-[#2d2d2d] rounded-md border-0 py-3 light w-1/2 lg:w-3/4">
                            <option className="light" value="sell">دپارتمان فروش</option>
                            <option className="light" value="customers">مشتری مداری</option>
                            <option className="light" value="backup">پشتیبانی</option>
                            <option className="light" value="others">سایر</option>
                        </select>
                    </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-full lg:items-start">
                        <label className="text-start text-[#C5CBFE] pr-3 light" htmlFor="question">سوال شما</label>
                        <textarea placeholder="غیر فعال" disabled id="question" className="resize-none text-[#2d2d2d] rounded-md border-0 !h-[120px] w-1/2 light lg:w-[88%]"></textarea>
                    </div>
                    <div className="">
                        <button disabled className="py-3 px-6 text-white hover:text-current bg-[#27187e] hover:bg-white transition-all rounded-full">ارسال</button>
                    </div>
                </form>
            </div>
            <div className="w-full lg:w-2/3 lg:rounded-[40px] overflow-hidden lg:mr-[-50px] lg:max-w-[490px]">
                <Location />
            </div>
        </div>
    )
}
