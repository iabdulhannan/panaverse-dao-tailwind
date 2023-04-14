import CoreCourses from "panaverseRoot/app/components/CoreCourses";
import Hero from "panaverseRoot/app/components/Hero";
import {SpecializedTracks} from "panaverseRoot/app/components/SpecializedTracks";

export default function Home() {
  return (
    <>
        <Hero/>
        <CoreCourses/>
        <SpecializedTracks/>
    </>
  )
}
