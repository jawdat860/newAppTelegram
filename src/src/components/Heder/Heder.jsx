import Authorization from "./Authorization/Authorization";
import Share from "./Share/Share";
import YaComents from "./YaComents/YaComents";
import YaMap from "./YaMap/YaMap";
import { useState, useRef, useEffect } from "react";
import { LocalText } from "../LocakText/LocalText";
import image1 from "../../assets/logo-b29-marino.svg";
import iconYandex from "../../assets/ico/ico-ya-r.svg";
import iconYandexMap from "../../assets/ico/ico-ya-map.svg";
import iconShare from "../../assets/ico/ico-share.svg";
import iconNelegram from "../../assets/ico/ico-telegram.svg";
import iconUserIco from "../../assets/ico/ico-logo-genn.svg";
import questionIco from "../../assets/ico/questionblue.svg";
import WebApp from "@twa-dev/sdk"; // Assuming this package works in JavaScript
import telegramIco from "../../assets/ico/icons8-telegram-app.svg";
import vk from "../../assets/ico/icons8-vk-circled.svg";
import xIcon from "../../assets/ico/icons8-twitter.svg";
import okIcon from "../../assets/ico/icons8-одноклассники.svg";
import whatsApp from "../../assets/ico/icons8-whatsapp.svg";
import RezimRaboty from "./RezimRaboty/RezimRaboty";
import InfoModal from "./InfoModal";
const TG_BOT_TOKEN = "7347780887:AAGiNI5Pvs1iHHONlBV3zQibnC_UFm7slys"; // Replace with your actual Bot Token
function Heder({ thems ,dataColor}) {
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
    
   const bg = dataColor.BodyAll.Question_Bg
  console.log(bg)
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
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setDateFormat(new Date()); 
  //   }, 1000); // Update every second

  //   return () => clearInterval(timer); // Cleanup on component unmount
  // }, []);
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
    <div className="relative bg-[url('./assets/bg/bg-1.webp')] bg-cover bg-center bg-no-repeat py-[0px]  text-center pb-20 ">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div id="genn-Authorization" className="genn-Authorization">
        <Authorization
        dataColor={dataColor}
          thems={thems}
          LocalText={LocalText}
          iconNelegram={iconNelegram}
          initData={initData}
          userPhotoUrl={userPhotoUrl}
        />
      </div>
      <div
        id="genn-Heder"
        className="genn-Heder-block relative mx-auto text-white px-[10px]"
      >
        <div className="genn-Heder-logo flex justify-center py-[40px]">
          <img src={image1} alt="Logo" className="w-[180px] h-[45px]" />
        </div>

        <h1
          id="genn-LandingPage-Org-titl-h1"
          className="p-0 m-0 text-[26px] leading-[20px] text-white font-[100] font-bold"
        >
          <span className="genn-Heder-h1-sub text-[26px]">
            {LocalText.LandingPagesOrg.titleH1}
          </span>{" "}
          <span className="genn-Heder-h1-sub text-[14px]">
            {LocalText.LandingPagesOrg.titleH1sub}
          </span>
        </h1>

        <div
          id="genn-LandingPage-Org-description"
          ref={paragraphRef}
          className="genn-Heder-description mt-[20px] max-h-[168px] overflow-hidden text-ellipsis "
        >
          {LocalText.LandingPagesOrg.description}
        </div>

        <div className="genn-Heder-btn-icon-block flex justify-between mt-[20px]">
          <div className="genn-Heder-description-btn">
            {showReadMore &&
              LocalText.LandingPagesOrg.descriptionLong !== "" && (
                <button
                  onClick={() => {
                    setShowText(true);
                  }}
                  className={`block genn-ico-redmore h-[100%]  ${
                    thems === "light"
                      ? "bg-[#fff] text-buttonOrgReadMore"
                      : "bg-[#3e4356] text-white"
                  }  rounded-[100px] py-[0] px-[20px]   text-[14px]`}
                >
                  {LocalText.LandingPagesOrg.readMoreButton}
                </button>
              )}
          </div>

          <div className="genn-Heder-icon-block flex gap-[6px]">
            <div className="genn-Heder-ico">
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
            </div>
            <div className="genn-Heder-ico-modal">
              <YaMap
                showQuestionMap={showQuestionMap}
                showMapIframe={showMapIframe}
                handleModalMapOpenChange={handleModalMapOpenChange}
                thems={thems}
                LocalText={LocalText}
                questionIco={questionIco}
                showQuestionMapHandler={showQuestionMapHandler}
              />
            </div>

            <div className="genn-Heder-ico">
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
            </div>
            <div className="genn-Heder-ico-modal">
              <YaComents
                showIframeComment={showIframeComment}
                showQuestionComment={showQuestionComment}
                showQuestionCommentHandler={showQuestionCommentHandler}
                handleModalCommentOpenChange={handleModalCommentOpenChange}
                thems={thems}
                LocalText={LocalText}
                questionIco={questionIco}
              />
            </div>
            <div className="genn-Heder-ico">
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
            <div className="genn-Heder-ico-modal">
              <Share
                showShareModel={showShareModel}
                handleModalShareOpenChange={handleModalShareOpenChange}
                thems={thems}
                LocalText={LocalText}
                questionIco={questionIco}
                showQuestionSharingHandler={showQuestionSharingHandler}
                showQuestionSharing={showQuestionSharing}
                telegramIco={telegramIco}
                whatsApp={whatsApp}
                vk={vk}
                okIcon={okIcon}
                xIcon={xIcon}
              />
            </div>
          </div>
        </div>

        <div id="genn-RezimRaboty" className="genn-RezimRaboty-block pt-[10px]">
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
      </div>
      <InfoModal
        thems={thems}
        showQuestionTextLong={showQuestionTextLong}
        showText={showText}
        handleModalTextOpenChange={handleModalTextOpenChange}
        LocalText={LocalText}
        questionIco={questionIco}
        showQuestionTextLongHandler={showQuestionTextLongHandler}
      />
      <RezimRaboty
        getDayText={getDayText}
        formattedMinutes={formattedMinutes}
        hourss={hourss}
        showTextWorkHandler={showTextWorkHandler}
        getFormattedDayDate={getFormattedDayDate}
        showTextWork={showTextWork}
        showWorkModel={showWorkModel}
        setShowWorkModelHandler={setShowWorkModelHandler}
        thems={thems}
        questionIco={questionIco}
        getDayClass={getDayClass}
      />
    </div>
  );
}
export default Heder;
