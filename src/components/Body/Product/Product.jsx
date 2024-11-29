import { useState, useEffect, useContext } from "react";
import CartContext from "../../store/CartContext";
import { LocalText } from "../../LocakText/LocalText";
import deleteIco from "../../../assets/ico/delete-ico.svg";
import checkIco from "../../../assets/ico/ico-check.svg";
import cartIco from "../../../assets/ico/ico-miniApp-cart.svg";

import checkClose from "../../../assets/ico/ico-closed.svg";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

import WebApp from "@twa-dev/sdk";
function Product({ service, onClick, loading, titleLoad }) {
  const [quantity, setQuantity] = useState(0);
  const [love, setLove] = useState(false);
  const [Dislove, setDisLove] = useState(false);
  const cartCtx = useContext(CartContext);
  const [animationClass, setAnimationClass] = useState("theCkeckDelete2");
  const [showCheckClose, setShowCheckClose] = useState(false); // State for checkClose icon
  const [thems, setThems] = useState("light");
  const ButtonCard = () => {
    setAnimationClass("theCkeckDelete4");
    setShowCheckClose(false);
    setTimeout(() => setAnimationClass("theCkeckDelete2"), 800);
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
    setAnimationClass("theCkeckDelete4");
    setShowCheckClose(true);
    setTimeout(() => setAnimationClass("theCkeckDelete2"), 1000);
    setQuantity((prevQuantity) => prevQuantity - 1);
    cartCtx.removeItem(id);
  };

  const handleIncrement = (ser) => {
    setAnimationClass("theCkeckDelete4");
    setShowCheckClose(false);
    setTimeout(() => setAnimationClass("theCkeckDelete2"), 1000);
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
  return (
    <div 
      id={`genn-Product-${service.id}`}
      className={`relative text-black items-center mb-[10px] flex gap-[5px] p-[10px] shadow-lg transition-transform transform duration-300 cursor-pointer w-full
        ${thems === "light"
          ? "genn-Product-card"
          : "genn-Product-card-dark"
      }`}
      aria-label={`Open details for ${service.title}`}
    >
      {/* the first div  */}
      <div
        style={{
          backgroundImage: `url(/src/assets/bg/food.jpg)`,          
        }}
        id="genn-Product-container-img"
        className={`relative w-full flex flex-[1] rounded-[20px] min-h-[150px] min-w-[100px]
          ${thems === "light"
          ? "genn-Product-container-img"
          : "genn-Product-container-img-dark"}
          `}
        onClick={onClick}
        aria-label={`${service.title} image`}
      >
        {/* the image div */}

        <div
          id="genn-Product-img-lebel-block"
          className="genn-Product-img-lebel-block "
        >
          <div
            id="genn-Product-img-lebel-new"
            className={`mb-[5px] py-[5px] px-[5px] text-[12px] leading-[1]
              ${thems === "light"
                ? "genn-Product-img-lebel-new"
                : "genn-Product-img-lebel-new-dark"}
            `}>
            New
          </div>
          <div
            id="genn-Product-img-lebel-sale"
            className={`mb-[5px] py-[5px] px-[5px] text-[12px] leading-[1]
              ${thems === "light"
                ? "genn-Product-img-lebel-sale"
                : "genn-Product-img-lebel-sale-dark"}
                `}>
            -10%
          </div>
        </div>

        {/* the text div */}
      </div>
      {/* the second div */}
      <div
        id="genn-Product-info-block"
        className="pt-[5px] text-left flex flex-col  w-[100%] "
      >
        {/* the like and dislike */}
        <div
          id="genn-Product-like-dislike"
          className={`p-[6px] pb-[0] flex flex-col flex-[1]
            ${thems === "light"
              ? "genn-Product-info-block-text"
              : "genn-Product-info-block-text-dark"}
            `}>
          <div onClick={onClick} className=" ">
            <h2 className="text-[0.9rem]  border-b-[2px] pb-[10px] leading-[15px] sm:text-lg font-bold">
              {service.title}{" "}
              <span className="font-normal lowercase text-[12px] opacity-[.7]">
                {" "}
                {LocalText.ServiceCardV3.TitleGram}
              </span>
            </h2>
          </div>
          <div className="flex items-center justify-end  pl-[10px] pt-[5px] gap-[10px] ">
            <div className="flex-[1]" onClick={onClick}></div>
            <div className=" flex gap-[10px]">
              <div onClick={addToFavouriteHandler}>
                {love ? (
                  <SlLike className="genn-Product-like-active-ico text-[#1dc000] text-[20px]" />
                ) : (
                  <SlLike className="text-[20px]  " />
                )}
              </div>
              <div onClick={addToDisFavouriteHandler}>
                {Dislove ? (
                  <SlDislike className="genn-Product-dislike-active-ico text-red-500 text-[20px]" />
                ) : (
                  <SlDislike className="text-[20px] " />
                )}
              </div>
            </div>
          </div>
          <div className="pb-[40px]" onClick={onClick}></div>
        </div>
        {/* the button  */}
        <div
          id="genn-Product-price"
          className={`justify-between flex items-center ${quantity === 0 ? "" : "min-w-[100%]"}`}
        >
          {/* the price  */}
          <div
            id="genn-Product-price-0"
            className={`text-[15px]  ${
              quantity === 0
                ? "flex items-center "
                : "flex items-end justify-between flex items-center "
            }   text-[1.05rem] ${
              thems === "light" ? "genn-Product-price-0" : "genn-Product-price-0-dark"
            } mr-[10px] `}
            onClick={onClick}
          >
            <div className="text-center text-[10px] " onClick={onClick}>
              {quantity === 0 ? "" : ""}{" "}
              {quantity === 0 ? (
                <div id="genn-Product-price-old-price" className="flex flex-col items-end ">
                  <span className={`line-through text-[12px] font-[400] leading-[1] 
                  ${thems === "light"
                    ? "genn-Product-old-price"
                    : "genn-Product-old-price-dark"}
                  `}>
                    {service.price} {LocalText.root.Currency}
                  </span>
                  <span className={`font-bold text-[20px]  leading-[1]
                    ${thems === "light"
                      ? "genn-Product-price-value"
                      : "genn-Product-price-value-dark"}
                    `}>
                    {service.price} {LocalText.root.Currency}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>

            {quantity != 0 ? (
              <div
                id="genn-Product-priceCart"
                className="flex font-bold flex items-end "
              >
                <span className="text-[18px] pt-0 pr-[2px] pb-0 pl-[5px] leading-[1]">
                  {service.price}
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
          <div className="flex items-center">
          <div className="genn-Product-Ckeck-Delete theCkeckDelete3 overflow-hidden mr-[5px] min-w-[19px] w-[20px] ">
            <div className={` ${animationClass} `}>
              <img
                src={showCheckClose ? checkClose : checkIco}
                className="w-[25px]"
              />
            </div>
            {quantity >= 2 && (
              <div className="genn-Product-Ckeck-plus">
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
              id="genn-Product-text-buttonOrder"
              className={` p-[12px] rounded-full
                ${thems === "light"
                  ? "genn-Product-text-buttonOrder"
                  : "genn-Product-text-buttonOrder-dark"}
                `}
              onClick={ButtonCard}
            >
              <img src={cartIco} className="w-[20px]" alt="cartIco" />
            </button>
          ) : (
            <div
              id="genn-Product-text-buttonplusMin "
              className="relative flex items-center rounded-[50px] w-[100px] text-colorServiceCardOrderZakazatTextAktive bg-colorServiceCardOrderZakazatBgAktive  justify-between px-[8px] aling-center"
            >
              <button
                type="button"
                onClick={() => handleDecrement(service.id)}
                className={`${
                  quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""
                } h-11 rounded-[30px] font-bold text-[30px] justify-center items-center`}
                id="genn-Product-text-buttonMin"
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
                id="genn-Product-text-buttonplus"
              >
                +
              </button>
            </div>
          )}
          
        </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
