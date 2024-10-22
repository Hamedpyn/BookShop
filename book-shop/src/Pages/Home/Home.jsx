import BooksPreView from "../../Components/BooksPreView/BooksPreView";
import Collection from "../../Components/Collection/Collection";
import CustomersSlider from "../../Components/CustomersSlider/CustomersSlider";
import MainHome from "../../Components/MainHome/MainHome";
import SpecialDiscount from "../../Components/SpecialDiscount/SpecialDiscount";

export default function Home() {
  return (
    <>
      <MainHome />
      <Collection />
      <BooksPreView />
      <CustomersSlider />
      <SpecialDiscount />
    </>
  )
}
