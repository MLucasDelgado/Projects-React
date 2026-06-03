import './Footer.css'
import {
  FaGithub ,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-brand'>
          <h2>ShoppingCart.</h2>

          <p>
            Discover quality products at the best prices.
            Shop comfortably from anywhere.
          </p>

          <div className='social-icons'>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/MLucasDelgado'><FaGithub /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/lucas_mdelgado/'><FaInstagram /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/lucas-delgado-77b582165/'><FaLinkedinIn /></a>
          </div>
        </div>

        <div className='footer-links'>
          <div>
            <h4>Company</h4>
            <a href='#'>About us</a>
            <a href='#'>Services</a>
            <a href='#'>Blog</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href='#'>Help Center</a>
            <a href='#'>FAQ</a>
            <a href='#'>Contact</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href='#'>Privacy</a>
            <a href='#'>Terms</a>
            <a href='#'>Cookies</a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>
          Copyright © 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}