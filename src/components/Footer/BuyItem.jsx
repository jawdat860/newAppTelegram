import deleteIco from "../../assets/ico/delete-ico.svg";
import { LocalText } from "../LocakText/LocalText";

const BuyItem = (props) => {
  const price = props.price;

  return (
    <li
      id="genn-BuyItem-card-block"
      className={`p-[10px] relative text-black gap-[15px] mb-[5px] flex flex-row rounded-[20px] shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer w-full 
        ${props.thems === "light" 
          ? "genn-BuyItem-block bg-white text-black" 
          : "genn-BuyItem-block-dark bg-[#4e6174] text-white "} 
          `}
    >
      <div
        id="genn-BuyItem-container-img"
        className="relative h-[50px] w-[50px]"
        onClick={props.onClick}
      >
        <div
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[50px] h-[60px] object-cover rounded-[8px] relative "
          aria-label={`${props.title} image`}
          id="genn-ServiceCardcontainer-img-icons"
        ></div>
      </div>
      <div className="flex-[60%] flex flex-col justify-between">
        <div className="mb-[5px]" onClick={props.onClick}>
          <h3 className={`text-[15px] font-semibold
            ${props.thems === "light" 
              ? "genn-BuyItem-info-block " 
              : "genn-BuyItem-info-block-dark"}
          `}>
            {props.name}</h3>
        </div>
        <div
          id="genn-BuyItem-card-buttons"
          className="flex justify-between gap-2 items-center"
        >
          <div id="genn-BuyItem-card-price" className={`text-[14px]  font-[400]
            ${props.thems === "light" 
              ? "genn-BuyItem-price-block " 
              : "genn-BuyItem-price-block-dark"}
          `}>
            <span className="text-md ">
              <>{price} </>{" "}
            </span>
            <span className="text-md">x {props.amount}</span>
            <span className="text-md">
              = {+props.amount * +price} {LocalText.root.Currency}
            </span>
          </div>
          <div className="flex gap-[5px]">
            <button
              className={`px-3 py-1 
                ${props.thems === "light" 
                  ? "genn-BuyItem-button-minus " 
                  : "genn-BuyItem-button-minus-dark"}
                `}
              onClick={props.onRemove}
            >
              −
            </button>
            <button
              className={` px-3 py-1
                ${props.thems === "light" 
                  ? "genn-BuyItem-button-plus " 
                  : "genn-BuyItem-button-plus-dark"}
                `}
              onClick={props.onAdd}
            >
              +
            </button>
            <button
              className="w-[25px] text-white rounded-md transition duration-300 ease-in-out "
              onClick={props.onRemoveAll}
            >
              <img src={deleteIco} className="b" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BuyItem;
