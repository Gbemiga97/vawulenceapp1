import React from 'react'
import Card from '../../components/Card'

function Trainer({name, image, job, socials}) {
  return (
    <Card className='trainer'>
    <div className="trainer__image">
      <img src={image} alt={name} />
    </div>
    <h3>{name}</h3>
    <p>{job}</p>
    <div className="trainer__socials">
    {
      socials.map(({icon, link}, index) => (
        <a key={index} href={link} target='blank' rel='nonreffer nooperer'>{icon}</a>
      ))
    }
    </div>
  </Card>
  )
}

export default Trainer