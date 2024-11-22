import cartIco from "../../assets/ico/ico-miniApp-cart.svg";

import classes from "./HeaderCartButton.module.css";
import { useContext, useState, useEffect } from "react";
import CartContext from "../store/CartContext";
import { LocalText } from "../LocakText/LocalText";
import WebApp from "@twa-dev/sdk";
import CartModal from "./CartModal";
import ContactsModal from "./ContactsModal";
import LickeModal from "./LickeModal";
import DeslickeModal from "./DeslickeModal";
function Footer() {
  const ctxCart = useContext(CartContext);
  const totalAmount = `${ctxCart.totalAmount}  `;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thems, setThems] = useState("light");
  useEffect(() => {
    setThems(WebApp.colorScheme);
  }, [WebApp.colorScheme]);
  const numberOfCartItem = ctxCart.items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );
  const numberOfCartItems = ctxCart.itemsFavourite.length;
  const numberOfCartDisItems = ctxCart.itemsDisFavourite.length;
  return (
    <div
      id="genn-Footer-all"
      className={` ${
        thems === "light" ? "bg-white" : "bg-[#34495e]"
      } fixed z-[1000] inset-x-4 bottom-0 h-16 box w-[100%] left-[0] flex justify-around items-center p-2`}
    >
      <ul
        id="genn-Footer-list"
        className="flex justify-between w-full gap-[20px] items-center text-white text-2xl"
      >
        {/* li for cart */}
        <div className="flex items-center">
          {/* li for like  */}
          <li
            id="genn-Footer-ico-like"
            className="hover:scale-110 transition-transform duration-200 cursor-pointer relative "
            // Navigate to home page when clicked
          >
            <LickeModal numberOfCartItems={numberOfCartItems} thems={thems} />
            {numberOfCartItems > 0 && (
              <span
                className={`${classes.badgee} text-[15px] absolute bottom-[-5px] left-[-5px] top-auto  bg-colorLikeIco `}
              >
                {numberOfCartItems}
              </span>
            )}
          </li>
          {/* li for disLike */}
          <li
            id="genn-Footer-ico-like"
            className="hover:scale-110 transition-transform duration-200 cursor-pointer relative"
            // Navigate to home page when clicked
          >
            <DeslickeModal
              numberOfCartDisItems={numberOfCartDisItems}
              thems={thems}
            />
            {numberOfCartDisItems > 0 && (
              <span
                id="genn-Footer-badgee"
                className={`${classes.badgee} text-[15px] bg-colorDisLikeIco absolute top-[-5px] right-[-5px] `}
              >
                {numberOfCartDisItems}
              </span>
            )}
          </li>
          {/* li for phone */}
          <li
            id="genn-Footer-ico-phone"
            className="px-2 flex justify-center items-center bg-white border-[1px] border-[#017ebc] w-[44px] h-[44px] rounded-[44px] ml-[20px]"
          >
            <ContactsModal thems={thems} />
          </li>
        </div>
        <li
          id="genn-Footer-CartShop"
          className={` ${numberOfCartItem === 0 ? "" : "flex-[1]"} `}
        >
          <div
            className={`flex ${
              numberOfCartItem === 0
                ? "justify-center  rounded-[50%] "
                : " rounded-full  bg-[#efefef]  pl-0"
            }  relative  max-h-[36px] f text-white  flex items-center gap-3 ${
              classes.button
            }`}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <div
              id="genn-Footer-shoppingCart"
              className={`bg-primary w-[44px] h-[44px] flex ${
                numberOfCartItem === 0 ? "" : "absolute "
              } justify-center items-center top-[-7px] left-[-4px] p-[10px] rounded-[50px]`}
            >
              <img src={cartIco} alt="cartIco" className="w-[25px]" />
            </div>
            {numberOfCartItem > 0 && (
              <div
                id="genn-Footer-shoppingCartForm"
                className={` ${
                  thems === "light"
                    ? "text-[#3d3d3d] bg-white border-[#acacac]"
                    : "bg-[#34495e] border-white"
                }  border-[2px] border-dashed border-[#acacac] rounded-[10px] border-l-0 flex w-[100%] p-[6px] pl-[44px] justify-center items-end`}
              >
                <span className={` text-[15px] leading-[1]`}>
                  {numberOfCartItem}
                </span>
                <span className={` leading-[1] text-[15px]`}>x</span>
                <span
                  className={` leading-[1] text-[18px] ml-[5px] font-bold `}
                >
                  {totalAmount}
                </span>
                <span className={` leading-[1] mr-[3px] text-[12px] font-bold`}>
                  {LocalText.root.Currency}
                </span>
              </div>
            )}
          </div>
          <CartModal isOpen={isModalOpen} onClose={setIsModalOpen} />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
