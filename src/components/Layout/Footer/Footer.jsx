import React from 'react'
import { motion } from 'framer-motion'
import styles from './footer.module.scss'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <motion.div className="col-lg-5"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.logo}

              >
                <img src="https://solutions.rent.com/wp-content/themes/rent/assets/images/svg/Logo.svg" alt="" />
              </div>
              <h3>Solutions that work as hard as you do. Period.</h3>
            </motion.div>
            <motion.div className="col-lg-3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link>Solutions</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link>Contact</Link></li>
                <li><Link to={'/faq'}>FAQ</Link></li>
                <li><Link>Team</Link></li>
                <li><Link>Careers</Link></li>
              </ul>
            </motion.div>
            <motion.div className="col-lg-4"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ul>
                <li><Link>Accessibility</Link></li>
                <li><Link>Notice of Collection</Link></li>
                <li><Link>Do Not Sell My Personal Information</Link></li>
                <li><Link>IRS Form 8937</Link></li>
                <li><Link>Sitemap</Link></li>
              </ul>
            </motion.div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <motion.div className={styles.socials}
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                <div className={styles.icons}>
                  <FaFacebookF />
                </div>
                <div className={styles.icons}>
                  <FaTwitter />
                </div>
                <div className={styles.icons}>
                  <FaLinkedinIn />
                </div>
                <div className={styles.icons}>
                  <FaInstagram />
                </div>
              </motion.div>

              <h4>Stay in touch.</h4>

              <input type="email" placeholder='Email address*' />
              <p className={styles.policy}>This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span> apply.</p>
            </div>
            <div className="col-lg-7">
              <motion.div className={styles.right}
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                <p>© 2023 Rent Group Inc. All photos, videos, text, and other content are the property of Rent Group Inc. APARTMENT GUIDE, RENT.COM and RENTALS.COM and the APARTMENT GUIDE, RENT.COM and RENTALS.COM Trade Dress are registered trademarks of Rent Group Inc. All rights reserved.
                </p>
                <p>If you are using a screen reader, or are having difficulty reading this website, please email accessibilityfeedback@rent.com.</p>

                <div className={styles.terms}>
                  <span>Privacy Policy |
                    Terms of Service |
                    Patent Notice</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer