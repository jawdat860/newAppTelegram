import { useState, useEffect, useContext } from "react";
import { SlDislike } from "react-icons/sl";
import like from "../../assets/ico-like-2.svg";
import CartContext from "../store/CartContext";
import questionIcon from "../../assets/ico/question.svg";
import { LocalText } from "../LocakText/LocalText";
import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import Product from "../Body/Product/Product";
import ProductModal from "../Body/Product/ProductModal";

const DeslickeModal = ({ numberOfCartDisItems, thems }) => {
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNoLovePageOpen, setIsNoLovePageOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const ctxCart = useContext(CartContext);
  useEffect(() => {
    setServices(ctxCart.itemsDisFavourite);
  }, [ctxCart.itemsDisFavourite]);

  const handleCardClick = (service) => {
    setActiveService(service);
    setIsModalOpen(true);
  };
  const showTextHandler = () => {
    setShowText(!showText);
  };
  return (
    <>
      <div id="genn-DeslickeModal-button">
        <button
          className={` flex items-center relative rounded-full w-[100%] justify-center max-h-[36px] from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-2 flex items-center gap-3 `}
          onClick={() => setIsNoLovePageOpen(true)}
        >
          <SlDislike
            className={`${
              numberOfCartDisItems > 0
                ? thems === "light"
                  ? "genn-Product-Deslicke-active-ico"
                  : "genn-Product-Deslicke-active-ico-dark"
                : thems === "light"
                ? "genn-Product-Deslicke-pasive-ico"
                : "genn-Product-Deslicke-pasive-ico-dark"
            }`}
          />
        </button>
      </div>
      {/* Buy Page Modal */}
      {isNoLovePageOpen && (
        <Modal
          header={
            <ModalHeader
              style={{ backgroundColor: "transparent", padding: "1rem 2rem" }}
            >
              Service Details
            </ModalHeader>
          }
          open={isNoLovePageOpen}
          onOpenChange={(open) => setIsNoLovePageOpen(open)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            height: "100%",
          }}
        >
          <div
            id="genn-DeslickeModal-all"
            className={`min-h-[100vh] text-black  relative z-[11] p-6 ${
              thems === "light"
              ? "genn-modal-block-bg genn-modal-block-text"
              : "genn-modal-block-bg-dark genn-modal-block-text-dark"
          } `}
          >
            {/* <div
              id="genn-DeslickeModal-title"
              className="relative m-auto max-w-[360px] items-center p-[15px]  leading-[1] text-[#8ba2be] font-bold text-center text-[20px] "
            >
              {LocalText.disLikeServices.titleHead}
              <img
                src={questionIcon}
                alt="question Icon"
                className="w-[20px] absolute right-[24%] bottom-[12px] "
                onClick={showTextHandler}
              />
            </div> */}
            <div className="genn-Modal-info-titl-block flex justify-center items-center">
              <h2
                className={`text-[18px] font-[600] mr-[10px] leading-[1]
              ${
                thems === "light"
                  ? "genn-modal-titl-h2"
                  : "genn-modal-titl-h2-dark"
              }`}
              >
                {LocalText.disLikeServices.titleHead}
              </h2>
              <div className="genn-modal-question">
                <div
                  onClick={showTextHandler}
                  className={`text-[14px] w-[24px] h-[24px] flex justify-center items-center
                ${thems === "light" ? "genn-question" : "genn-question-dark"}`}
                >
                  ?
                </div>
              </div>
            </div>
            {showText && (
              // <div className="p-[20px] text-center leading-[1.2]">
              //   {LocalText.disLikeServices.questionText}
              // </div>
              <div
              className={`my-[10px] px[15px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 
                  ${showText ? "transition-content-enter" : ""}
                  ${
                    thems === "light"
                      ? "genn-Modal-info-description-question-block"
                      : "genn-Modal-info-description-question-block-dark"
                  }`}
            >
              {LocalText.disLikeServices.questionText}
            </div>
            )}
            {ctxCart.itemsDisFavourite.length === 0 && (
              <>
                <p className="py-[20px] px-[15px] leading-[1.2] text-center  ">
                  {LocalText.disLikeServices.discriptionHead}
                </p>
                <div className="w-[100%] flex justify-center items-center p-[50px]">
                  <div className="border-[1px] border-solid border-[#ddd] rounded-[200px] p-[30px]  ">
                    <img src={like} className="w-[40px] text-[#ddd]" />
                  </div>
                </div>{" "}
              </>
            )}
            {ctxCart.itemsDisFavourite.length > 0 && (
              <>
                <div
                  id="genn-DeslickeModal-container-cards"
                  className="grid gap-[10px]  pb-[100px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative mt-[10px] "
                >
                  {services.map((service) => (
                    <Product
                      key={service.id}
                      service={service}
                      onClick={() => handleCardClick(service)}
                    />
                  ))}
                </div>

                <ProductModal
                  isOpen={isModalOpen}
                  onClose={setIsModalOpen}
                  service={activeService}
                />
              </>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeslickeModal;
