'use client'
import {DropdownData} from 'panaverseRoot/app/assets/types/types';
import {FaChevronDown} from 'react-icons/fa';
import Link from "next/link";
import {Popover, Transition} from "@headlessui/react";
import {usePopper} from 'react-popper'
import {Fragment, useState} from "react";

const DropDownMenu = (props: DropdownData) => {

  return (
    <div className={'flex gap-4 mx-2'}>
      <Popover>
        {({open}) => (
          <>
            <Popover.Button
              className={'focus:outline-0 flex justify-between items-center'}
            >
              <label className={'cursor-pointer w-full p-2 text-md md:text-lg font-semibold text-gray-600 hover:text-panaverseRed'}>
              {props.title}

              </label>
              <FaChevronDown color={'gray'}
                             className={open ? 'rotate-180 transform transition-all' : 'rotate-0 transform transition-all'}/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute z-10 mt-3 px-4 sm:px-0 max-w-[30%] ">
                {/*className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">*/}
                <div className="overflow-hidden rounded-lg shadow-lg p-4">
                          {props?.items.map((data: any, index: number) => (
                            <DropDownItem key={index} {...data} />
                          ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

const DropDownItem = ({courseName, linkTo, subtitle}: { courseName: string, linkTo: string, subtitle: string }) => {
  return (
    <Link className={'block p-2 rounded-md hover:bg-gray-100'} href={linkTo}>
      <div className={'flex items-center'}>
        <div className={'flex flex-col gap-2 w-full'}>
          <label className={'w-full text-left font-medium'}>{courseName}</label>
          <label className={'text-sm w-full text-left'}>{subtitle}</label>
        </div>
      </div>
    </Link>
  );
};

export default DropDownMenu;
