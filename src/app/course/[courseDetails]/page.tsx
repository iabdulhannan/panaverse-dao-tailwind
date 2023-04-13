import {programDetail} from "panaverseRoot/app/assets/data/data";
import CourseDetailsComp from "panaverseRoot/app/components/CourseDetails";

const getCourseDetails = (courseID:number)=>{
  if (courseID) {
    return programDetail.find((item) => item.id.toString() === courseID.toString())
  }

}
const CourseDetails =  async ({
                                params,
                                searchParams,
                              }: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const programQuarters = await getCourseDetails(params.courseDetails)

  return (
    <>
      {/*<Head>*/}
      {/*  <title>{program?.title}</title>*/}
      {/*  <meta name="description" content={program?.title}/>*/}
      {/*  <meta name="viewport" content="width=device-width, initial-scale=1"/>*/}
      {/*  <link rel="icon" href="/favicon.ico"/>*/}
      {/*</Head>*/}
      <div className={`container mx-auto max-w-7xl px-2 sm:px-10 py-8 sm:py-10 scroll-mt-16`}>
        <div className={`mb-5`}>
          <h3 className={`text-2xl md:text-4xl font-semibold mb-4 text-center`}>
            {programQuarters?.title}
          </h3>
          <p className={`text-gray-600 text-justify md:text-center font-thin`}>
            {programQuarters?.description}
          </p>
        </div>
        <CourseDetailsComp programQuarters={programQuarters}/>
      </div>
    </>
  );
};





// export async function getStaticPaths() {
//
//
//   const paths = dropdownData[1].items.map(course => {
//     return {
//       params: {
//         courseID: `${course.id}`
//       }
//     }
//   })
//   return {
//     paths,
//     fallback: false
//   }
// }




export default CourseDetails
