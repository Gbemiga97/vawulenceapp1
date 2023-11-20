import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF, FaLinkedin} from 'react-icons/fa'
import Header from '../../components/Header'
import { trainers } from '../../data'
import Trainer from './Trainer'
import './trainers.css'

function Trainers() {
  return (
    <>
    <Header title="Our Trainers" image='./assets/header_bg_5.jpg'>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure quae, tempore placeat minima sint ullam deserunt optio corrupti facere pariatur, voluptatibus dolorum assumenda et ex libero debitis. Accusamus, quidem?
      </p>
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, name, image, job, socials}) => (
           <Trainer key={id} name={name} image={image} job={job} socials={
            [
              {icon: <BsInstagram /> ,links: socials[0]},
              {icon: <AiOutlineTwitter /> ,links: socials[1]},
              {icon: <FaFacebookF /> ,links: socials[2]},
              {icon: <FaLinkedin /> ,links: socials[3]},
            ]
           }/>
          ))
        }
      </div>
    </section>
    </>
  )
}

export default Trainers