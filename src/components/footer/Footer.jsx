import { Link } from 'react-router-dom'
import './footer.css'
import {FaLinkedin, FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
function Footer() {

    const date = new Date()
    const year = date.getFullYear()

  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link>
                <img src="./assets/logo.png" alt="logo" />
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque assumenda, rerum laboriosam in ea harum, similique illum doloremque, minima magni iste obcaecati at minus vel impedit! Asperiores ipsam corrupti modi!</p>
                <div className="footer__socials">
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaFacebookF /></a>
                    <a href=""><AiOutlineTwitter /></a>
                    <a href=""><AiFillInstagram /></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link>About</Link>
                <Link>Plans</Link>
                <Link>Trainers</Link>
                <Link>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link>Blog</Link>
                <Link>Case Studies</Link>
                <Link>Events</Link>
                <Link>Communities</Link>
                <Link>Faqs</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link>Contact us</Link>
                <Link>Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            Copyright © {year} - All rights reserved by Gemiga
        </div>
    </footer>
  )
}

export default Footer