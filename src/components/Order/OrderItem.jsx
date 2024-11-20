const OrderItem = (props) => {
  const price = `${props.price} ₽`;

  return (
    <li
      id="genn-OrderItem-list"
      className="flex justify-between items-center py-[10px] px-[15px] mb-2 bg-[white] rounded-lg shadow-md "
    >
      <div id="genn-OrderItem-card" className="flex flex-col flex-[1]">
        <h2 className="font-semibold text-black">{props.name}</h2>
        <div className="mt-1 text-gray-400 text-[14px] leading-[1] ">
          <span className="text-[14px] mr-[10px] leading-[1]">{price}</span>
          <span className="text-md">x {props.amount}</span>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
