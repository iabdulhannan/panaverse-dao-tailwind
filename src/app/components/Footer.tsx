import LOGO from 'panaverseRoot/app/assets/images/panaverseDaoLogoTransparent.png'
import Image from "next/image";
import {Center} from "panaverseRoot/app/components/Center";
import Divider from "panaverseRoot/app/components/Divider";
import Link from "next/link";
import {socialLinks} from "panaverseRoot/app/assets/data/data";

export const Footer = () => {
  return (
    <div className={`px-5 py-5 md:py-8 max-w-[100vw] md:max-w-[95vw] ms-auto me-auto `}>
      <div className={`flex justify-between flex-col md:flex-row items-center`}>
        <div className={`flex flex-col justify-center items-start md:items-center`}>
          <Center>
            {/*<Link href="https://www.panaverse.co/" isExternal>*/}
            <Image src={LOGO} alt={'LOGO'} width={300}/>
            {/*</Link>*/}
          </Center>
          <h1 className={`font-semibold md:pl-16 text-xl sm:text-2xl leading-10`}>
            <span className={`text-panaverseRed`}>
              Earn&nbsp;
            </span>
            while you Learn <br/>
          </h1>
        </div>
        <div className={`md:max-w-[50vw] mt-5 md:mt-0`}>
          <h5 className={`text-md text-gray-600 font-semibold`}>
            Program
          </h5>
          <p className={`text-gray-450 text-justify font-light`}>
            This curriculum is intended for beginners who want to learn software development from the ground up. The
            first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming
            and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that
            includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis
            will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses
            will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid
            teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
          </p>
        </div>

      </div>

      <Divider className={'my-4'}/>

      <div className={`flex flex-col md:flex-row gap-5 justify-between`}>
        <h2 className={`text-md self-center font-light`}>
          Developed by{' '}
          <Link target={'_blank'} className={'underline'} href="https://github.com/iabdulhannan">
            Abdul Hannan
          </Link>
        </h2>
        <div className={`hidden md:flex gap-x-2`}>
          {
            socialLinks.map((item, index) => {
              return (
                <Link target={'_blank'} key={index} href={item.href} className={`${item.className} py-2 px-4 flex items-center gap-x-2 rounded-md`}>
                  <item.leftIcon/>
                  <label>
                    {item.title}
                  </label>
                </Link>
              )
            })
          }
        </div>

        <div className={`flex md:hidden mt-1 justify-center`}>
          <div className={`flex gap-x-4`}>
            {
              socialLinks.map((item, index) => {
                return (
                  <Link target={'_blank'} key={index} href={item.href} className={`${item.className} p-3 flex items-center rounded-full`}>
                    <item.leftIcon/>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};
