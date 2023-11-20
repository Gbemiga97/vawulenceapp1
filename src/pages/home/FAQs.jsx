import {FaQuestion} from 'react-icons/fa'
import SectionHead from '../../components/SectionHead'
import { faqs } from '../../data'
import FAQ from './FAQ'

function FAQs() {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead title='FAQs' icon={<FaQuestion />}/>
        
        <div className="faqs__wrapper">
            {
                faqs.map(({id, question, answer}) => (
                    <FAQ key={id} question={question} answer={answer}/>
                ))
            }
        </div>
        </div>
    </section>
  )
}

export default FAQs