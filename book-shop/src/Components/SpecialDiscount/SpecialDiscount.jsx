import DetailsNews from "../DetailsNews/DetailsNews";

export default function SpecialDiscount() {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <DetailsNews
                Title={"۲۰ درصد تخفیف ویژه برای اولین خرید شما!"}
                isTrue={true}
            />
        </div>
    )
}
