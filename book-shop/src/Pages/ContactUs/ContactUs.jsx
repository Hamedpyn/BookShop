import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ContactsDetails from "../../Components/ContactsDetails/ContactsDetails";
import UserTicket from "../../Components/UserTicket/UserTicket";


export default function ContactUs() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return (
    <>
      <BreadCrumb title={"تماس با ما"} tag={"تماس با ما"} />
      <ContactsDetails />
      <UserTicket />
    </>
  )
}
