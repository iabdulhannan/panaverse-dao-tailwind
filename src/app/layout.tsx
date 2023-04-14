import './globals.css'
import Header from "panaverseRoot/app/components/Header";
import {Footer} from "panaverseRoot/app/components/Footer";

export const metadata = {
  title: 'Panaverse DAO Syllabus',
  description: 'Panaverse DAO Syllabus',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
    <Header/>
    <main className={`px-5 pt-16 scroll-mt-16 scroll-smooth`}>
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  )
}
