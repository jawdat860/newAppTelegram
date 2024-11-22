import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
function RezimRaboty({
  showWorkModel,
  setShowWorkModelHandler,
  thems,
  questionIco,
  showTextWorkHandler,
  showTextWork,
  getFormattedDayDate,
  hourss,
  formattedMinutes,
  getDayClass,
  getDayText,
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
          className={` genn-RezimRaboty-block flex-[1] p-[20px] ${
            thems === "light"
              ? "bg-white text-black"
              : "bg-[#34495e] text-white"
          }`}
        >
          <div className="genn-RezimRaboty-open-close text-[24px] text-center mb-[20px] font-[700] flex justify-center items-crnter gap-[10px]">
            <div className="genn-RezimRaboty-titl">Режим работы</div>
            <div className="genn-RezimRaboty-question">
              <img
                src={questionIco}
                className="w-[20px] mt-[5px]"
                onClick={showTextWorkHandler}
              />
            </div>
          </div>
          <div className="genn-RezimRaboty-value">
            {showTextWork && (
              <div className="mb-[10px] text-center">
                Дополнительное описание
              </div>
            )}
          </div>

          <div className="genn-RezimRaboty-time">
            <div className="genn-RezimRaboty-time-titl">
              <div
                className={`genn-LandingPages-rezim-raboty-casy  flex justify-between items-center gap-[30px] text-[30px] ${
                  thems === "light" ? "bg-[#f3f3f3]" : "bg-[#4e6174] "
                }  rounded-[20px] border-[2px] border-dashed border-[#ddd] px-[20px] mb-[30px] font-[900]`}
              >
                {getFormattedDayDate(new Date())}
                {hourss}:{formattedMinutes}
              </div>
            </div>
            <div className="genn-RezimRaboty-value">
              <div
                className={`${
                  thems === "light" ? "bg-[#f3f3f3]" : "bg-[#4e6174]"
                } rounded-[20px] p-[20px]  border-[2px] border-dashed border-[#ddd]  mb-[30px] w-full`}
              >
                {[
                  { day: "понедельник", hours: "с 8:00 до  17:00" },
                  { day: "вторник", hours: "с 8:00 до  17:00" },
                  { day: "среда", hours: "с 8:00 до  17:00" },
                  { day: "четверг", hours: "с 8:00 до  17:00" },
                  { day: "пятница", hours: "с 8:00 до  17:00" },
                  { day: "суббота", hours: "с 8:00 до  17:00" },
                  { day: "воскресенье", hours: "с 8:00 до  17:00" },
                ].map(({ day, hours }) => (
                  <div
                    key={day}
                    className={`${getDayClass(
                      day
                    )} border-b flex justify-between`}
                  >
                    <div className="p-2">{day}</div>

                    <div className="p-2 flex-[1] text-end">{hours}</div>
                    <div className=" ">{getDayText(day)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
}
export default RezimRaboty;

//     <div
//       className={`genn-LandingPages-rezim-raboty-casy  flex justify-between items-center gap-[30px] text-[30px] ${
//         thems === "light" ? "bg-[#f3f3f3]" : "bg-[#4e6174] "
//       }  rounded-[20px] border-[2px] border-dashed border-[#ddd] px-[20px] mb-[30px] font-[900]`}
//     >
//       {getFormattedDayDate(new Date())}
//       {hourss}:{formattedMinutes}
//     </div>
//   </div>
//   <div
//     className={`${
//       thems === "light" ? "bg-[#f3f3f3]" : "bg-[#4e6174]"
//     } rounded-[20px] p-[20px]  border-[2px] border-dashed border-[#ddd]  mb-[30px] w-full`}
//   >
//     {[
//       { day: "понедельник", hours: "с 8:00 до  17:00" },
//       { day: "вторник", hours: "с 8:00 до  17:00" },
//       { day: "среда", hours: "с 8:00 до  17:00" },
//       { day: "четверг", hours: "с 8:00 до  17:00" },
//       { day: "пятница", hours: "с 8:00 до  17:00" },
//       { day: "суббота", hours: "с 8:00 до  17:00" },
//       { day: "воскресенье", hours: "с 8:00 до  17:00" },
//     ].map(({ day, hours }) => (
//       <div
//         key={day}
//         className={`${getDayClass(
//           day
//         )} border-b flex justify-between`}
//       >
//         <div className="p-2">{day}</div>

//         <div className="p-2 flex-[1] text-end">{hours}</div>
//         <div className=" ">{getDayText(day)}</div>
//       </div>
//     ))}

//   </div>
// </div>
// </Modal> */
// } */}
