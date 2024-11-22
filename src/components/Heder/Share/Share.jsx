import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import WebApp from "@twa-dev/sdk";
function Share({
  showShareModel,
  handleModalShareOpenChange,
  thems,
  questionIco,
  showQuestionSharing,
  LocalText,
  showQuestionSharingHandler,
  telegramIco,
  vk,
  okIcon,
  xIcon,
  whatsApp,
}) {
  return (
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
      <>
        <div
          id="genn-Modal-Share"
          className={`genn-Modal-Share-block flex-[1] ${
            thems === "light"
              ? "bg-white text-black"
              : "bg-[#34495e] text-white"
          }`}
        >
          <div className="genn-Modal-Share-titl-block flex justify-center  pt-[10px] pb-[30px]">
            <h2 className=" text-[20px]  font-[600]">
              {LocalText.LandingPagesOrg.modelSharingTitle}
            </h2>
            <div className="genn-Modal-Share-titl-question">
              <img
                className="w-[20px] items-center mt-[6px] ml-[10px]"
                src={questionIco}
                alt={LocalText.BuyPage.titleHead}
                onClick={() => showQuestionSharingHandler()}
              />
            </div>
          </div>
          <div className="genn-Modal-Share-titl-modal-description">
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

          <div className=" p-6 flex  justify-between">
            <div className="genn-Modal-Share-block-tele">
              <img
                src={telegramIco}
                className=" mb-[10px]"
                onClick={() => {
                  WebApp.openTelegramLink(
                    "https://t.me/share/url?url=https://t.me/MenuApps_bot?profile&text=this is my bot"
                  );
                }}
              />
            </div>
            <div className="genn-Modal-Share-block-whatsapp">
              <a
                href="https://api.whatsapp.com/send?text=Check%20out%20this%20link:%20https://t.me/MenuApps_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <img src={whatsApp} className="  mb-[10px]" />
              </a>
            </div>
            <div className="genn-Modal-Share-block-vk">
              <a
                href="https://vk.com/share.php?url=https://t.me/MenuApps_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <img src={vk} className="" />
              </a>
            </div>
            <div className="genn-Modal-Share-block-ok">
              <a
                href="https://connect.ok.ru/offer?url=https://t.me/MenuApps_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <img src={okIcon} className="" alt="Share on OK.ru" />
              </a>
            </div>
            <div className="genn-Modal-Share-block-twitter">
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
        </div>
      </>
    </Modal>
  );
}
export default Share;

{/* <div
className={`genn-LandingPages-rezim-raboty-casy  flex justify-between items-center gap-[30px] text-[30px] ${
  thems === "light" ? "bg-[#f3f3f3]" : "bg-[#4e6174] "
}  rounded-[20px] border-[2px] border-dashed border-[#ddd] px-[20px] mb-[30px] font-[900]`}
>
{getFormattedDayDate(new Date())}
{hourss}:{formattedMinutes}
</div> */}

//     <div className={`flex flex-col justify-center p-6`}>
//       <div className="flex justify-center  pt-[10px] pb-[30px]">
//         <h2 className=" text-[20px]  font-[600]">
//           {LocalText.LandingPagesOrg.modelSharingTitle}
//         </h2>
//         <img
//           className="w-[20px] items-center mt-[6px] ml-[10px]"
//           src={questionIco}
//           alt={LocalText.BuyPage.titleHead}
//           onClick={() => showQuestionSharingHandler()}
//         />
//       </div>
//       {showQuestionSharing && (
//         <div
//           className={`mb-[20px] px-[10px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 ${
//             showQuestionSharing ? "transition-content-enter" : ""
//           }`}
//         >
//           {LocalText.LandingPagesOrg.modelSharingQuestion}
//         </div>
//       )}
//     </div>
//     <div id="genn-LandingPages-share" className="p-6">
//       <div>{LocalText.LandingPagesOrg.shareText}</div>
//     </div>
//     <div className=" p-6 flex  justify-between">
//       <img
//         src={telegramIco}
//         className=" mb-[10px]"
//         onClick={() => {
//           WebApp.openTelegramLink(
//             "https://t.me/share/url?url=https://t.me/MenuApps_bot?profile&text=this is my bot"
//           );
//         }}
//       ></img>
//       <a
//         href="https://api.whatsapp.com/send?text=Check%20out%20this%20link:%20https://t.me/MenuApps_bot"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-black"
//       >
//         <img src={whatsApp} className="  mb-[10px]" />
//       </a>
//       <a
//         href="https://vk.com/share.php?url=https://t.me/MenuApps_bot"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-black"
//       >
//         <img src={vk} className="" />
//       </a>
//       <a
//         href="https://connect.ok.ru/offer?url=https://t.me/MenuApps_bot"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-black"
//       >
//         <img src={okIcon} className="" alt="Share on OK.ru" />
//       </a>

//       <a
//         href="https://twitter.com/intent/tweet?url=https://t.me/MenuApps_bot&text=Check%20out%20this%20link!"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-black"
//       >
//         <img src={xIcon} className="" alt="Share on X" />
//       </a>
//     </div>
//   </div>
// </Modal>
