import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { useContext, useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from "../store/CartContext";
import BuyItem from "./BuyItem";
import image from "../../assets/product.png";
import questionIco from "../../assets/ico/question.svg";
import { useNavigate } from "react-router-dom";

import { LocalText } from "../LocakText/LocalText";

import WebApp from "@twa-dev/sdk";
import ProductModal from "../Body/Product/ProductModal";
function CartModal({ isOpen, onClose }) {
  const cartCtx = useContext(CartContext);
  const [activeItem, setActiveItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionShow, setQuestionShow] = useState(false);
  const [thems, setThems] = useState("light");
  useEffect(() => {
    setThems(WebApp.colorScheme);
  }, [WebApp.colorScheme]);
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    setActiveItem(item);
    setIsModalOpen(true);
  };
  const setQuestionShowHandler = () => {
    setQuestionShow(!questionShow);
  };
  const totalAmount = `${cartCtx.totalAmount} ₽`;
  const hasItems = cartCtx.items.length > 0;
  const numberOfCartItems = cartCtx.items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  const handleOrderClick = () => {
    onClose();
    navigate("/order"); // Navigate to the order page
  };

  return (
    <Modal
      header={
        <ModalHeader
          style={{ backgroundColor: "transparent", padding: "1rem 2rem" }}
        >
          {LocalText.BuyPage.titleHead || "Your Cart"}
        </ModalHeader>
      }
      open={isOpen}
      onOpenChange={(open) => !open && onClose()} // Close modal on backdrop click
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        height: "100%",
      }}
    >
      <div
        id="genn-CartModal-all"
        className={`h-full text-black p-6 rounded-lg shadow-xl flex flex-col pb-[0]
          ${thems === "light"
              ? "genn-modal-block-bg genn-modal-block-text"
              : "genn-modal-block-bg-dark  genn-modal-block-text-dark"
          }
          `}
      >
        <div className="">
          <div id="genn-CartModal-title" className="flex justify-center  pt-[10px] pb-[10px]">
            
            <h2
              className={`text-[18px]  font-[600] mr-[10px]
              ${
                thems === "light"
                  ? "genn-modal-titl-h2"
                  : "genn-modal-titl-h2-dark"
              }`}
            >
              {LocalText.BuyPage.titleHead}
            </h2>

            <div className="genn-modal-question">
              <div
                onClick={setQuestionShowHandler}
                className={`text-[14px] w-[24px] h-[24px] flex justify-center items-center
                ${thems === "light" ? "genn-question" : "genn-question-dark"}`}
              >
                ?
              </div>
            </div>
          </div>
          {questionShow && (            
            <div
            className={`my-[10px] px[15px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 
              ${questionShow ? "transition-content-enter" : ""}
              ${
                thems === "light"
                  ? "genn-Modal-info-description-question-block"
                  : "genn-Modal-info-description-question-block-dark"
              }`}
          >
            {LocalText.BuyPage.iscriptionHead}
          </div>
          )}
        </div>

        <div className="overflow-y-auto flex-grow ">
          <ProductModal
            isOpen={isModalOpen}
            onClose={setIsModalOpen}
            service={activeItem}
          />
          {hasItems ? (
            <ul id="genn-CartModal-listofItems" className="flex flex-col gap-2">
              {cartCtx.items.map((item) => (
                <BuyItem
                  key={item.id}
                  name={item.title}
                  amount={item.amount}
                  price={item.price}
                  onClick={() => handleCardClick(item)}
                  onRemove={() => cartCtx.removeItem(item.id)}
                  onAdd={() => cartCtx.addItem({ ...item, amount: 1 })}
                  onRemoveAll={() => cartCtx.removeItemall(item.id)}
                  thems={thems}
                />
              ))}
            </ul>
          ) : (
            <div className="flex justify-center items-center h-full">
              <img src={image} alt="Empty Cart" />
            </div>
          )}
        </div>

        <div
          id="genn-CartModal-block-card"
          className={`p-[15px] mx-[-1.5rem] pb-[10px] border-t-[1px] border-black
            ${thems === "light"
              ? "genn-cart-Modal-bg"
              : "genn-cart-Modal-bg-dark"}
            `}
        >
          <div className="flex justify-between items-center text-lg font-semibold mb-4">
            <span>{LocalText.BuyPage.totalCart}</span>
            <span className="flex-[1] border-b-[1.9px] border-dashed border-black mx-[5px]" />
            <span>{totalAmount}</span>
          </div>

          <div className="genn-cart-button-block flex justify-end gap-4">
            <button
              className={`py-2 px-4  transition duration-200
                ${thems === "light"
                  ? "genn-button-v1"
                  : "genn-button-v1-dark"}
                `}
              onClick={() => onClose()}
            >
              {LocalText.BuyPage.closeCart}
            </button>

            {hasItems && (
              <button
                className={`py-2 px-6 shadow-md transition-all duration-200
                  ${thems === "light"
                    ? "genn-button-v2"
                    : "genn-button-v2-dark"}
                  `}
                onClick={handleOrderClick}
              >
                <span>{LocalText.BuyPage.OrderNowCart}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CartModal;
