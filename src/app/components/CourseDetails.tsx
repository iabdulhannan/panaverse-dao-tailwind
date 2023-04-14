'use client'
import React, {useState} from 'react';
import {DottedSeparator} from "panaverseRoot/app/components/DottedSeparator";
import {Card} from "panaverseRoot/app/components/Card";
import {ProgramDetailType} from "panaverseRoot/app/assets/types/types";
import {useBreakpoint} from "panaverseRoot/app/hooks/useBreakpoint";
import Collapse from "panaverseRoot/app/components/Collapse";
import Divider from "panaverseRoot/app/components/Divider";
import {FaChevronDown} from "react-icons/fa";
import {useOverflowDetector} from "react-detectable-overflow";

function CourseDetailsComp({programQuarters}: { programQuarters: ProgramDetailType | undefined }) {
  const isDesktop = useBreakpoint(768, "any");
  const isMobile = useBreakpoint(0, 768);

  return (
    <>
      {programQuarters?.quarters.map((detail, index) => (
        <div className={`flex mb-5 flex-grow`} key={index}>
          {/*Desktop view(left card)*/}
          {isDesktop && detail.quarterNumber % 2 === 0 && (
            <>
              <DetailCard description={detail.description}/>
              <DottedSeparator/>
              <Card {...detail} />
            </>
          )}

          {/*Mobile view*/}
          {isMobile && (
            <>
              <DottedSeparator/>
              <Card {...detail} />
            </>
          )}

          {/*Desktop view(right card)*/}
          {isDesktop && detail.quarterNumber % 2 !== 0 && (
            <>
              <Card {...detail} />
              <DottedSeparator/>
              <DetailCard description={detail.description}/>
            </>
          )}
        </div>

      ))}
    </>
  )
}

const DetailCard = ({description}: { description: string }) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show);
  const {ref, overflow} = useOverflowDetector({});

  return (
    <div className={`md:flex-1 md:p-6 bg-transparent cursor-pointer md:min-w-[45%]`}>
      <div className="relative">
        <div onClick={handleToggle} ref={ref} className={`overflow-hidden text-justify leading-7 transition-max-h ease-in-out duration-700 ${show ? 'max-h-96' : 'md:max-h-28 lg:max-h-20'}`}>
          {description}
        </div>
      </div>
      {
        overflow && (

          <button onClick={handleToggle}
                  className={`flex justify-center font-light text-sm hover:border-panaverseRed py-3 w-full`}>
            <FaChevronDown className={`transition-all duration-700 ${show ? 'rotate-180' : 'rotate-0'}`}/>
          </button>
        )
      }
    </div>
  );
};
export default CourseDetailsComp;
