import Link from "next/link";
import {Center} from "panaverseRoot/app/components/Center";

export default function Hero() {
  return (
      <div className="relative h-screen flex justify-center items-center lg:bg-[url(/heroBG.png)] bg-no-repeat bg-contain bg-center"
           // style={{
           //   backgroundImage: "url(/heroBG.png)", backgroundPosition: "center",
           //   backgroundRepeat: "no-repeat", backgroundSize: "contain"
           // }}
      >
        <div className="max-w-full">
          <Center className={'h-full'}>
            <div className="max-w-3xl md:max-w-65% lg:max-w-3xl mx-auto text-center py-20 md:py-36 gap-y-16 flex flex-col">

              <h1 className={`font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-110`}>
                <span className={'text-panaverseRed'}>
                  Earn&nbsp;
                </span>
                while you Learn <br/>
              </h1>
              <p className={'text-gray-500 text-center text-xl font-light'}>
                Learn how to make money and boost exports in within a short time span of 6 months from the start of
                program,
                resembling a cross between a corporate venture and an educational project.
              </p>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full">
                  <Link href={'#coreCourses'}>
                    <button className={'bg-gray-450 rounded-full px-6 py-2 text-white hover:bg-panaverseRed'}>
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Center>
        </div>
      </div>
  );
}

