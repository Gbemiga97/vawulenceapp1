import React from 'react'

function HomeHeader() {
  return (
    <header className="home__header">
        <div className="container home__header-container">
            <div className="home__header-left">
                <h4>#100DaysOfWorkOut</h4>
                <h1>Join The Legend of the Fitness World</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere modi obcaecati ut rem, eum sapiente iure, et quibusdam quaerat amet, praesentium accusamus? Aliquam non, soluta aperiam tempore voluptates excepturi fugiat.</p>
                <button className="btn lg">Get Started</button>
            </div>
            <div className="home__header-right">
                <div className="home__header-circle"></div>
                <div className="home__header-image">
                    <img src="./assets/main_header.png" alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default HomeHeader