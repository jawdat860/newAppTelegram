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
import axios from "axios";
const TG_BOT_TOKEN = "7347780887:AAGiNI5Pvs1iHHONlBV3zQibnC_UFm7slys"; // Replace with your actual Bot Token
function Heder({ thems }) {
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
    
  const [dataColor , setDataColor ] = useState({})
  // fetch data for show color from API
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get("https://menuapp.ru/api/v1/style");
          setDataColor(data.style);

        } catch (err) {
          setError("Failed to load services.");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    },[]);
    console.log(dataColor);
  const getDayClass = (day , id) => {
    const yseterday= new Date().getDay()
    
    const currentDay = dateFormat.toLocaleDateString("ru-RU", {
      weekday: "long",
    });
  
    return day === currentDay 
      ? thems === "light" ? "genn-modal-RezimRaboty-block-active rounded-[10px] font-bold flex flex-wrap  " : "genn-modal-RezimRaboty-block-active-dark rounded-[10px] font-bold flex flex-wrap"
      : id !== yseterday-1?"border-b":"border-b-[0] jawdar" ;
      


  };
  const getDayText = (day) => {
    const currentDay = dateFormat.toLocaleDateString("ru-RU", {
      weekday: "long",
    });
    return day === currentDay ? (
      <div
        className={`${
          worknow
            ? thems === "light" ? "genn-modal-RezimRaboty-block-worknow flex flex-col items-center mx-[10px] rounded-b-[10px] text-[12px] pl-2 " :"genn-modal-RezimRaboty-block-worknow-dark flex flex-col items-center mx-[10px] rounded-b-[10px]  text-[12px] pl-2 "
            : thems === "light" ? "genn-modal-RezimRaboty-block-ne-worknow pl-2 text-[12px]" : "genn-modal-RezimRaboty-block-ne-worknow-dark"
        }`}
      >
        {worknow
          ? <div className={`${thems === "light" ? "genn-RezimRaboty-modal-status-open" : "genn-RezimRaboty-modal-status-open-dark"}`}>{LocalText.LandingPagesOrg.nowOpen}</div>
          : <div className={`${thems === "light" ? "genn-RezimRaboty-modal-status-close" : "genn-RezimRaboty-modal-status-close-dark"}`}>{LocalText.LandingPagesOrg.nowClose}</div>}
        {!worknow ? (
          
          <><span className={`${thems === "light" ? "genn-RezimRaboty-modal-time-text-block-close-text mr-[10px]" : "genn-RezimRaboty-modal-time-text-block-close-text-dark mr-[10px]"}`}>
                {`${LocalText.LandingPagesOrg.closeTimeLeft}`}
                </span>
                <span className="flex gap-[5px]">
                  <span className={`${thems === "light" ? "genn-RezimRaboty-modal-time-text-block-close-time" : "genn-RezimRaboty-modal-time-text-block-close-time-dark"}`}>
                  {`${hours}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-modal-time-text-block-close-time-value" : "genn-RezimRaboty-modal-time-text-block-close-time-value-dark"}`}>
                  {`${LocalText.LandingPagesOrg.houres}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-modal-time-text-block-close-time" : "genn-RezimRaboty-modal-time-text-block-close-time-dark"}`}>
                  {`${min}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-modal-time-text-block-close-time-value" : "genn-RezimRaboty-modal-time-text-block-close-time-value-dark"}`}>
                  {`${LocalText.LandingPagesOrg.minutes} `}
                  </span>
                </span>
                </>
        ) : (
       
          <><div className="flex" ><span className={`${thems === "light" ? "genn-RezimRaboty-modal-time-text-block-open-text mr-[10px]" : "genn-RezimRaboty-modal-time-text-block-open-text-dark mr-[10px]"}`}>
                {`${LocalText.LandingPagesOrg.openTimeLeft}`}
                </span>
                <div className="flex gap-[5px]">
                  <span className={`${thems === "light" ? "genn-RezimRaboty-modal-time-text-block-open-time" : "genn-RezimRaboty-modal-time-text-block-open-time-dark"}`}>
                  {`${hours}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-modal-time-text-block-open-time-value" : "genn-RezimRaboty-modal-time-text-block-open-time-value-dark"}`}>
                  {`${LocalText.LandingPagesOrg.houres}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-modal-time-text-block-open-time" : "genn-RezimRaboty-time-modal-text-block-open-time-dark"}`}>
                  {`${min}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-modal-time-text-block-open-time-value" : "genn-RezimRaboty-modal-time-text-block-open-time-value-dark"}`}>
                  {`${LocalText.LandingPagesOrg.minutes} `}
                  </span>
                </div>
                </div>
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
    <div className={`relative py-[0px]  text-center pb-20
      ${thems === "light" ? "genn-heder-block" : "genn-heder-block-dark"}`}>
      <div className={`absolute inset-0
      ${thems === "light" ? "genn-heder-block-perekrytie" : "genn-heder-block-perekrytie-dark"}`}></div>
      

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
        <h1 className={`p-0 m-0 text-[26px] leading-[20px] text-white font-[100] font-bold  ${thems === "light" ? "genn-LandingPage-Org-titl-h1" : "genn-LandingPage-Org-titl-h1-dark"}`}>
          <span className={`text-[26px]  ${thems === "light" ? "genn-Heder-h1-big" : "genn-Heder-h1-big-dark"}`}>          
            {LocalText.LandingPagesOrg.titleH1}
          </span>
          <br/>
          <span className={`font-[100] ${thems === "light" ? "genn-Heder-h1-sub" : "genn-Heder-h1-sub-dark"}`}>  
            {LocalText.LandingPagesOrg.titleH1sub}
          </span>
        </h1>

        <div
          id="genn-LandingPage-Org-description"
          ref={paragraphRef}
          className={`mt-[20px] max-h-[170px] overflow-hidden text-ellipsis ${thems === "light" ? "genn-Heder-description" : "genn-Heder-description-dark"}`}          
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
                  className={`h-[100%] py-[0] px-[20px] text-[14px] 
                    ${thems === "light" ? "block genn-ico-redmore" : "block genn-ico-redmore-dark"}`}>
                  {LocalText.LandingPagesOrg.readMoreButton}
                </button>
              )}
          </div>

          <div className="genn-Heder-icon-block flex gap-[6px]">
            <div className="genn-Heder-ico">
              <button id="genn-LandingPage-Org-ButtonMap"
                onClick={() => {
                  setShowMapIframe(true); // Show map iframe in modal
                }}
                className={`text-blue-500 underline block h-[45px] w-[45px] p-[7px] decoration-auto 
                  ${thems === "light" ? "genn-Heder-ico-map" : "genn-Heder-ico-map-dark"}`}                
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
                id="genn-LandingPage-Org-ButtonComment"
                onClick={() => {
                  setShowIframeComment(true); // Show comments iframe in modal
                }}
                className={`text-blue-500 underline block h-[45px] w-[45px] p-[7px] 
                  ${thems === "light" ? "genn-Heder-ico-Comment" : "genn-Heder-ico-Comment-dark"}`}
                
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
                id="genn-LandingPage-Org-ButtonSharing"
                onClick={() => {
                  setShowShareModel(true); // Show comments iframe in modal
                }}
                className={`text-blue-500 underline block h-[45px] w-[45px] p-[7px]  
                  ${thems === "light" ? "genn-Heder-ico-share" : "genn-Heder-ico-share-dark"}`}>
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
            
            <div className={`font-bold  
                  ${thems === "light" ? "genn-RezimRaboty-titl" : "genn-RezimRaboty-titl-dark"}`}>
              {LocalText.LandingPagesOrg.workTimeTitle}
            </div>
           
            <div onClick={() => setShowWorkModel(true)}
              className={`text-[14px] w-[24px] h-[24px] flex justify-center items-center
                ${thems === "light" ? "genn-question" : "genn-question-dark"}`}>
                  ?
                </div>
            <div className={`${thems === "light" ? worknow? "genn-RezimRaboty-status-open" : "genn-RezimRaboty-status-close": worknow?"genn-RezimRaboty-status-open-dark":"genn-RezimRaboty-status-close-dark"}`}>
              {worknow
                ? LocalText.LandingPagesOrg.nowOpen
                : LocalText.LandingPagesOrg.nowClose}
            </div>
          </div>

          <div className={`flex justify-center gap-[20px] ${thems === "light" ? "genn-RezimRaboty-time-text-block" : "genn-RezimRaboty-time-block-text-dark"}`}>
            {!worknow ? (
              <><span className={`${thems === "light" ? "genn-RezimRaboty-time-text-block-close-text" : "genn-RezimRaboty-time-text-block-close-text-dark"}`}>
                {`${LocalText.LandingPagesOrg.closeTimeLeft}`}
                </span>
                <div className="flex gap-[5px]">
                  <span className={`${thems === "light" ? "genn-RezimRaboty-time-text-block-close-time" : "genn-RezimRaboty-time-text-block-close-time-dark"}`}>
                  {`${hours}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-time-text-block-close-time-value" : "genn-RezimRaboty-time-text-block-close-time-value-dark"}`}>
                  {`${LocalText.LandingPagesOrg.houres}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-time-text-block-close-time" : "genn-RezimRaboty-time-text-block-close-time-dark"}`}>
                  {`${min}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-time-text-block-close-time-value" : "genn-RezimRaboty-time-text-block-close-time-value-dark"}`}>
                  {`${LocalText.LandingPagesOrg.minutes} `}
                  </span>
                </div>
                </>
            ) : (
              <><span className={`${thems === "light" ? "genn-RezimRaboty-time-text-block-open-text" : "genn-RezimRaboty-time-text-block-open-text-dark"}`}>
                {`${LocalText.LandingPagesOrg.openTimeLeft}`}
                </span>
                <div className="flex gap-[5px]">
                  <span className={`${thems === "light" ? "genn-RezimRaboty-time-text-block-open-time" : "genn-RezimRaboty-time-text-block-open-time-dark"}`}>
                  {`${hours}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-time-text-block-open-time-value" : "genn-RezimRaboty-time-text-block-open-time-value-dark"}`}>
                  {`${LocalText.LandingPagesOrg.houres}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-time-text-block-open-time" : "genn-RezimRaboty-time-text-block-open-time-dark"}`}>
                  {`${min}`}
                  </span>
                  <span className={`${thems === "light" ? "genn-RezimRaboty-time-text-block-open-time-value" : "genn-RezimRaboty-time-text-block-open-time-value-dark"}`}>
                  {`${LocalText.LandingPagesOrg.minutes} `}
                  </span>
                </div>
              </>
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
        LocalText={LocalText}
      />
    </div>
  );
}
export default Heder;
