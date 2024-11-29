import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
function RezimRaboty({
  showWorkModel,
  setShowWorkModelHandler,
  thems,

  showTextWorkHandler,
  showTextWork,
  getFormattedDayDate,
  hourss,
  formattedMinutes,
  getDayClass,
  getDayText,
  LocalText,
}) {
  return (
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
      <>
        <div
          id="genn-RezimRaboty"
          className={`genn-RezimRaboty-block flex-[1] p-[20px] ${
            thems === "light"
              ? "genn-RezimRaboty-block genn-modal-block-bg genn-modal-block-text"
              : "genn-RezimRaboty-block-dark genn-modal-block-bg-dark genn-modal-block-text-dark"
          }`}
        >
          <div className="genn-RezimRaboty-open-close text-[24px] text-center mb-[20px] font-[700] flex justify-center items-crnter gap-[10px]">
            <h2
              className={`text-[18px]  font-[600] mr-[10px]
              ${
                thems === "light"
                  ? "genn-modal-titl-h2"
                  : "genn-modal-titl-h2-dark"
              }`}
            >
              {LocalText.ServiceModal.RezimRaboty}
            </h2>

            <div className="genn-modal-question">
              <div
                onClick={showTextWorkHandler}
                className={`text-[14px] w-[24px] h-[24px] flex justify-center items-center
                ${thems === "light" ? "genn-question" : "genn-question-dark"}`}
              >
                ?
              </div>
            </div>
          </div>

          {showTextWork && (
            <div
              className={`my-[10px] px[15px] text-center transition-content  transition-opacity duration-300 ease-in-out transform translate-y-2 
                  ${showTextWork ? "transition-content-enter" : ""}
                  ${
                    thems === "light"
                      ? "genn-Modal-info-description-question-block"
                      : "genn-Modal-info-description-question-block-dark"
                  }`}
            >
              {LocalText.LandingPagesOrg.modelRezimRabotyQuestion}
            </div>
          )}

          <div className="genn-RezimRaboty-time">
            <div className="genn-RezimRaboty-time-titl">
              <div
                className={`  flex justify-between items-center gap-[30px] text-[30px] ${
                  thems === "light"
                    ? "genn-LandingPages-rezim-raboty-chasy"
                    : "genn-LandingPages-rezim-raboty-chasy-dark"
                }  rounded-[20px] border-[2px] border-dashed border-[#ddd] px-[20px] mb-[30px] font-[900]`}
              >
                {getFormattedDayDate(new Date())}
                {hourss}:{formattedMinutes}
              </div>
            </div>
            <div className="genn-RezimRaboty-value">
              <div
                className={`${
                  thems === "light"
                    ? "genn-LandingPages-rezim-raboty-tab"
                    : "genn-LandingPages-rezim-raboty-tab-dark]"
                } rounded-[20px] p-[20px]  border-[2px] border-dashed border-[#ddd]  mb-[30px] w-full`}
              >
                {[
                  { day: "понедельник", hours: "с 8:00 до  17:00", id: 1 },
                  { day: "вторник", hours: "с 8:00 до  17:00", id: 2 },
                  { day: "среда", hours: "с 8:00 до  17:00", id: 3 },
                  { day: "четверг", hours: "с 8:00 до  17:00", id: 4 },
                  { day: "пятница", hours: "с 8:00 до  17:00", id: 5 },
                  { day: "суббота", hours: "с 8:00 до  17:00", id: 6 },
                  { day: "воскресенье", hours: "с 8:00 до  17:00", id: 7 },
                ].map(({ day, hours, id }) => (
                  <>
                    <div>
                      <div
                        key={id}
                        className={`${getDayClass(
                          day,
                          id
                        )}  flex justify-between  ${
                          id === 7 ? "border-b-0" : ""
                        }`}
                      >
                        <div className="p-2">{day}</div>
                        <div className="p-2 flex-[1] text-end">{hours}</div>
                      </div>
                      <div className=" ">{getDayText(day)}</div>
                    </div>
                  </>
                ))}
              </div>
              <div
                className={`
                    ${
                      thems === "light"
                        ? "genn-Modal-info-description"
                        : "genn-Modal-info-description-dark"
                    }
                `}
              >
                <div className={`
                  ${
                    thems === "light"
                      ? "genn-color-text"
                      : "genn-color-text-dark"
                  }
                  `} >{LocalText.LandingPagesOrg.descriptionLongRezimRaboty} </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
}
export default RezimRaboty;

