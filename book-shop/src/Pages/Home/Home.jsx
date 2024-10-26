import AuthorsInfos from "../../Components/AuthorsInfos/AuthorsInfos";
import BooksPreView from "../../Components/BooksPreView/BooksPreView";
import Collection from "../../Components/Collection/Collection";
import CustomersSlider from "../../Components/CustomersSlider/CustomersSlider";
import MainHome from "../../Components/MainHome/MainHome";
import SpecialDiscount from "../../Components/SpecialDiscount/SpecialDiscount";

export default function Home() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return (
    <>
      <MainHome />
      <Collection />
      <BooksPreView />
      <CustomersSlider />
      <SpecialDiscount />
      <AuthorsInfos />
    </>
  )
}
