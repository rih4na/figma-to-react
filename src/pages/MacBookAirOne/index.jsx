import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input } from "components";

const MacBookAirOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-deep_purple-50 flex flex-col font-inter items-center justify-start mx-auto p-[114px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start mb-[72px] p-[76px] md:px-5 w-[66%] md:w-full">
          <Input
            name="username"
            placeholder="username"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-lg w-full"
            wrapClassName="border border-black-900 border-solid w-[88%]"
            type="text"
          ></Input>
          <Input
            name="password"
            placeholder="password"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-lg w-full"
            wrapClassName="border border-black-900 border-solid mt-[76px] w-[88%]"
            type="password"
            size="sm"
          ></Input>
          <Button
            className="common-pointer cursor-pointer leading-[normal] mb-[7px] min-w-[215px] mt-[121px] text-center text-lg"
            onClick={() => navigate("/macbookairtwo")}
          >
            submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default MacBookAirOnePage;
