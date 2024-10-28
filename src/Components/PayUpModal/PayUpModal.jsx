import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function PayUpModal({ isModal, setIsModal }) {


    return (
        <>
            <Modal dismissible show={isModal} size="md" onClose={() => setIsModal(false)} popup >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-500 dark:text-gray-200" />
                        <h3 className="mb-5 word text-lg font-normal text-red-500 dark:text-gray-400">
                            درحال حاضر خرید از سایت امکان پذیر نمیباشد
                        </h3>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
