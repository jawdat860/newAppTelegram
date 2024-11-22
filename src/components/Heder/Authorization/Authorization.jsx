import WebApp from "@twa-dev/sdk";

function Authorization({thems ,userPhotoUrl, LocalText ,initData ,iconNelegram}) {
  return (
    <>
      <div
        id="genn-Authorization"
        className={`genn-Authorization flex justify-between  relative p-[5px] ${
          thems === "light" ? "bg-[#ffffff]" : "bg-[#2b355a]"
        }  rounded-t-[opx] rounded-b-[27px]  border-t-[0]`}
      >
        <div
          className={`genn-Authorization-1 flex items-center ${
            thems === "light" ? "text-[black]" : "text-white"
          }`}
        >
          <div className="genn-Authorization- gap-[10px] flex items-center">
            <img
              src={userPhotoUrl}
              
              alt={LocalText.LandingPagesOrg.description}
              className="rounded-[50%] w-[35px] h-[35px] "
            />
          </div>
          <div className="genn-Authorization-  text-[17px] ml-[10px] ">
            {LocalText.LandingPagesOrg.theUser}
            {/* Написано для визуального просмотра на веб версии */}
            {initData?.user?.first_name || " jawdat"}
            {/* Работает только в телеграмм */}
            {/* {initData.user.first_name } */}
          </div>
        </div>
        <div className="genn-Authorization-2 flex bg-[#40b3e0] items-center gap-[10px] twailweenchange2">
          <div className="genn-Authorization- w-[27px]">
            <img
              className=" "
              src={iconNelegram}
              alt={LocalText.LandingPagesOrg.description}
            />
          </div>
          <div className="genn-Authorization-">
            <div
              className="text-[18px] font-[600] underline  "
              onClick={() =>
                WebApp.openTelegramLink(LocalText.LandingPagesOrg.telegramLink)
              }
            >
              {LocalText.LandingPagesOrg.telegramTitl}
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
export default Authorization;
