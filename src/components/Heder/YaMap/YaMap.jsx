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
              ? "genn-modal-block-bg genn-modal-block-text"
              : "genn-modal-block-bg-dark  genn-modal-block-text-dark"
          }`}
        >
          <div className="flex items-center justify-center pt-[10px] pb-[10px]">
            <h2
              className={`text-[18px]  font-[600] mr-[10px]
              ${
                thems === "light"
                  ? "genn-modal-titl-h2"
                  : "genn-modal-titl-h2-dark"
              }`}
            >
              {LocalText.LandingPagesOrg.modelMap}
            </h2>

            <div className="genn-modal-question">
              <div
                onClick={showQuestionMapHandler}
                className={`text-[14px] w-[24px] h-[24px] flex justify-center items-center
                ${thems === "light" ? "genn-question" : "genn-question-dark"}`}
              >
                ?
              </div>
            </div>
          </div>
          <div className="genn-Modal-YaMap-titl-modal-description">
            {showQuestionMap && (
              <div
                className={`my-[10px] px[15px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 
                  ${showQuestionMap ? "transition-content-enter" : ""}
                  ${
                    thems === "light"
                      ? "genn-Modal-info-description-question-block"
                      : "genn-Modal-info-description-question-block-dark"
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
