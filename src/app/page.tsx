import {Inter} from 'next/font/google'
import Header from "panaverseRoot/app/components/Header";
import CoreCourses from "panaverseRoot/app/components/CoreCourses";
import Hero from "panaverseRoot/app/components/Hero";
import {SpecializedTracks} from "panaverseRoot/app/components/SpecializedTracks";
import {Footer} from "panaverseRoot/app/components/Footer";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <>

        <Hero/>
        <CoreCourses/>
        <SpecializedTracks/>
    </>
  )
}
