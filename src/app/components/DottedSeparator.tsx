import React from "react";

export const DottedSeparator = () => {
  return (
    // <div className={`flex items-center relative mr-[40px] md:ml-[40px] md:min-w-[10%]`}>
    <div className={`flex flex-col items-center justify-center relative min-w-[10%] overflow-auto mb-[-20px] ml-[-15px] sm:ml-0`}>
      <span className={`border border-gray-200 top-0 h-[calc(110%)]`}></span>
      <div className={`relative p-[10px]`}>
        <div className={`absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-cover bg-no-repeat bg-center bg-gray-600 opacity-[1] rounded-2xl`}
        ></div>
      </div>
      <span className={`border border-gray-200 top-0 h-[calc(110%)]`}></span>
    </div>
  );
};
