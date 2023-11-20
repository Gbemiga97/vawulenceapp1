import {ImQuotesLeft} from 'react-icons/im'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import SectionHead from '../../components/SectionHead'
import Card from '../../components/Card'
import { useState } from 'react'
import { testimonials } from '../../data'

function Testimonials() {
  const [index, setIndex] = useState(0)
  const {name, job, quote, avatar} = testimonials[index]

  const prev = () => {
    setIndex(prev => prev - 1)
    if (index <= 0) {
      setIndex(testimonials.length - 1)
    }
  } 

  const next = () => {
    setIndex(prev => prev + 1)
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  }

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead title='Testimonials' icon={<ImQuotesLeft />} className='testimonials__head'/>
        <Card className='testimonial' >
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className='testimonial__quote'>{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small>{job}</small>
        </Card>
        <div className="testimonials__btn-container">
            <button 
            className="testimonials__btn"
            onClick={prev}
            >
              <IoIosArrowDropleftCircle />
            </button>

            <button 
            className="testimonials__btn"
            onClick={next}
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
      </div>
    </section>
  )
}

export default Testimonials