import React from "react";
import {coreCoursesCards} from "panaverseRoot/app/assets/data/data";
import CourseCard from "panaverseRoot/app/components/CourseCard";

export default function CoreCourses() {
  return (
    <div className={'container max-w-[calc(100vw)] md:min-h-[calc(100vh)]'} id={'coreCourses'}>
      <div className={'flex flex-col text-center gap-8 pt-20'}>
        <label className={'font-semibold text-2xl md:text-4xl'}>
          <span className={'text-panaverseRed'} >
            Core&nbsp;
          </span>
          Courses
        </label>
        {/*Courses*/}
        <div className={'flex flex-row flex-wrap justify-center'}>
          {
            coreCoursesCards.map((course, index) => {
              return (
                <CourseCard key={index} {...course}/>
              )
            })
          }

        </div>
      </div>
    </div>
  );
}

