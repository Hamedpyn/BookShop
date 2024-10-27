import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ContactsDetails from "../../Components/ContactsDetails/ContactsDetails";
import UserTicket from "../../Components/UserTicket/UserTicket";
import { motion } from "framer-motion";

export default function ContactUs() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}>
        <BreadCrumb title={"تماس با ما"} tag={"تماس با ما"} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}>
        <ContactsDetails />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}>
        <UserTicket />
      </motion.div>
    </>
  )
}
