import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
function YaMap({
  showMapIframe,
  handleModalMapOpenChange,
  thems,
  LocalText,
  questionIco,
  showQuestionMap,
  showQuestionMapHandler,
}) {
  return (
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
      <>
        <div
          className={`genn-Modal-YaMap-titl-block p-6 flex flex-col flex-[1]  text-black ${
            thems === "light"
              ? "bg-white text-black"
              : "bg-[#34495e] text-white"
          }`}
        >
          <div className="flex items-center justify-center pt-[10px] pb-[30px]">
            <h2 className=" text-center  text-[26px] font-[600] ">
              {LocalText.LandingPagesOrg.modelMap}
            </h2>

            <img
              className="genn-Modal-YaMap-titl-question w-[20px] items-center mt-[6px] ml-[10px]"
              src={questionIco}
              alt={LocalText.BuyPage.titleHead}
              onClick={() => showQuestionMapHandler()}
            />
          </div>
          <div className="genn-Modal-YaMap-titl-modal-description">
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

          <div className="genn-Modal-YaMap-titl-description flex-[1] flex">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeea953657fb7f2652860a7c81e04f3adb78e6e68ebd873b32760a348ff0fd9c7&amp;source=constructor"
              width="100%"
              minHeight="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </>
    </Modal>
  );
}
export default YaMap;
