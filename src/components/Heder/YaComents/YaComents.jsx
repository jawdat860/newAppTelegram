import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
function YaComents({
  showIframeComment,
  handleModalCommentOpenChange,
  thems,
  LocalText,
  questionIco,
  showQuestionCommentHandler,
  showQuestionComment,
}) {
  return (
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
      <>
        <div
          id="genn-Modal-YaComents"
          className={`genn-Modal-YaComents-block p-6 flex flex-col flex-[1] ${
            thems === "light"
              ? "genn-modal-block-bg genn-modal-block-text"
              : "genn-modal-block-bg-dark  genn-modal-block-text-dark"
          }`}
        >
          <div className="genn-Modal-YaComents-titl-block flex items-center justify-center pt-[10px] pb-[10px]">
            <h2
              className={`text-[18px]  font-[600] mr-[10px]
              ${
                thems === "light"
                  ? "genn-modal-titl-h2"
                  : "genn-modal-titl-h2-dark"
              }`}
            >
              {LocalText.LandingPagesOrg.modelComment}
            </h2>

            <div className="genn-modal-question">
              <div
                onClick={showQuestionCommentHandler}
                className={`text-[14px] w-[24px] h-[24px] flex justify-center items-center
                ${thems === "light" ? "genn-question" : "genn-question-dark"}`}
              >
                ?
              </div>
            </div>
          </div>
          <div className="genn-Modal-YaComents-titl-modal-description">
            {showQuestionComment && (
              <div
                className={`my-[10px] px[15px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 
                  ${showQuestionComment ? "transition-content-enter" : ""}
                  ${
                    thems === "light"
                      ? "genn-Modal-info-description-question-block"
                      : "genn-Modal-info-description-question-block-dark"
                  }`}
              >
                {LocalText.LandingPagesOrg.modelCommentQuestion}
              </div>
            )}
          </div>

          <div className="genn-Modal-YaComents-titl-description flex-[1] flex">
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
      </>
    </Modal>
  );
}
export default YaComents;
