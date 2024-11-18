import { useState, useEffect, useContext } from "react";
import CartContext from "../store/CartContext";
import { LocalText } from "../LocakText/LocalText";
import deleteIco from "../../assets/ico/delete-ico.svg";
import checkIco from "../../assets/ico/ico-check.svg";
import cartIco from "../../assets/ico/ico-miniApp-cart.svg";
import cartIco2 from "../../assets/ico/ico-miniApp-cartRed.svg";
import checkClose from "../../assets/ico/ico-closed.svg";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import WebApp from "@twa-dev/sdk";
export default function ServiceCard({ service, onClick, loading, titleLoad }) {
  const [quantity, setQuantity] = useState(0);
  const [love, setLove] = useState(false);
  const [Dislove, setDisLove] = useState(false);
  const cartCtx = useContext(CartContext);
  const [animationClass, setAnimationClass] = useState("aaaaaa2");
  const [showCheckClose, setShowCheckClose] = useState(false); // State for checkClose icon
  const [thems, setThems] = useState("light");
  const ButtonCard = () => {
    setAnimationClass("aaaaaa4");
    setShowCheckClose(false);
    setTimeout(() => setAnimationClass("aaaaaa2"), 800);
    cartCtx.addItem({
      id: service.id,
      title: service.title,
      amount: 1,
      price: service.price,
    });
  };
  const addToFavouriteHandler = () => {
    cartCtx.addItemToFavourite({
      id: service.id,
      title: service.title,
      amount: quantity,
      price: service.price,
      description: service.description,
      love: true,
      Dislove: false,
    });
  };
  const addToDisFavouriteHandler = () => {
    cartCtx.addItemToDisFavourite({
      id: service.id,
      title: service.title,
      amount: quantity,
      price: service.price,
      description: service.description,
      love: false,
      Dislove: true,
    });
  };
  const handleDecrement = (id) => {
    setAnimationClass("aaaaaa4");
    setShowCheckClose(true);
    setTimeout(() => setAnimationClass("aaaaaa2"), 1000);
    setQuantity((prevQuantity) => prevQuantity - 1);
    cartCtx.removeItem(id);
  };

  const handleIncrement = (ser) => {
    setAnimationClass("aaaaaa4");
    setShowCheckClose(false);
    setTimeout(() => setAnimationClass("aaaaaa2"), 1000);
    cartCtx.addItem({ ...ser, amount: 1 });
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  useEffect(() => {
    if (cartCtx && Array.isArray(cartCtx.items)) {
      const existingItem = cartCtx.items.find((item) => item.id === service.id);
      setQuantity(existingItem ? existingItem.amount : 0);
    }

    if (cartCtx && Array.isArray(cartCtx.itemsFavourite)) {
      const existingItemLove = cartCtx.itemsFavourite.find(
        (item) => item.id === service.id
      );
      setLove(existingItemLove ? existingItemLove.love : false);
    }
    if (cartCtx && Array.isArray(cartCtx.itemsDisFavourite)) {
      const existingItemLove = cartCtx.itemsDisFavourite.find(
        (item) => item.id === service.id
      );
      setDisLove(existingItemLove ? existingItemLove.Dislove : false);
    }
  }, [cartCtx, service.id]);

  useEffect(() => {
    setThems(WebApp.colorScheme);
  }, [WebApp.colorScheme]);
  // Render an empty card if loading is true
  if (loading) {
    return (
      <>
        {titleLoad.map((e, index) => (
          <div key={index} className="">
            <h1 className=" top-2 left-4  my-[20px] text-center text-lg font-semibold">
              {e.title}
            </h1>
            <p>{thems}</p>
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index} // Ensure each item has a unique key
                  className="shimmer relative items-center mb-2 flex flex-row bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer w-full"
                >
                  <div className="relative w-full h-40 flex-[40%] p-1">
                    <div className="w-full h-full object-cover rounded-2xl bg-gray-200 " />
                  </div>

                  <div className="pt-1 h-40 text-left flex flex-col flex-[60%] justify-between p-2">
                    <div className="flex-1 p-2 flex gap-2 flex-col">
                      <h1 className="text-lg  text-black font-bold capitalize leading-tight"></h1>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 line-clamp-2"></p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="font-bold p-2 mr-2 text-lg text-black bg-opacity-50"></p>
                      <button
                        className="bg-gray-200 w-[50px] h-[30px] p-3 rounded-tl-2xl rounded-br-2xl "
                        disabled // Button is disabled
                      ></button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          </div>
        ))}
      </>
    );
  }

  // Render the actual service card when not loading
  return (
    <div
      id="genn-ServiceCard-allCard"
      className={`relative text-black items-center mb-[10px] flex  flex-col ${
        thems === "light" ? "bg-[#f5f5f5]" : "bg-red-500"
      }  p-[0px] overflow-hidden  rounded-[22px] shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer w-full {0 0 20px #0000005c} `}
      aria-label={`Open details for ${service.title}`}
    >
      {/* the first div  */}
      <div
        id="genn-ServiceCard-container-img1 "
        className="relative  w-full flex flex-[1] bg-white rounded-tr-[20px] min-h-[150px]  p-[0px] border-b-[1px] border-[#9b9b9b]"
      >
        {/* the image div */}
        <div className="min-w-[119px]" onClick={onClick}>
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            id="genn-ServiceCardcontainer-img-icons"
            className="w-full h-full object-cover rounded-tl-[20px] relative "
            aria-label={`${service.title} image`}
          ></div>
        </div>
        {/* the text div */}
        <div className=" p-[10px]  flex flex-col flex-[1]">
          <div onClick={onClick} className=" flex-[1]">
            <h1 className="text-[0.9rem] dark:text-red-500 border-b-[2px] pb-[10px] capitalize leading-[15px] sm:text-lg font-bold">
              {service.title}
            </h1>

            <div className="text-xs  sm:text-sm text-gray-500 mt-[10px] line-clamp-2">
              {service.description}
            </div>
          </div>
          <div className="flex items-center justify-end  pl-[10px] pt-[5px] gap-[10px] ">
            <div onClick={addToFavouriteHandler}>
              {love ? (
                <SlLike className="text-[20px] text-[#1dc000] " />
              ) : (
                <SlLike className="text-[20px]  " />
              )}
            </div>
            <div onClick={addToDisFavouriteHandler}>
              {Dislove ? (
                <SlDislike className="text-[20px] text-red-500" />
              ) : (
                <SlDislike className="text-[20px] " />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* the second div */}
      <div
        id="genn-ServiceCard-text"
        className="p-[10px] bg-[#f5f5f5] text-left flex w-[100%] justify-end"
      >
        {/* the like and dislike */}

        {/* the button  */}
        <div
          id="genn-ServiceCard-price"
          className={`flex ${quantity === 0 ? "" : "min-w-[100%]"}`}
        >
          {/* the price  */}
          <div
            className={`text-[15px] ${
              quantity === 0
                ? " flex items-center "
                : "flex items-end justify-between flex items-center "
            }   text-[1.05rem] text-black mr-[10px] `}
          >
            <div className="text-center text-[10px] mt-[8px] mr-[7px]">
              {quantity === 0 ? 1 : 1} x{" "}
              {quantity === 0 ? (
                <span className="font-bold text-[20px]">
                  {service.price} {LocalText.root.Currency}
                </span>
              ) : (
                service.price
              )}
            </div>

            {quantity != 0 ? (
              <div
                id="genn-ServiceCard-priceCart"
                className="flex font-bold flex items-end "
              >
                <img
                  src={cartIco2}
                  className="w-[20px] mr-[5px]"
                  alt="musorIco"
                />
                <span className="text-[12px] font-[400]">x</span>
                <span className="text-[22px] pt-0 pr-[2px] pb-0 pl-[5px] leading-[1]">
                  {quantity * service.price}
                </span>{" "}
                <span className="text-[12px] font-[400]">
                  {" "}
                  {LocalText.root.Currency}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="aaaaaa3 overflow-hidden mr-[5px] min-w-[23px] w-[20px] ">
            <div className={` ${animationClass} `}>
              <img
                src={showCheckClose ? checkClose : checkIco}
                className="w-[25px]"
              />
            </div>
            {quantity >= 2 && (
              <div className="">
                <img
                  src={deleteIco}
                  className="w-[20px]"
                  onClick={() => cartCtx.removeItemall(service.id)}
                />
              </div>
            )}
          </div>
          {quantity === 0 ? (
            <button
              id="genn-ServiceCard-text-buttonOrder"
              className="bg-primary text-colorServiceCardOrderZakazatText p-[12px] rounded-full "
              onClick={ButtonCard}
            >
              <img src={cartIco} className="w-[20px]" alt="cartIco" />
            </button>
          ) : (
            <div
              id="genn-ServiceCard-text-buttonplusMin "
              className="relative flex items-center rounded-[50px] w-[125px] text-colorServiceCardOrderZakazatTextAktive bg-colorServiceCardOrderZakazatBgAktive  justify-between px-[8px] aling-center"
            >
              <button
                type="button"
                onClick={() => handleDecrement(service.id)}
                className={`${
                  quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""
                } h-11 rounded-[30px] font-bold text-[30px] justify-center items-center`}
                id="genn-ServiceCard-text-buttonMin"
              >
                -
              </button>
              <input
                type="text"
                id="quantity-input"
                value={quantity}
                readOnly
                className="bg-white rounded-l-[20px] rounded-r-[20px] border-x-0 border-gray-300 h-8 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[33px] "
              />
              <button
                type="button"
                onClick={() => handleIncrement(service)}
                className={`h-11 rounded-[30px] font-bold text-[20px] justify-center items-center`}
                id="genn-ServiceCard-text-buttonplus"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
