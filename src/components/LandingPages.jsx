import { useState, useRef, useEffect } from "react";
import { LocalText } from "./LocakText/LocalText";
import image1 from "../assets/logo-b29-marino.svg";
import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import iconYandex from "../assets/ico/ico-ya-r.svg";
import iconYandexMap from "../assets/ico/ico-ya-map.svg";
import iconShare from "../assets/ico/ico-share.svg";
import iconNelegram from "../assets/ico/ico-telegram.svg";
import iconUserIco from "../assets/ico/ico-logo-genn.svg";
import questionIco from "../assets/ico/questionblue.svg";
import WebApp from "@twa-dev/sdk"; // Assuming this package works in JavaScript
import telegramIco from "../assets/ico/icons8-telegram-app.svg";
import vk from "../assets/ico/icons8-vk-circled.svg";
import xIcon from "../assets/ico/icons8-twitter.svg";
import okIcon from "../assets/ico/icons8-одноклассники.svg";
import whatsApp from "../assets/ico/icons8-whatsapp.svg";
const TG_BOT_TOKEN = "7347780887:AAGiNI5Pvs1iHHONlBV3zQibnC_UFm7slys"; // Replace with your actual Bot Token

const LandingPages = ({ thems }) => {
  const [userPhotoUrl, setUserPhotoUrl] = useState(iconUserIco); // Default icon
  const [showReadMore, setShowReadMore] = useState(false);
  const [showMapIframe, setShowMapIframe] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showIframeComment, setShowIframeComment] = useState(false);
  const [showShareModel, setShowShareModel] = useState(false);
  const [showQuestionMap, setShowQusetionMap] = useState(false);
  const [showQuestionTextLong, setShowQusetionTextLong] = useState(false);
  const [showQuestionComment, setShowQusetionComment] = useState(false);
  const [showQuestionSharing, setShowQusetionSharing] = useState(false);
  const [hours, setHours] = useState("");
  const [min, setMin] = useState("");
  const [worknow, setWorkNow] = useState(null);
  const [showWorkModel, setShowWorkModel] = useState(false);
  const [dateFormat, setDateFormat] = useState(new Date());
  const [showTextWork, setShowTextWork] = useState(false);
  const getDayClass = (day) => {
    const currentDay = dateFormat.toLocaleDateString("ru-RU", {
      weekday: "long",
    });
    return day === currentDay
      ? "bg-[#e0e0e0] text-[#6a6a6a] rounded-[10px] font-bold flex flex-wrap"
      : "";
  };
  const getDayText = (day) => {
    const currentDay = dateFormat.toLocaleDateString("ru-RU", {
      weekday: "long",
    });
    return day === currentDay ? (
      <div
        className={`${
          worknow
            ? "text-[12px] pl-2 text-[#1dc000]"
            : " pl-2 text-[12px] text-[#ef4444]"
        }`}
      >
        {worknow
          ? LocalText.LandingPagesOrg.nowOpen
          : LocalText.LandingPagesOrg.nowClose}
        {!worknow ? (
          <>
            <span className="text-[#9c9c9c] font-[400] text-[12px]">{` ${LocalText.LandingPagesOrg.closeTimeLeft}  ${hours} ${LocalText.LandingPagesOrg.houres} ${min} ${LocalText.LandingPagesOrg.minutes} `}</span>
          </>
        ) : (
          <>
            {
              <span className="text-[#9c9c9c] font-[400] text-white text-[12px]">
                {" "}
                {LocalText.LandingPagesOrg.openTimeLeft} {hours}
                {LocalText.LandingPagesOrg.houres} {min}
                {LocalText.LandingPagesOrg.minutes}{" "}
              </span>
            }
          </>
        )}
      </div>
    ) : (
      ""
    );
  };

  const showTextWorkHandler = () => {
    setShowTextWork(!showTextWork);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setDateFormat(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);
  const hourss = dateFormat.getHours();
  const minutes = dateFormat.getMinutes();

  // Add leading zero to minutes if needed
  const getFormattedDayDate = (date) => {
    const options = {
      weekday: "short",
      year: "2-digit",
      month: "short",
      day: "numeric",
    };
    return (
      <span className="font-[500] text-[16px]">
        {date.toLocaleDateString("ru-RU", options)}
      </span>
    ); // Format: понедельник, 18 ноября 2024
  };
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const calculateTimeLeft = () => {
    const now = new Date();
    const closingTime = new Date();
    const openTime = new Date();
    openTime.setHours(8, 0, 0, 0);
    closingTime.setHours(17, 0, 0, 0); // Set closing time to 20:00

    if (now >= openTime && now < closingTime) {
      setWorkNow(true);
    }
    if (now >= openTime && now < closingTime) {
      const diffMs = closingTime - now; // Difference in milliseconds
      const hours = Math.floor((diffMs % 86400000) / 3600000); // Hours
      const minutes = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // Minutes
      setHours(hours);
      setMin(minutes);
    } else {
      setWorkNow(false);
      let nextOpening = new Date(now);
      nextOpening.setDate(
        now.getHours() >= closingTime.getHours()
          ? now.getDate() + 1
          : now.getDate()
      ); // Set to next day if past closing time
      nextOpening.setHours(openTime.getHours(), openTime.getMinutes());
      const diffMs = nextOpening - now;
      const remainingHours = Math.floor(diffMs / (1000 * 60 * 60));
      const remainingMinutes = Math.floor(
        (diffMs % (1000 * 60 * 60)) / (1000 * 60)
      );
      setHours(remainingHours);
      setMin(remainingMinutes);
    }
  };

  // Use effect to update time left message on component load and each minute
  useEffect(() => {
    calculateTimeLeft(); // Initial load
    const timer = setInterval(() => {
      calculateTimeLeft(); // Update every minute
    }, 60000);

    return () => clearInterval(timer); // Clean up interval on unmount
  }, []);

  const showQuestionMapHandler = () => {
    setShowQusetionMap(!showQuestionMap);
  };
  const showQuestionTextLongHandler = () => {
    setShowQusetionTextLong(!showQuestionTextLong);
  };
  const showQuestionCommentHandler = () => {
    setShowQusetionComment(!showQuestionComment);
  };
  const showQuestionSharingHandler = () => {
    setShowQusetionSharing(!showQuestionSharing);
  };
  const setShowWorkModelHandler = (open) => {
    setShowWorkModel(open);
  };
  const paragraphRef = useRef(null);
  const [initData, setInitData] = useState(null);
  useEffect(() => {
    const data = WebApp.initDataUnsafe;
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      console.error("❌ Open this app in Telegram");
      return;
    }
    console.log("✅ Telegram WebApp Available", data);
    setInitData(data); // Store as an object
    WebApp.expand();
  }, []);
  useEffect(() => {
    // Check the height of the paragraph element to determine if "Read More" should be shown
    if (paragraphRef.current && paragraphRef.current.clientHeight >= 16) {
      setShowReadMore(true);
    }
  }, []);

  const handleModalTextOpenChange = (open) => {
    setShowText(open);
  };
  const handleModalMapOpenChange = (open) => {
    setShowMapIframe(open);
  };

  const handleModalCommentOpenChange = (open) => {
    setShowIframeComment(open);
  };
  const handleModalShareOpenChange = (open) => {
    setShowShareModel(open);
  };

  // Extract user_id and fetch profile photo using Telegram Bot API
  useEffect(() => {
    const data = WebApp.initDataUnsafe;
    if (!data || !data.user) {
      console.error(
        "❌ User data is not available. Ensure the app is launched within Telegram."
      );
      return;
    }

    const userId = data.user.id; // Fetch the user ID from initDataUnsafe

    const fetchUserPhoto = async () => {
      try {
        const response = await fetch(
          `https://api.telegram.org/bot${TG_BOT_TOKEN}/getUserProfilePhotos`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: userId, limit: 1 }),
            cache: "no-store", // Prevent cache on the main request
          }
        );

        const data = await response.json();
        if (data.ok && data.result.photos.length > 0) {
          const fileId = data.result.photos[0][0].file_id;

          const fileResponse = await fetch(
            `https://api.telegram.org/bot${TG_BOT_TOKEN}/getFile`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ file_id: fileId }),
              cache: "no-store", // Prevent cache on the file fetch request
            }
          );

          const fileData = await fileResponse.json();
          if (fileData.ok) {
            const fileUrl = `https://api.telegram.org/file/bot${TG_BOT_TOKEN}/${fileData.result.file_path}`;
            setUserPhotoUrl(`${fileUrl}?t=${new Date().getTime()}`); // Cache-bust by adding timestamp
          }
        }
      } catch (error) {
        console.error("Error fetching user photo:", error);
      }
    };

    fetchUserPhoto();
  }, []);

  return (
    <div
      id="genn-LandingPages-all-blokc"
      className="relative bg-[url('./assets/bg/bg-1.webp')] bg-cover bg-center bg-no-repeat py-[0px]  text-center pb-20 "
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        id="genn-LandingPage-TelegramHeader"
        className={`flex justify-between  relative p-[5px] ${
          thems === "light" ? "bg-[#ffffff]" : "bg-[#2b355a]"
        }  rounded-t-[opx] rounded-b-[27px]  border-t-[0]`}
      >
        <div
          id="genn-LandingPage-TelegramHeader-user-info"
          className={`flex items-center ${
            thems === "light" ? "text-[black]" : "text-white"
          }`}
        >
          <div className="twailweenchange1 gap-[10px] flex items-center ">
            <img
              src={userPhotoUrl}
              alt={LocalText.LandingPagesOrg.description}
              className="rounded-[50%] w-[35px] h-[35px] "
            />
          </div>
          <div className=" text-[17px] ml-[10px] ">
            {LocalText.LandingPagesOrg.theUser}
            {/* Написано для визуального просмотра на веб версии */}
            {initData?.user?.first_name || " jawdat"}
            {/* Работает только в телеграмм */}
            {/* {initData.user.first_name } */}
          </div>
        </div>
        <div
          id="genn-LandingPage-TelegramHeader-link"
          className="flex bg-[#40b3e0] items-center gap-[10px] twailweenchange2"
        >
          <div className="w-[27px] ">
            <img
              className=" "
              src={iconNelegram}
              alt={LocalText.LandingPagesOrg.description}
            />
          </div>
          <div className="">
            <div
              className="text-[18px] font-[600] underline  "
              onClick={() =>
                WebApp.openTelegramLink(LocalText.LandingPagesOrg.telegramLink)
              }
            >
              {LocalText.LandingPagesOrg.telegramTitl}
            </div>
          </div>
        </div>
      </div>

      <div
        id="genn-LandingPage-block-logo-h1-text-ico"
        className="relative mx-auto text-white px-[10px]"
      >
        {/* Header Section */}
        <div
          id="genn-LandingPage-Org-logo"
          className="flex justify-center py-[40px] "
        >
          <img src={image1} alt="Logo" className="w-[180px] h-[45px]" />
        </div>
        <h1
          id="genn-LandingPage-Org-titl-h1"
          className="p-0 m-0 text-[26px] leading-[20px] text-white font-[100] font-bold"
        >
          <>
            <span className="text-[26px]">
              {LocalText.LandingPagesOrg.titleH1}
            </span>
            <br />
            <span className="text-[14px]">
              {LocalText.LandingPagesOrg.titleH1sub}
            </span>
          </>
        </h1>

        {/* Paragraph with Read More functionality */}
        <div
          id="genn-LandingPage-Org-description"
          ref={paragraphRef}
          className="mt-[20px] max-h-[168px] overflow-hidden text-ellipsis"
        >
          {LocalText.LandingPagesOrg.description}
        </div>

        <div
          id="genn-LandingPage-Org-blok-Ici"
          className="flex justify-between mt-[20px]"
        >
          {" "}
          {/* Иконки карта, отзывы, расшарить */}
          {showReadMore && LocalText.LandingPagesOrg.descriptionLong !== "" && (
            <button
              onClick={() => {
                setShowText(true);
              }}
              className={`block genn-ico-redmore  ${
                thems === "light"
                  ? "bg-[#fff] text-buttonOrgReadMore"
                  : "bg-[#3e4356] text-white"
              }  rounded-[100px] py-[0] px-[20px]   text-[14px]`}
            >
              {LocalText.LandingPagesOrg.readMoreButton}
            </button>
          )}
          {/* Button to show map iframe in modal */}
          <div id="genn-LandingPage-Org-Ici" className="flex gap-[6px]">
            <button
              onClick={() => {
                setShowMapIframe(true); // Show map iframe in modal
              }}
              className={`text-blue-500 underline  ${
                thems === "light"
                  ? "bg-[#fff] text-buttonOrgReadMore"
                  : "bg-[#3e4356] text-white"
              } block genn-ico  h-[45px] w-[45px] p-[7px] rounded-[100px] decoration-auto`}
              id="genn-LandingPage-Org-ButtonMap"
            >
              <img
                src={iconYandexMap}
                alt={LocalText.LandingPagesOrg.description}
              />
            </button>

            <button
              onClick={() => {
                setShowIframeComment(true); // Show comments iframe in modal
              }}
              className={`text-blue-500  ${
                thems === "light"
                  ? "bg-[#fff] text-buttonOrgReadMore"
                  : "bg-[#3e4356] text-white"
              } underline block genn-ico  h-[45px] w-[45px] p-[7px] rounded-[100px]`}
              id="genn-LandingPage-Org-ButtonComment"
            >
              <span>
                <img
                  src={iconYandex}
                  alt={LocalText.LandingPagesOrg.showCommentsButton}
                />
              </span>
            </button>
            <button
              onClick={() => {
                setShowShareModel(true); // Show comments iframe in modal
              }}
              className={`text-blue-500  ${
                thems === "light"
                  ? "bg-[#fff] text-buttonOrgReadMore"
                  : "bg-[#3e4356] text-white"
              } underline block genn-ico  h-[45px] w-[45px] p-[7px] rounded-[100px]`}
              id="genn-LandingPage-Org-ButtonSharing"
            >
              <span>
                <img
                  src={iconShare}
                  alt={LocalText.LandingPagesOrg.showCommentsButton}
                />
              </span>
            </button>
          </div>
        </div>
        {/* work hours*/}
        <div className={`pt-[10px] bg-[#]`}>
          <div className="flex gap-[5px] justify-center">
            <div className="font-bold">
              {LocalText.LandingPagesOrg.workTimeTitle}
            </div>
            <img
              src={questionIco}
              alt="question"
              className="w-[20px]"
              onClick={() => setShowWorkModel(true)}
            />
            <div className={`${worknow ? "text-[#1dc000]" : "text-[#ef4444]"}`}>
              {worknow
                ? LocalText.LandingPagesOrg.nowOpen
                : LocalText.LandingPagesOrg.nowClose}
            </div>
          </div>

          <div>
            {!worknow ? (
              <>{`${LocalText.LandingPagesOrg.closeTimeLeft}  ${hours} ${LocalText.LandingPagesOrg.houres} ${min} ${LocalText.LandingPagesOrg.minutes} `}</>
            ) : (
              <>{`${LocalText.LandingPagesOrg.openTimeLeft}  ${hours} ${LocalText.LandingPagesOrg.houres}  ${min}  ${LocalText.LandingPagesOrg.minutes} `}</>
            )}
          </div>
        </div>
        {/* first model for long text */}
        <Modal
          header={
            <ModalHeader style={{ backgroundColor: "transparent" }}>
              Service Details
            </ModalHeader>
          }
          open={showText}
          onOpenChange={handleModalTextOpenChange}
          dismissible={true}
          style={{
            backgroundColor: "transparent",
            bottom: "0",
            display: "flex",
            alignContent: "space-between",
            minHeight: "100%",
          }}
        >
          <div
            id="genn-LandingPages-redmore-description "
            className={`p-6 flex flex-col flex-[1] text-black ${
              thems === "light"
                ? "bg-white text-black"
                : "bg-[#34495e] text-white"
            }`}
          >
            <div className="flex justify-center items-center">
              <h2 className=" text-[16px]  font-[600]">
                {LocalText.LandingPagesOrg.TextLong}
              </h2>
              <img
                className="w-[20px] items-center  mt-[5px] ml-[10px]"
                src={questionIco}
                alt={LocalText.BuyPage.titleHead}
                onClick={() => showQuestionTextLongHandler()}
              />
            </div>
            {showQuestionTextLong && (
              <div
                className={`mb-[20px] px-[10px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 ${
                  showQuestionTextLong ? "transition-content-enter" : ""
                }`}
              >
                {LocalText.LandingPagesOrg.TextLongQuestion}{" "}
                {LocalText.LandingPagesOrg.titleH1}
              </div>
            )}
            <p>{LocalText.LandingPagesOrg.descriptionLong}</p>
          </div>
        </Modal>
        {/* the work time model */}
        <Modal
          header={
            <ModalHeader style={{ backgroundColor: "transparent" }}>
              Service Details
            </ModalHeader>
          }
          open={showWorkModel}
          onOpenChange={setShowWorkModelHandler}
          dismissible={true}
          style={{
            backgroundColor: "transparent",
            bottom: "0",
            display: "flex",
            alignContent: "space-between",
            minHeight: "100%",
          }}
        >
          <div
            id="genn-landingPage-WorkTime "
            className={`flex-[1] p-[20px] ${
              thems === "light"
                ? "bg-white text-black"
                : "bg-[#34495e] text-white"
            }`}
          >
            <div className=" ">
              <div className="text-[24px] text-center mb-[20px] font-[700] flex justify-center items-crnter gap-[10px]">
                <h2>Режим работы</h2>
                <img
                  src={questionIco}
                  className="w-[20px] mt-[5px]"
                  onClick={showTextWorkHandler}
                />
              </div>
              {showTextWork && (
                <div className="mb-[10px] text-center">
                  Дополнительное описание
                </div>
              )}
              <div
                className={`genn-LandingPages-rezim-raboty-casy  flex justify-between items-center gap-[30px] text-[30px] ${
                  thems === "light" ? "bg-[#f3f3f3]" : "bg-[#4e6174] "
                }  rounded-[20px] border-[2px] border-dashed border-[#ddd] px-[20px] mb-[30px] font-[900]`}
              >
                {getFormattedDayDate(new Date())}
                {hourss}:{formattedMinutes}
              </div>
            </div>
            <div
              className={`${
                thems === "light" ? "bg-[#f3f3f3]" : "bg-[#4e6174]"
              } rounded-[20px] p-[20px]  border-[2px] border-dashed border-[#ddd]  mb-[30px] w-full`}
            >
              {[
                { day: "понедельник", hours: "с 8:00 до  17:00" },
                { day: "вторник", hours: "с 8:00 до  17:00" },
                { day: "среда", hours: "с 8:00 до  17:00" },
                { day: "четверг", hours: "с 8:00 до  17:00" },
                { day: "пятница", hours: "с 8:00 до  17:00" },
                { day: "суббота", hours: "с 8:00 до  17:00" },
                { day: "воскресенье", hours: "с 8:00 до  17:00" },
              ].map(({ day, hours }) => (
                <div
                  key={day}
                  className={`${getDayClass(
                    day
                  )} border-b flex justify-between`}
                >
                  <div className="p-2">{day}</div>

                  <div className="p-2 flex-[1] text-end">{hours}</div>
                  <div className=" ">{getDayText(day)}</div>
                </div>
              ))}
              {/* <thead>
                <tr className="text-center border-b-[1px] border-b-[#ddd]">
                  <th className="pb-[10px]  border-r-[#ddd]">День</th>
                  <th className="pb-[10px]">Время</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-b-[1px] border-b-[#ddd] ">
                  <td className="p-[10px]  border-r-[#ddd]">Понедельник</td>
                  <td className="p-[10px]">
                    с <span>8:00</span> до <span>8:00</span>
                  </td>
                </tr>
                <tr className="border-b-[1px] border-b-[#ddd]">
                  <td className="p-[10px]  border-r-[#ddd]">Вторник</td>
                  <td className="p-[10px]">
                    с <span>8:00</span> до <span>8:00</span>
                  </td>
                </tr>
                <tr className="border-b-[1px] border-b-[#ddd]">
                  <td className="p-[10px]  border-r-[#ddd]">Среда</td>
                  <td className="p-[10px]">
                    с <span>8:00</span> до <span>8:00</span>
                  </td>
                </tr>
                <tr className="border-b-[1px] border-b-[#ddd]">
                  <td className="p-[10px]  border-r-[#ddd]">Четверг</td>
                  <td className="p-[10px]">
                    с <span>8:00</span> до <span>8:00</span>
                  </td>
                </tr>
                <tr className="border-b-[1px] border-b-[#ddd]">
                  <td className="p-[10px]  border-r-[#ddd]">Пятница</td>
                  <td className="p-[10px]">
                    с <span>8:00</span> до <span>8:00</span>
                  </td>
                </tr>
                <tr className="border-b-[1px] border-b-[#ddd]">
                  <td className="p-[10px]  border-r-[#ddd]">Суббота</td>
                  <td className="p-[10px]">
                    с <span>8:00</span> до <span>8:00</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-[10px]  border-r-[#ddd]">Воскресенье</td>
                  <td className="p-[10px]">
                    с <span>8:00</span> до <span>8:00</span>
                  </td>
                </tr>
              </tbody> */}
            </div>
          </div>
        </Modal>

        {/* second  model for map */}
        <Modal
          header={
            <ModalHeader style={{ backgroundColor: "transparent" }}>
              Service Details
            </ModalHeader>
          }
          open={showMapIframe}
          onOpenChange={handleModalMapOpenChange}
          dismissible={true}
          style={{
            backgroundColor: "transparent",
            bottom: "0",
            display: "flex",
            alignContent: "space-between",
            minHeight: "100%",
          }}
        >
          <div
            id="genn-LandingPages-map"
            className={`p-6 flex flex-col flex-[1]  text-black ${
              thems === "light"
                ? "bg-white text-black"
                : "bg-[#34495e] text-white"
            }`}
          >
            <div className="flex flex-col ">
              <div className="flex items-center justify-center pt-[10px] pb-[30px]">
                <h2 className=" text-center  text-[26px] font-[600] ">
                  {LocalText.LandingPagesOrg.modelMap}
                </h2>
                <img
                  className="w-[20px] items-center mt-[6px] ml-[10px]"
                  src={questionIco}
                  alt={LocalText.BuyPage.titleHead}
                  onClick={() => showQuestionMapHandler()}
                />
              </div>
              {showQuestionMap && (
                <div
                  className={`mb-[20px] px-[10px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 ${
                    showQuestionMap ? "transition-content-enter" : ""
                  }`}
                >
                  {LocalText.LandingPagesOrg.modelMapQuestion}
                </div>
              )}
            </div>

            <div className="flex-[1] flex">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeea953657fb7f2652860a7c81e04f3adb78e6e68ebd873b32760a348ff0fd9c7&amp;source=constructor"
                width="100%"
                minHeight="100%"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </Modal>
        {/* third modal for comments iframe */}
        <Modal
          header={
            <ModalHeader style={{ backgroundColor: "transparent" }}>
              Comments
            </ModalHeader>
          }
          open={showIframeComment}
          onOpenChange={handleModalCommentOpenChange}
          dismissible={true}
          style={{
            backgroundColor: "transparent",
            bottom: "0",
            display: "flex",
            alignContent: "space-between",
            minHeight: "100%",
          }}
        >
          <div
            className={`p-6 flex flex-col flex-[1] text-black ${
              thems === "light"
                ? "bg-white text-black"
                : "bg-[#34495e] text-white"
            }`}
          >
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-center pt-[10px] pb-[30px]">
                <h2 className="text-center  text-[26px] font-[600] ">
                  {LocalText.LandingPagesOrg.modelComment}
                </h2>
                <img
                  className="w-[20px] items-center mt-[6px] ml-[10px] "
                  src={questionIco}
                  alt={LocalText.BuyPage.titleHead}
                  onClick={() => showQuestionCommentHandler()}
                />
              </div>
              {showQuestionComment && (
                <div
                  className={`mb-[20px] px-[10px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 ${
                    showQuestionComment ? "transition-content-enter" : ""
                  }`}
                >
                  {LocalText.LandingPagesOrg.modelCommentQuestion}
                </div>
              )}
            </div>

            <div id="genn-LandingPages-coment" className=" flex-[1] flex">
              <iframe
                style={{
                  width: "100%",
                  minHeight: "100%",
                  border: "1px solid #e6e6e6",
                  borderRadius: "8px",
                  boxSizing: "border-box",
                }}
                src="https://yandex.ru/maps-reviews-widget/107780353451?comments"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </Modal>
        {/* four model for sharing */}
        <Modal
          header={
            <ModalHeader style={{ backgroundColor: "transparent" }}>
              Comments
            </ModalHeader>
          }
          open={showShareModel}
          onOpenChange={handleModalShareOpenChange}
          dismissible={true}
          style={{
            backgroundColor: "transparent",
            bottom: "0",
            display: "flex",
            alignContent: "space-between",
            minHeight: "100%",
          }}
        >
          <div
            className={`flex-[1] ${
              thems === "light"
                ? "bg-white text-black"
                : "bg-[#34495e] text-white"
            }`}
          >
            <div className={`flex flex-col justify-center p-6`}>
              <div className="flex justify-center  pt-[10px] pb-[30px]">
                <h2 className=" text-[20px]  font-[600]">
                  {LocalText.LandingPagesOrg.modelSharingTitle}
                </h2>
                <img
                  className="w-[20px] items-center mt-[6px] ml-[10px]"
                  src={questionIco}
                  alt={LocalText.BuyPage.titleHead}
                  onClick={() => showQuestionSharingHandler()}
                />
              </div>
              {showQuestionSharing && (
                <div
                  className={`mb-[20px] px-[10px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 ${
                    showQuestionSharing ? "transition-content-enter" : ""
                  }`}
                >
                  {LocalText.LandingPagesOrg.modelSharingQuestion}
                </div>
              )}
            </div>
            <div id="genn-LandingPages-share" className="p-6">
              <div>{LocalText.LandingPagesOrg.shareText}</div>
            </div>
            <div className=" p-6 flex  justify-between">
              <img
                src={telegramIco}
                className=" mb-[10px]"
                onClick={() => {
                  WebApp.openTelegramLink(
                    "https://t.me/share/url?url=https://t.me/MenuApps_bot?profile&text=this is my bot"
                  );
                }}
              ></img>
              <a
                href="https://api.whatsapp.com/send?text=Check%20out%20this%20link:%20https://t.me/MenuApps_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <img src={whatsApp} className="  mb-[10px]" />
              </a>
              <a
                href="https://vk.com/share.php?url=https://t.me/MenuApps_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <img src={vk} className="" />
              </a>
              <a
                href="https://connect.ok.ru/offer?url=https://t.me/MenuApps_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <img src={okIcon} className="" alt="Share on OK.ru" />
              </a>

              <a
                href="https://twitter.com/intent/tweet?url=https://t.me/MenuApps_bot&text=Check%20out%20this%20link!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <img src={xIcon} className="" alt="Share on X" />
              </a>
            </div>
          </div>
        </Modal>
        {/* Модальные окна для иконок организации - окончание */}
      </div>
    </div>
  );
};

export default LandingPages;
