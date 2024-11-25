import CartContext from "../store/CartContext";
import { useContext } from "react";
import OrderItem from "./OrderItem";
import { Link } from "react-router-dom";
import FormServices from "../FormServices/FormServices";
import { LocalText } from "../LocakText/LocalText";

function Order({ thems }) {
  const cartCtx = useContext(CartContext);

  // Prepare items in the format needed for Tinkoff's receipt
  const formattedItems = cartCtx.items.map((item) => ({
    Name: item.name,
    Price: (Number(item.price) * 100).toString(), // Assuming Tinkoff uses kopecks
    Quantity: Number(item.amount),
    Amount: (item.price * item.amount * 100).toString(),
    PaymentMethod: "full_prepayment",
    PaymentObject: "commodity",
    Tax: "none",
    MeasurementUnit: "pc",
  }));
  console.log(formattedItems);
  return (
    <div
      id="genn-Order-all"
      className={`h-screen ${
        thems !== "light" ? "bg-[white] " : "bg-[#4e6174]"
      } rounded-lg shadow-lg flex flex-col justify-between`}
    >
      <div
        id="genn-Order-Cards"
        className="pt-[10px] pb-[20px] rounded-b-[30px] bg-order p-8  "
      >
        <h1 className="text-xl font-bold text-[#fff] mb-[10px]">
          {LocalText.orderPage.orderTitle}
        </h1>
        <ul className="flex flex-col gap-2">
          {cartCtx.items.map((item) => (
            <OrderItem
              key={item.id}
              name={item.title}
              amount={item.amount}
              price={item.price}
            />
          ))}
        </ul>
        <p className="text-xl font-semibold text-[#fff] mt-4 flex">
          {LocalText.orderPage.orderAmount}{" "}
          <span className=" border-b-[2px]  border-dashed flex-[1] flex mb-[10px] mx-[5px]"></span>
          <span className="text-[#ff0000] ">{cartCtx.totalAmount} ₽</span>
        </p>
      </div>
      {/* {    color: white;
    background: #34495e;} */}
      <div
        id="genn-Order-FormOrder"
        className={`mt-8 jawdat2  ${
          thems !== "light"
            ? "bg-[#eee] text-gray-800"
            : "bg-[#34495e] text-white"
        } rounded-lg shadow-md p-[20px]  gap-[6] flex-1 rounded-t-[30px] justify-start `}
      >
        <h3 className="text-[18px] text-center font-semibold  mb-4">
          Оформление заказа
        </h3>

        <div className="flex-[1]">
          {/* Pass dynamic data to the FormServices component */}
          <FormServices
            amount={cartCtx.totalAmount.toString()}
            items={formattedItems}
            thems={thems}
          />
        </div>
      </div>
    </div>
  );
}

export default Order;
