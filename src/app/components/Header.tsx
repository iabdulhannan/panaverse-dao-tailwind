'use client'
import React, {useState} from 'react';

import DropDownMenu from './DropdownMenu';
import {FaChevronDown, FaGithub} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import Image from "next/image";
import LOGO from "panaverseRoot/app/assets/images/panaverseDaoLogoTransparent.png"
import {useRouter} from "next/navigation";
import Link from "next/link";
import {dropdownData} from "panaverseRoot/app/assets/data/data";
import {Disclosure, Transition} from "@headlessui/react";
import Divider from "panaverseRoot/app/components/Divider";
import {DropdownData} from "panaverseRoot/app/assets/types/types";

const GITHUB_REPO_LINK = 'https://github.com/iabdulhannan/panaverse-dao-syllabus';

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={'bg-white px-5 fixed w-full z-50 top-0'}
              style={{boxShadow: '0 4px 6px rgba(160, 174, 192, 0.6)'}}>
        <div className={'container p-0 max-w-[calc(95vw)] mx-auto px-5'}>
          <div className={'flex h-16 items-center justify-between mx-auto'}>
            <div className={'flex items-center justify-between min-w-full'}>
              <button onClick={() => setIsOpen(!isOpen)} className={'bg-transparent block md:hidden text-md ml-3'}
                      aria-label={'Open Menu'}>
                {isOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>}
              </button>

              <Link onClick={() => router.push('/')} href={'/'}>
                <div className={'cursor-pointer'}>
                  <Image src={LOGO} width={150} height={100}
                         alt={'Panaverse Logo (Full)'}/>
                </div>
              </Link>
              <div className={'justify-evenly items-center hidden md:flex min-w-[40%]'}>
                {
                  dropdownData.map((data, index) => {
                    return (
                      <DropDownMenu key={index} {...data}/>
                    )
                  })
                }
              </div>

              <Link target={'_blank'} href={GITHUB_REPO_LINK}>
                <button className={'rounded-full cursor-pointer p-2 hover:bg-gray-200 text-xl md:text-3xl'}>
                  <FaGithub color={'#000000'}/>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className={'pb-4 block md:hidden flex flex-col items-start'}>
            {
              dropdownData.map((data: DropdownData, index: number) => {
                return (
                  <>
                    <Divider/>
                    <Disclosure key={index}>
                      {
                        ({open}) => (
                          <>
                            <Disclosure.Button
                              className={'flex justify-between items-center w-full font-medium px-4 py-1'}>
                              <label>
                                {data.title}
                              </label>
                              <FaChevronDown
                                className={`${open ? 'rotate-180 transform transition-all' : 'rotate-0 transform transition-all'} text-xs text-gray-600`}/>
                            </Disclosure.Button>

                            <Transition
                              enter="transition ease-out duration-500"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Disclosure.Panel>
                                {data.items.map((item, index: number) => {
                                  return (
                                    <>
                                      <div
                                        className={`flex items-center mx-4 px-4 py-3 rounded-md border-b-gray-200 hover:border-b-panaverseRed ${index === data.items.length - 1 ? 'border-b-0' : 'border-b'}`}
                                        key={index}>
                                        <Link href={item.linkTo} onClick={() => setIsOpen(false)}>
                                          <label className={'line-clamp-2 font-light hover:underline cursor-pointer'}>
                                            {item.courseName}
                                          </label>
                                        </Link>
                                      </div>
                                    </>
                                  )
                                })
                                }
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )
                      }
                    </Disclosure>
                  </>
                )
              })
            }
            <Divider/>
            {/*<Accordion allowToggle>*/}
            {/*  {*/}
            {/*    dropdownData.map((data, index) => {*/}
            {/*      return (*/}
            {/*        <AccordionItem key={index}>*/}
            {/*          <h2>*/}
            {/*            <AccordionButton>*/}
            {/*              <Text as="h6" fontWeight={'600'} flex={1} textAlign='left'>*/}
            {/*                {data.title}*/}
            {/*              </Text>*/}
            {/*              <AccordionIcon/>*/}
            {/*            </AccordionButton>*/}
            {/*          </h2>*/}
            {/*          <AccordionPanel>*/}
            {/*            {*/}
            {/*              data.items.map((item, index) => {*/}
            {/*                return (*/}
            {/*                  <>*/}
            {/*                    <Flex alignItems={"center"} key={index} px={2} py={3} rounded={'md'}*/}
            {/*                          borderBottomWidth={index === data.items.length - 1 ? 0 : 1}>*/}
            {/*                      <Link*/}
            {/*                        href={item.linkTo}*/}
            {/*                        onClick={() => onClose()}*/}
            {/*                      >*/}
            {/*                        <Text noOfLines={2}>*/}
            {/*                          {item.courseName}*/}
            {/*                        </Text>*/}
            {/*                      </Link>*/}
            {/*                    </Flex>*/}
            {/*                  </>*/}
            {/*                )*/}
            {/*              })*/}
            {/*            }*/}
            {/*          </AccordionPanel>*/}
            {/*        </AccordionItem>*/}
            {/*      )*/}
            {/*    })*/}
            {/*  }*/}
            {/*</Accordion>*/}
          </div>
        )
        }
      </header>
    </>
  )
    ;
}
