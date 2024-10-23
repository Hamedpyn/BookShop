import DetailsNews from "../DetailsNews/DetailsNews";

export default function Footer() {
    return (
        <div className="flex w-full flex-col items-center justify-center my-32">
            <div className="flex w-full flex-col items-center justify-center">
                <DetailsNews
                    isTrue={false}
                    Title="برای اخبار جدید به ما بپیوندید"
                    tag={"دریافت تخفیف ویژه"}
                />
            </div>
            <div className=""></div>
            <div className=""></div>
        </div>
    )
}
