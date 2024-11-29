import React from "react";

import WebApp from "@twa-dev/sdk";
import { LocalText } from "../../LocakText/LocalText";
function CategoriesSlider({ service, onClick, loading  , thems}) {
  return (
    <div className="pb-[10px] overflow-x-scroll overflow-y-hidden mb-[20px] h-[140px]">
      <div className="flex pl-[1rem]">
        {loading
          ? // Render placeholder loading cards
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="min-w-[260px] h-[120px] rounded-[25px] shadow-md bg-[white] mr-[1rem] animate-pulse flex items-center justify-center shimmer"
              >
                <p className="text-gray-500"></p>
              </div>
            ))
          : // Render actual content when loading is false
            service.map((slide) =>
              slide.items.map((slide1) => (
                  <div
                    key={slide1.id}
                    className="min-w-[260px] h-[120px] relative rounded-[25px] shadow-md bg-cover mr-[1rem] bg-[url('./assets/jawdat.jpg')]"
                    onClick={() => {
                      WebApp.openLink(
                        "https://teletype.in/@jawdat98/3vc9LxWN5ei"
                      );
                    }}
                  >
                    
                  <div className={`w-[100%] h-[100%] rounded-[25px] opacity-[.5]
                     ${thems === "light" ? "genn-Slider-article-perekrytie" : "genn-Slider-article-perekrytie-dark"}`}></div>

                  <div className="absolute top-[0] w-[100%] mt-2 max-h-[100%] px-[10px] flex justify-between">
                    <h3 className={`text-[17px] leading-[1] p-[10px] max-w-[70%] h-[100%] font-semibold 
                      ${thems === "light" ? "genn-Slider-article-h3" : "genn-Slider-article-h3-dark"}`}>
                      {slide1.title}
                    </h3>
                  </div>
                    <div className={`leading-[1] text-[20px] font-bold bg-gray-600 px-[15px] p-[8px] rounded-tl-[25px] rounded-br-[25px] absolute right-0 bottom-0
                      ${thems === "light" ? "genn-Slider-article-price-block" : "genn-Slider-article-price-block-dark"}`}>
                      <span className={`${thems === "light" ? "genn-Slider-article-price-block-price" : "genn-Slider-article-price-block-price-dark"}`}>
                      {slide1.price}</span>
                      <span className={`text-[14px] ml-[3px] font-[400] ${thems === "light" ? "genn-Slider-article-price-block-Currency" : "genn-Slider-article-price-block-Currency-dark"}`}>
                        {LocalText.root.Currency}</span>
                    </div>
                  </div>                
              ))
            )}
      </div>
    </div>
  );
}
export default CategoriesSlider;
