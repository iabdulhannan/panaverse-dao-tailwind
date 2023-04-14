import {programDetail} from "panaverseRoot/app/assets/data/data";
import CourseDetailsComp from "panaverseRoot/app/components/CourseDetails";
import {Metadata, ResolvingMetadata} from "next";

type Props = {
  params: { courseDetails: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  {params, searchParams}: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.courseDetails;
  const program = await getCourseDetails(id)
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: program?.title,
    description: program?.description
  };
}

const getCourseDetails = (courseID: string) => {
  if (courseID) {
    return programDetail.find((item) => item.id.toString() === courseID.toString())
  }
}
const CourseDetails = async ({
                               params,
                               searchParams,
                             }: Props
) => {
  const programQuarters = await getCourseDetails(params.courseDetails)

  return (
    <>
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


export default CourseDetails
