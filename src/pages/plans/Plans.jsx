import Card from '../../components/Card'
import Header from '../../components/Header'
import { plans } from '../../data'
import './plans.css'

function Plans() {
  return (
   <>
   <Header title='Membership Plan' image='./assets/header_bg_4.jpg'>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum optio adipisci fugit nulla temporibus accusamus sint blanditiis, officia rem aliquid
    </p>
   </Header>
   <section className="plans">
    <div className="container plans__container">
      {
        plans.map(({id, name, desc, price, features}) => (
          <Card key={id} className='plan'>
            <h3>{name}</h3>
            <small>{desc}</small>
            <h1>${price}<h2>/mo</h2></h1>
            <h4>Features</h4>
            {
              features.map(({available, feature},index) => (
                <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
              ))
            }
            <button className="btn lg">
              Choose Plan
            </button>
          </Card>
        ))
      }
    </div>
   </section>
   </>
  )
}

export default Plans