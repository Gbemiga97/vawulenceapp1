import FAQs from './FAQs'
import HomeHeader from './HomeHeader'
import Programs from './Programs'
import Testimonials from './Testimonials'
import Values from './Values'
import './home.css'

function Home() {
  return (
    <>
    <HomeHeader />
    <Programs />
    <Values />
    <FAQs />
    <Testimonials />
    </>
  )
}

export default Home