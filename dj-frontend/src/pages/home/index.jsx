// import { Link } from 'react-router-dom'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'


import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

export default function Home() {

  return (
    <main>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  )
}
