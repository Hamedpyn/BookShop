import { Alert } from "flowbite-react";
import AuthorsInfos from "../../Components/AuthorsInfos/AuthorsInfos";
import BooksPreView from "../../Components/BooksPreView/BooksPreView";
import Collection from "../../Components/Collection/Collection";
import CustomersSlider from "../../Components/CustomersSlider/CustomersSlider";
import MainHome from "../../Components/MainHome/MainHome";
import SpecialDiscount from "../../Components/SpecialDiscount/SpecialDiscount";
import { useContext } from "react";
import UserBasketContext from "../../Contexts/UserBasketContext";

export default function Home() {
  const { isModal } = useContext(UserBasketContext);

  return (
    <>
      <MainHome />
      <Collection />
      <BooksPreView />
      <CustomersSlider />
      <SpecialDiscount />
      <AuthorsInfos />
      <div className={`z-50 bold fixed top-[10px] right-[10px] transition-all ease-in-out duration-300 ${isModal ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"}`}>
        <Alert color="success" withBorderAccent>
          <span className="font-medium">محصول مورد نظر شما با موفقیت به سبد خرید اضافه شد.</span>
        </Alert>
      </div>
    </>
  )
}
