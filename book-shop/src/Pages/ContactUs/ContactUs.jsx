import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ContactsDetails from "../../Components/ContactsDetails/ContactsDetails";
import UserTicket from "../../Components/UserTicket/UserTicket";


export default function ContactUs() {
  return (
    <>
      <BreadCrumb title={"تماس با ما"} tag={"تماس با ما"} />
      <ContactsDetails />
      <UserTicket />
    </>
  )
}
