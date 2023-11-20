import {FaCrown} from 'react-icons/fa'
import SectionHead from '../../components/SectionHead'
import { programs } from '../../data'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'

function Programs() {
  return (
    <section className="programs">
     <div className="container programs__container">
      <SectionHead
       title='Programs'
       icon={<FaCrown />}
       />
       <div className="programs__wrapper">
        {
          programs.map(({id, icon, title, info,path, }) => (
            <Card key={id} className='programs__program'>
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{info}</small>
              <Link to={path} className='btn sm'>Learn More<AiFillCaretRight /></Link>
            </Card>
          ))
        }
       </div>
     </div>
    </section>
  )
}

export default Programs