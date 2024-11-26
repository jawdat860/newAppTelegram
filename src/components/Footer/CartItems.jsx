import deleteIco from "../../assets/ico/delete-ico.svg";
import { LocalText } from "../LocakText/LocalText";

const CartItems = (props) => {
  const price = props.price;

  return (
    <li
      id="genn-CartItems-all"
      className={`p-[10px] relative text-black gap-[15px] mb-[5px] flex flex-row  ${
        props.thems === "light"
          ? "bg-white text-black"
          : "bg-[#4e6174] text-white "
      } rounded-[20px] shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer w-full`}
    >
      <div
        id="genn-CartItems-container-img"
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
          id="genn-CartItems-img-icons"
        ></div>
      </div>
      <div className="flex-[60%] flex flex-col justify-between">
        <div className="mb-[5px]" onClick={props.onClick}>
          <h2 className="text-[15px] font-semibold ">{props.name}</h2>
        </div>
        <div
          id="genn-CartItems-card-buttons"
          className="flex justify-between gap-2 items-center"
        >
          <div id="genn-CartItems-card-price" className="  text-gray-400">
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
              className="bg-red-600 text-white rounded-md px-3 py-1 transition duration-300 ease-in-out hover:bg-red-700"
              onClick={props.onRemove}
            >
              −
            </button>
            <button
              className="bg-green-600 text-white rounded-md px-3 py-1 transition duration-300 ease-in-out hover:bg-green-700"
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

export default CartItems;
