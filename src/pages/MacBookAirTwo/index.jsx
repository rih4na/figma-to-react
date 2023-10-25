import React from "react";

import { Img } from "components";

const MacBookAirTwoPage = () => {
  return (
    <>
      <div className="bg-deep_purple-50_01 flex flex-col items-start justify-start mx-auto p-[18px] w-full">
        <div className="flex flex-col gap-[52px] justify-start mb-[187px] ml-1.5 md:ml-[0] md:px-5 w-[95%] md:w-full">
          <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between w-full">
            <div className="bg-purple-500 h-[60px] mb-[53px] rounded-[33px] w-[6%]"></div>
            <div className="h-[53px] md:mt-0 mt-[60px] relative w-[93%] md:w-full">
              <div className="absolute bg-blue_gray-100 border border-purple-500 border-solid h-[52px] inset-[0] justify-center m-auto w-full"></div>
              <Img
                className="absolute h-[53px] inset-y-[0] my-auto right-[1%]"
                src="images/img_iconmagnifying.svg"
                alt="iconmagnifying"
              />
            </div>
          </div>
          <div className="md:gap-5 gap-[126px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] md:ml-[0] ml-[137px] w-[83%]">
            <div className="border border-black-900 border-solid h-[178px] rounded-[16px] shadow-bs w-full"></div>
            <div className="border border-black-900 border-solid h-[178px] rounded-[16px] shadow-bs w-full"></div>
            <div className="border border-black-900 border-solid h-[178px] rounded-[16px] shadow-bs w-full"></div>
            <div className="border border-black-900 border-solid h-[178px] rounded-[16px] shadow-bs w-full"></div>
            <div className="border border-black-900 border-solid h-[178px] rounded-[16px] shadow-bs w-full"></div>
            <div className="border border-black-900 border-solid h-[178px] rounded-[16px] shadow-bs w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacBookAirTwoPage;
