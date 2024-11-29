import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { useNavigate } from "react-router-dom";
import { LocalText } from "../LocakText/LocalText";

function FormServices({ amount, items, thems }) {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentOption, setPaymentOption] = useState("payNow"); // New state for radio button
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validate input fields
    if (!email && !phone) {
      alert("Поле E-mail или Phone не должно быть пустым");
      return;
    }

    // Show alert if "Pay Later" is selected and stop submission
    if (paymentOption === "payLater") {
      alert("Вы выбрали 'Оплатить позже'. Платеж не будет выполнен.");
      return;
    }

    // Prepare data for the Tinkoff payment initialization request
    const data = {
      TerminalKey: "1665754848495DEMO",
      Amount: amount * 100, // Tinkoff expects amount in kopecks (multiply by 100)
      OrderId: `Order-${Date.now()}`, // Unique Order ID for each transaction
      Token: "68711168852240a2f34b6a8b19d2cfbd296c7d2a6dff8b23eda6278985959346",
      Description: "Оплата товаров",
    };

    try {
      const response = await fetch("https://securepay.tinkoff.ru/v2/Init", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.Success) {
        WebApp.openLink(result.PaymentURL); // Redirect to Tinkoff's payment URL
      } else {
        console.error("Error initializing payment:", result.Message);
        alert(
          "Ошибка при инициализации платежа. Пожалуйста, попробуйте снова."
        );
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Произошла ошибка при обработке платежа.");
    }
  };
  console.log(thems);
  return (
    <div
      id="genn-FormServices-all"
      className={`max-w-lg text-black bg-white font-sans  ${
        thems !== "light"
          ? "bg-[#eee] text-gray-700 "
          : "bg-[#263a4f] text-white"
      } rounded-lg border-[3px] border-dashed p-[15px]  flex flex-col`}
    >
      <div id="genn-FormServices-Choose" className="mb-4 ">
        <label className="text-sm block mb-1">
          {LocalText.FormServicesPage.FormServicesPageTitle}
        </label>
        <fieldset className="flex justify-between gap-2 mt-2">
          <input
            type="radio"
            id="payNow"
            name="paymentOption"
            value="payNow"
            checked={paymentOption === "payNow"}
            onChange={(e) => setPaymentOption(e.target.value)}
            className="hidden" // Hides the radio button
          />
          <label
            htmlFor="payNow"
            className={`py-2 px-2 text-[14px]   text-gray-700 rounded-full transition-all ease-in-out duration-200 cursor-pointer shadow-[0px_0px_50px_-15px_rgba(0,0,0,0.7)]
        ${
          paymentOption !== "payNow"
            ? "bg-white  border border-primary"
            : " text-white bg-primary border border-primary"
        }`}
          >
            {LocalText.FormServicesPage.buttonOderNow}
          </label>

          <input
            type="radio"
            id="payLater"
            name="paymentOption"
            value="payLater"
            checked={paymentOption === "payLater"}
            onChange={(e) => setPaymentOption(e.target.value)}
            className="hidden" // Hides the radio button
          />
          <label
            htmlFor="payLater"
            className={`py-2 px-2   text-[14px] text-gray-700   rounded-full transition-all ease-in-out duration-200 cursor-pointer shadow-[0px_0px_50px_-15px_rgba(0,0,0,0.7)]
        ${
          paymentOption !== "payLater"
            ? "bg-white  border border-primary"
            : " text-white bg-primary border border-primary"
        }`}
          >
            {LocalText.FormServicesPage.buttonOrderLater}
          </label>
        </fieldset>
      </div>

      <form
        id="genn-FormServices-form"
        onSubmit={handleSubmit}
        className="payform-tbank flex-[1] flex flex-col gap-[20px]"
      >
        <div id="genn-FormServices-inputName" className="">
          <label className=" text-sm block mb-1">
            {LocalText.FormServicesPage.nameLabel}
          </label>
          <input
            className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            type="text"
            placeholder={LocalText.FormServicesPage.namePlaceHolder}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div id="genn-FormServices-inputAddress" className="">
          <label className=" text-sm block mb-1">
            {LocalText.FormServicesPage.addressLabel}
          </label>
          <input
            className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            type="text"
            placeholder={LocalText.FormServicesPage.adressPlaceHolder}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {paymentOption === "payNow" ? (
          <div id="genn-FormServices-inputEamil" className="">
            <label className=" text-sm block mb-1">
              {LocalText.FormServicesPage.emailLabel}
            </label>
            <input
              className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              type="email"
              placeholder={LocalText.FormServicesPage.emailPlaceHolder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}

        <div id="genn-FormServices-inputtele" className="">
          <label className="text-sm block mb-1">
            {LocalText.FormServicesPage.phoneLabel}
          </label>
          <input
            className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            type="tel"
            placeholder={LocalText.FormServicesPage.phonePlaceHolder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Radio buttons for "Pay Now" or "Pay Later" */}

        <button
          type="submit"
          className="w-full py-2 bg-[#4bb24b] text-white rounded-lg flex-end  transition-all cursor-pointer"
        >
          {paymentOption === "payNow"
            ? LocalText.FormServicesPage.toPay
            : LocalText.FormServicesPage.toOder}
        </button>
      </form>
    </div>
  );
}

export default FormServices;
