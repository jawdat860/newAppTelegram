import { Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { FaPhone } from "react-icons/fa6";
import whatsapp from "../../assets/whatsapp.png";
import phone from "../../assets/phone.png";
import telegram from "../../assets/telegram.png";
import vk from "../../assets/vk.png";

function PhoneModel({ thems }) {
  console.log(thems);
  return (
    <Modal
      closeThreshold={1}
      header={<ModalHeader>Contact Us</ModalHeader>}
      modal
      style={{
        backgroundColor: "transparent",
        bottom: "0",
        display: "flex",
        alignContent: "space-between",
        minHeight: "100%",
      }}
      scrollLockTimeout={0}
      trigger={
        <li className="hover:scale-110 transition-transform duration-200 cursor-pointer">
          <FaPhone className="text-[20px] text-[#017ebc] " />
        </li>
      }
    >
      <div 
        id="genn-PhoneModel"
        className={`flex-[1]  ${
          thems === "light" ? "bg-white" : "bg-[#223242]"
        }`}
      >
        <div className={`p-4`}>
          <ul className="space-y-4">
            <li
              id="genn-PhoneModel-block-1"
              className={`flex items-center space-x-3 p-3 ${
                thems === "light"
                  ? " text-gray-800 bg-appColor rounded-[50px]"
                  : "bg-[#4e6174] text-white"
              }  shadow-md transition duration-200`}
            >
              <img src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
              <p className="text-lg font-semibold ">+7(978)519-80-94</p>
            </li>
            <li
              className={`flex items-center space-x-3 p-3 ${
                thems === "light"
                  ? " text-gray-800  bg-appColor rounded-[50px]"
                  : "bg-[#4e6174] text-white"
              }  shadow-md  transition duration-200`}
            >
              <img src={phone} alt="Phone" className="w-8 h-8" />
              <p className="text-lg font-semibold ">+7(978)519-80-94</p>
            </li>
            <li
              className={`flex items-center space-x-3 p-3 ${
                thems === "light"
                  ? "text-gray-800 bg-appColor rounded-[50px]"
                  : "bg-[#4e6174] text-white"
              }  shadow-md hover:bg-gray-200 transition duration-200`}
            >
              <img src={telegram} alt="Telegram" className="w-8 h-8" />
              <p className="text-lg font-semibold ">+7(978)519-80-94</p>
            </li>
            <li
              className={`flex items-center space-x-3 p-3 ${
                thems === "light"
                  ? "text-gray-800 bg-appColor rounded-[50px]"
                  : "bg-[#4e6174] text-white"
              }  shadow-md  transition duration-200`}
            >
              <img src={vk} alt="VK" className="w-8 h-8" />
              <p className="text-lg font-semibold ">+7(978)519-80-94</p>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}

export default PhoneModel;
