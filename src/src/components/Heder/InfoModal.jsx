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
          className={`genn-Modal-info-block p-6 flex flex-col flex-[1] text-black ${
            thems === "light"
              ? "bg-white text-black"
              : "bg-[#34495e] text-white"
          }`}
        >
          <div className="genn-Modal-info-titl-block flex justify-center items-center">
            <h2 className="text-[16px]  font-[600]">
              {LocalText.LandingPagesOrg.TextLong}
            </h2>
            <div className="genn-Modal-info-titl-question">
              <img
                className="w-[20px] items-center  mt-[5px] ml-[10px]"
                src={questionIco}
                alt={LocalText.BuyPage.titleHead}
                onClick={() => showQuestionTextLongHandler()}
              />
            </div>
            {showQuestionTextLong && (
              <div
                className={`mb-[20px] genn-Modal-info-titl-modal-description px-[10px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 ${
                  showQuestionTextLong ? "transition-content-enter" : ""
                }`}
              >
                {LocalText.LandingPagesOrg.TextLongQuestion}{" "}
                {LocalText.LandingPagesOrg.titleH1}
              </div>
            )}
          </div>
          <div className="genn-Modal-info-titl-description">
            <p>{LocalText.LandingPagesOrg.descriptionLong}</p>
          </div>
        </div>
      </>
    </Modal>
  );
}
