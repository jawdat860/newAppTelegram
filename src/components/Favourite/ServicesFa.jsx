import { useState, useEffect, useContext } from "react";
import { SlLike } from "react-icons/sl";
import like from "../../assets/ico-like.svg";
import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import CartContext from "../store/CartContext";
import ServiceModal from "../Services/ServiceModal";
import questionIcon from "../../assets/ico/question.svg";
import { LocalText } from "../LocakText/LocalText";
import ServiceCard from "../Services/ServiceCard";

const ServicesFa = ({ numberOfCartItems, thems }) => {
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLovePageOpen, setIsLovePageOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const ctxCart = useContext(CartContext);
  useEffect(() => {
    setServices(ctxCart.itemsFavourite);
  }, [ctxCart.itemsFavourite]);

  const handleCardClick = (service) => {
    setActiveService(service);
    setIsModalOpen(true);
  };
  const showTextHandler = () => {
    setShowText(!showText);
  };
  return (
    <>
      <div>
        <button
          className={`flex items-center relative rounded-full w-[100%] justify-center max-h-[36px] from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-2 flex items-center gap-3 `}
          onClick={() => setIsLovePageOpen(true)}
        >
          <SlLike
            className={` ${
              numberOfCartItems > 0
                ? "text-[#1dc000]"
                : thems === "light"
                ? "text-black"
                : " text-white"
            }`}
          />
        </button>
      </div>
      {/* Buy Page Modal */}
      {isLovePageOpen && (
        <Modal
          header={
            <ModalHeader
              style={{ backgroundColor: "transparent", padding: "1rem 2rem" }}
            >
              Service Details
            </ModalHeader>
          }
          open={isLovePageOpen}
          onOpenChange={(open) => setIsLovePageOpen(open)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            height: "100%",
          }}
        >
          <div
            id="genn-ServicesFa-all"
            className={` ${
              thems === "light" ? "bg-[#eee]" : "bg-[#223242] text-white"
            } min-h-[100vh] text-black relative z-[11] `}
          >
            <div className="relative items-center m-auto py-[20px] px-[27px] max-w-[360px] leading-[1] text-[#8ba2be] font-bold text-center text-[20px] ">
              {LocalText.LikeServices.titleHead}
              <img
                src={questionIcon}
                alt="question Icon"
                className="w-[20px] absolute right-[26%] bottom-[19px] "
                onClick={showTextHandler}
              />
            </div>

            {ctxCart.itemsFavourite.length === 0 && (
              <>
                {showText && (
                  <div className="px-[20px] text-center py-[10px] leading-[1.2]">
                    {LocalText.LikeServices.questionText}
                  </div>
                )}
                <p className="py-[20px] px-[15px] leading-[1.2] text-center  ">
                  {LocalText.LikeServices.discriptionHead}
                </p>
                <div className="w-[100%] flex justify-center items-center p-[50px]">
                  <div className="border-[3px] border-solid border-[#8ba2be] rounded-[200px] p-[50px] bg-like-nolike ">
                    <img src={like} className="w-[80px] text-[red]" />
                  </div>
                </div>{" "}
              </>
            )}
            {ctxCart.itemsFavourite.length > 0 && (
              <>
                <div
                  id="genn-ServicesFa-container-cards"
                  className="grid gap-4 p-4 pb-[100px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative mt-[10px]"
                >
                  {showText && (
                    <div className="px-[20px] py-[10px] text-center leading-[1.2]">
                      {LocalText.LikeServices.questionText}
                    </div>
                  )}
                  {services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onClick={() => handleCardClick(service)}
                    />
                  ))}
                </div>

                <ServiceModal
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

export default ServicesFa;
