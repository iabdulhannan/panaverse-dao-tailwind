import Link from "next/link";
import Image from "next/image";
import {CourseCardType} from "panaverseRoot/app/assets/types/types";
import Collapse from "panaverseRoot/app/components/Collapse";

const CourseCard = (props: CourseCardType) => {


  return (
    <div className={`container py-5 px-5 ${props.isCore ? 'max-w-md' : 'max-w-sm md:max-w-xs'} `}>
      <div className={`flex flex-col justify-between cursor-pointer border rounded-md overflow-hidden bg-white hover:shadow-lg hover:border-gray-300`}>
        <Image src={props.image} alt={''} className={'h-[55%]'}
          width="500"
          height="500"
        />
        <div className={`p-3 sm:p-5 flex flex-col justify-between`}>
          <div className={`mb-6 min-h-48`}>
            <div className={`flex items-center`}>
              <h3 className={`text-xl sm:text-2xl font-semibold mb-2 line-clamp-3`} style={{minHeight: 100}}>
                {props.title}
              </h3>
            </div>
            <div className={`text-lg text-justify cursor-pointer font-light`} style={{minHeight: 100}}>
              <Collapse>
                {props.description}
              </Collapse>
            </div>
          </div>
          <div className={`flex flex-col sm:flex-row justify-end gap-2 sm:gap-0`}>
            <Link href={`${props.linkTo}`}>
              <button className={`px-6 py-2 uppercase rounded-md bg-white border w-[150] font-normal hover:bg-transparent hover:border-panaverseRed hover:font-bold`}>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CourseCard;

CourseCard.defaulProps = {
  isCore: false
}
