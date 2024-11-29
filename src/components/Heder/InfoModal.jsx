import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
export default function InfoModal({
  showText,
  handleModalTextOpenChange,
  thems,
  LocalText,
  questionIco,
  showQuestionTextLong,
  showQuestionTextLongHandler,
}) {
  return (
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
      <>
        <div
          id="genn-Modal-info"
          className={`p-6 flex flex-col flex-[1] text-black ${
            thems === "light"
              ? "genn-Modal-info-block genn-modal-block-bg genn-modal-block-text"
              : "genn-Modal-info-block-dark genn-modal-block-bg-dark genn-modal-block-text-dark"
          }`}
        >
          <div className="genn-Modal-info-titl-block flex justify-center items-center">
            <h2
              className={`text-[18px]  font-[600] mr-[10px]
              ${
                thems === "light"
                  ? "genn-modal-titl-h2"
                  : "genn-modal-titl-h2-dark"
              }`}
            >
              {LocalText.LandingPagesOrg.TextLong}
            </h2>
            <div className="genn-modal-question">
              <div
                onClick={showQuestionTextLongHandler}
                className={`text-[14px] w-[24px] h-[24px] flex justify-center items-center
                ${thems === "light" ? "genn-question" : "genn-question-dark"}`}
              >
                ?
              </div>
            </div>
          </div>
          {showQuestionTextLong && (
            <div
              className={`my-[10px] px[15px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 
                  ${showQuestionTextLong ? "transition-content-enter" : ""}
                  ${
                    thems === "light"
                      ? "genn-Modal-info-description-question-block"
                      : "genn-Modal-info-description-question-block-dark"
                  }`}
            >
              {LocalText.LandingPagesOrg.TextLongQuestion}{" "}
              {LocalText.LandingPagesOrg.titleH1}
            </div>
          )}
          <div
            className={`
            ${
              thems === "light"
                ? "genn-Modal-info-description"
                : "genn-Modal-info-description-dark"
            }
            `}
          >
            <div>{LocalText.LandingPagesOrg.descriptionLong} </div>
          </div>
        </div>
      </>
    </Modal>
  );
}
