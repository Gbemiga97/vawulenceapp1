import { Link, NavLink } from 'react-router-dom'
import './navBar.css'
import { links } from '../../data'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'
import { useState } from 'react'

function NavBar() {
const [showMenu, setShowMenu] = useState(false)

  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' 
        className='logo'
        onClick={() => setShowMenu(false)}
        >
        <img src="./assets/logo.png" alt="logo" />
        </Link>
        <ul className={`nav__links ${showMenu ? 'show__nav' : 'hide__nav'} `}>
          {
            links.map(({name, path}) => (
              <li>
                <NavLink to={path}
                className={({isActive}) => isActive ? 'active__nav' : ''}
                onClick={() => setShowMenu(prevState => !prevState)}
                >
                  {name}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <button 
        className='menu__bar'
        onClick={() => setShowMenu(prevState => !prevState)}
        >
        {
         showMenu ? <MdOutlineClose /> : <FaBars  />
        }
        </button>
      </div>
    </nav>
  )
}

export default NavBar