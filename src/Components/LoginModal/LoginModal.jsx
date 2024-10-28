import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import UserBasketContext from "../../Contexts/UserBasketContext";

export function LoginModal() {
  const {openModal, setOpenModal} = useContext(UserBasketContext);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal dismissible show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl kalameh text-gray-900 dark:text-white">وارد اکانت خود شوید.</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="ایمیل شما" />
              </div>
              <TextInput
                id="email"
                placeholder="امکان ورود وجود ندارد"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="رمز شما" />
              </div>
              <TextInput disabled id="password" type="password" />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox disabled id="remember" />
                <Label htmlFor="remember">من را به خاطر بسپار</Label>
              </div>
              <span className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                رمز خود را فراموش کردید؟
              </span>
            </div>
            <div className="w-full">
              <Button disabled>وارد اکانت خود شوید.</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              ثبت نام نکردید؟&nbsp;
              <span className="text-cyan-700 hover:underline dark:text-cyan-500">
                ساخت اکانت
              </span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
