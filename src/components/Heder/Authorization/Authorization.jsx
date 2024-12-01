import WebApp from "@twa-dev/sdk";

function Authorization({thems, userPhotoUrl, LocalText ,initData ,iconNelegram}) {


  return (
    <>
      <div
        id="genn-Authorization-block"
        className={`flex justify-between  relative p-[5px] rounded-t-[opx] rounded-b-[27px]  border-t-[0]
          ${thems === "light" ? "genn-Authorization-block" : "genn-Authorization-block-dark"}`}       
      >
       
        <div className={`flex items-center ${thems === "light" ? "genn-Authorization-block-left" : "genn-Authorization-block-left-dark"}`}>
          <div className="genn-Authorization-img gap-[10px] flex items-center">
            <img
              src={userPhotoUrl}
              
              alt={LocalText.LandingPagesOrg.description}
              className="rounded-[50%] w-[35px] h-[35px] "
            />
          </div>
          <div className={`text-[17px] ml-[10px]  ${thems === "light" ? "genn-Authorization-text" : "genn-Authorization-text-dark"}`}>
            {LocalText.LandingPagesOrg.theUser}
            {/* Написано для визуального просмотра на веб версии */}
            {initData?.user?.first_name || " jawdat"}
            {/* Работает только в телеграмм */}
            {/* {initData.user.first_name } */}
          </div>
        </div>
        <div className={`flex bg-[#40b3e0] items-center gap-[10px] twailweenchange2 
          ${thems === "light" ? "genn-Authorization-right" : "genn-Authorization-right-dark"}`}>
            <div className={`w-[27px] 
              ${thems === "light" ? "genn-Authorization-ico" : "genn-Authorization-ico-dark"}`}>
            <img
              className=" "
              src={iconNelegram}
              alt={LocalText.LandingPagesOrg.description}
            />
          </div>
          <div className={`${thems === "light" ? "genn-Authorization-group_name" : "genn-Authorization-group_name-dark"}`}>          
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
