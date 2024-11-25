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
          className={`genn-Modal-YaComents-block p-6 flex flex-col flex-[1] text-black ${
            thems === "light"
              ? "bg-white text-black"
              : "bg-[#34495e] text-white"
          }`}
        >
          <div className="genn-Modal-YaComents-titl-block flex items-center justify-center pt-[10px] pb-[30px]">
            <h2 className="text-center  text-[26px] font-[600] ">
              {LocalText.LandingPagesOrg.modelComment}
            </h2>
            <div className="genn-Modal-YaComents-titl-question">
              <img
                className="w-[20px] items-center mt-[6px] ml-[10px] "
                src={questionIco}
                alt={LocalText.BuyPage.titleHead}
                onClick={() => showQuestionCommentHandler()}
              />
            </div>
          </div>
          <div className="genn-Modal-YaComents-titl-modal-description">
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
