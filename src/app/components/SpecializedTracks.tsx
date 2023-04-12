import Image from "next/image";
import Link from "next/link";
import {specializedTracks} from "panaverseRoot/app/assets/data/data";

export const SpecializedTracks = () => {

  return (
    <div
      className={`pt-16 min-w-[100vw] md:px-5 max-w-max relative min-h-[50vh] md:min-h-[100vh] md:bg-specializedBackground`}
      id={'specializedTracks'} style={{marginLeft: '-1.25rem'}}>
      {
        specializedTracks.map((track, index) => {
          return (
            <div key={index}
                 className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between items-center md:min-h-[100vh] my-20 md:my-0`}>
              <div className={`z-10 flex flex-col justify-center max-w-[650px] min-h-full`}>
                <h1 className={`text-3xl sm:text-5xl leading-7 font-bold text-center mb-5`}>
                  {track?.title}
                </h1>
                <label className={`text-xl text-center leading-7 font-light mb-5 text-gray-450 line-clamp-2`}>
                  {track?.description}
                </label>
                <div className={`flex justify-center items-center`}>
                  <Link
                    className={`flex items-center h-10 px-6 text-white text-md leading-3 bg-gray-450 hover:bg-panaverseRed z-10 rounded-md`}
                    href={track.linkTo}>
                    Explore
                  </Link>
                </div>
              </div>
              <div className={`max-h-[100vh] min-w-[50vw] hidden md:block`}>
                <Image src={track.imageURL} alt={'Metaverse'} width={'700'} height={'700'}/>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};
