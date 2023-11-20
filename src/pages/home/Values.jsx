import {GiCutDiamond} from 'react-icons/gi'
import SectionHead from '../../components/SectionHead'
import Card from '../../components/Card'
import { values } from '../../data'

function Values() {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="value__left">
            <div className="values__image">
                <img src="./assets/values.jpg" alt="values" />
            </div>
            </div>
            <div className="values__right">
              <SectionHead title='Values' icon={<GiCutDiamond />} />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt suscipit aperiam, ab expedita culpa consequuntur cumque, fugit rem velit saepe exercitationem! Aperiam nemo neque molestiae optio ad itaque id alias</p>
              <div className="values__wrapper">
                {
                  values.map(({id, title, icon, desc}) => (
                    <Card key={id} className='values__value'>
                      <span>{icon}</span>
                      <h4>{title}</h4>
                      <small>{desc}</small>
                    </Card>
                  ))
                }
              </div>
            </div>
        </div>
    </section>
  )
}

export default Values