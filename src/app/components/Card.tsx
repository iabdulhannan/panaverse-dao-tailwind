'use client'
import {CourseQuarter} from "panaverseRoot/app/assets/types/types";
import React, {useState} from "react";
import {useBreakpoint} from "panaverseRoot/app/hooks/useBreakpoint";
import Divider from "panaverseRoot/app/components/Divider";

export const Card = ({duration, quarterNumber, title, isCore, syllabus}: CourseQuarter) => {
  const isEvenId = quarterNumber % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show);

  const isMobile = useBreakpoint(0, 768);
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <div
      className={`flex flex-row p-3 sm:p-6 bg-gray-50 gap-x-5 rounded-lg items-center md:min-w-[45%] `}
      // className={`flex flex-row p-3 sm:p-6 bg-gray-50 gap-x-5 rounded-lg items-center before:w-0 before:h-0 before:border-transparent`}
      id={quarterNumber.toString()}
      // _before={{
      //   content: `""`,
      //   w: '0',
      //   h: '0',
      //   borderColor: `transparent ${useColorModeValue('#f7fafc', '#1a202c')} transparent`,
      //   borderStyle: 'solid',
      //   borderWidth: borderWidthValue,
      //   position: 'absolute',
      //   left: leftValue,
      //   right: rightValue,
      //   display: 'block'
      // }}
    >
      <div className={`w-full`}>
        <div className={`flex items-center justify-between`}>
          <label className={`text-lg text-panaverseRed font-light`}>
            {duration}
          </label>

          {
            isCore ?
              (
                <label className={`text-md text-red-800 rounded-full bg-red-200 px-3 py-1`}>
                  Core
                </label>
              )
              :
              (
                <label className={`text-md text-green-800 rounded-full bg-green-200 px-3 py-1`}>
                  Specialization
                </label>
              )
          }
        </div>
        <div className={`flex flex-col gap-y-4 text-left`}>

          <h1 className={`text-2xl leading-8 font-bold w-full font-semibold`}>
            {title}
          </h1>
          <div className={`w-full`}>

            <button onClick={handleToggle}
                    className={`uppercase bg-transparent leading-4 rounded-md border w-[150px] font-light text-sm hover:border-panaverseRed hover:font-semibold py-3`}>
              Check Syllabus
            </button>
            <div className="relative">
              <div onClick={handleToggle}
                   className={`overflow-hidden transition-max-h ease-in-out duration-500 ${show ? 'max-h-screen' : 'max-h-0'}`}>
                <div className={`flex flex-col gap-y-2 p-5`} >
                  {
                    syllabus.map((item, index) => {
                      return (
                        <div key={index}>
                          <label className={`w-full text-left`}>{item.title}</label>
                          {
                            index !== syllabus.length -1 && <Divider className={'my-1'}/>
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
