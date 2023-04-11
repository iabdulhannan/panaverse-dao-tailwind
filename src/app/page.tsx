import {Inter} from 'next/font/google'
import Header from "panaverseRoot/app/components/Header";
import CoreCourses from "panaverseRoot/app/components/CoreCourses";
import Hero from "panaverseRoot/app/components/Hero";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Header/>
      <main className={`px-5 pt-16 scroll-mt-16 scroll-smooth`}>
        <Hero/>
        <CoreCourses/>

      </main>
    </>
  )
}
