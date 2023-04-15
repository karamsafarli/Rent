import React, { useState, useEffect } from 'react'
import styles from './about.module.scss'
import { motion } from 'framer-motion'
import { MdLocationOn, MdClose } from 'react-icons/md'
import Discover from '../../DiscoverSection/Discover'


const About = () => {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [img, setImg] = useState('')



  const [open, setOpen] = useState(false)

  const setDetail = (name, about, img) => {
    setName(name);
    setAbout(about);
    setImg(img);
    setOpen(!open)
  }
  const about_data = [
    {
      name: 'Jon Ziglar',
      about: 'Chief Executive Officer',
      img: 'https://solutions.rent.com/wp-content/uploads/2022/05/jon-ziglar-211207_1.jpg'
    },
    {
      name: 'Nishant Phadnis',
      about: 'Chief Product Officer',
      img: 'https://solutions.rent.com/wp-content/uploads/2022/05/nishant-phadnis-211207_1-e1654878031471.jpg'
    },
    {
      name: 'Kathy Neumann',
      about: 'Chief Marketing Officer',
      img: 'https://solutions.rent.com/wp-content/uploads/2022/05/kathy_neumann_220322_v2-web-e1654878009283.jpg'
    },
    {
      name: 'David Sommers',
      about: 'Chief Technology Officer',
      img: 'https://solutions.rent.com/wp-content/uploads/2022/05/david-sommers-_1_.jpg'
    },
    {
      name: 'Sheila Dehdashti',
      about: 'Chief People Officer',
      img: 'https://solutions.rent.com/wp-content/uploads/2022/05/sheila_dehdashti_resized.jpg'
    },
    {
      name: 'Jamie Graves',
      about: 'General Counsel',
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/jamie_graves_220928-2.jpg'
    },
    {
      name: 'Arlene Mayfield',
      about: 'Senior Vice President of Sales, Customer & Industry Relations and National Accounts',
      img: 'https://solutions.rent.com/wp-content/uploads/2022/06/arlene-mayfield-211201.jpg'
    },
    {
      name: 'Rob Kocerha',
      about: 'Senior Vice President, Client Experience',
      img: 'https://solutions.rent.com/wp-content/uploads/2022/11/rob_kocerha_221027.jpg'
    },
    {
      name: 'Jesus Machuca',
      about: 'Vice President of Sales',
      img: 'https://solutions.rent.com/wp-content/uploads/2022/11/jesus_machuca_221027.jpg'
    },
    {
      name: 'Will Byrum',
      about: 'Vice President, Corporate Development & Strategy',
      img: 'https://solutions.rent.com/wp-content/uploads/2022/06/will-byrum.jpg'
    },
  ]
  return (
    <div className={styles.about_container}>
      <section className={styles.about_header}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <motion.h1 initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}>About Us.</motion.h1>
              <motion.h2 initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}>Our mission is to simplify the experience of connecting people & properties. </motion.h2>
              <motion.h2 initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}>We do this by delivering integrated solutions that bring together the right renter, with the right property, at the right time, eliminating friction and driving efficiency.</motion.h2>
            </div>
          </div>

          <div className={`row ${styles.img_row}`}>
            <motion.div className="col-lg-6"
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.header_left_img}>
                <div className={styles.left_img}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2022/06/still_1-610x391.jpg" alt="" />
                </div>

                <div className={styles.left_logos}>
                  <div className={styles.logo}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/2-2.png" alt="" />
                  </div>
                  <div className={styles.logo}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/1-2.png" alt="" />
                  </div>
                  <div className={styles.logo}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/3-2.png" alt="" />
                  </div>
                  <div className={styles.logo}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/4-2-1.png" alt="" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6"
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.right_img}>
                <img src="https://solutions.rent.com/wp-content/uploads/2022/06/P1111508-610x714.jpg" alt="" />
              </div>
            </motion.div>
          </div>

          <div className="row">
            <div className={`col-lg-12 ${styles.line}`}></div>
          </div>
        </div>
      </section>


      <section className={styles.core_values}>
        <div className="container">
          <div className="row align-items-center">
            <motion.div initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }} className="col-lg-6"><h2>Our Core Values</h2></motion.div>
            <motion.div className="col-lg-6" initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}><h5>At Rent. our mission is driven by eight values that guide every decision we make.</h5></motion.div>
          </div>


          <div className={`row ${styles.card_wrapper} g-3`}>
            <div className="col-lg-3 col-md-4 col-12">
              <motion.div className={styles.card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}

              >
                <div className={styles.card_img}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/01/1-Core-Values_Experience-SM.png" alt="" />
                </div>

                <p className={styles.card_data}>Obsessed with Experience</p>

                <div className={styles.card_overlay}>
                  <p>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</p>
                </div>
              </motion.div>
            </div>


            <div className="col-lg-3 col-md-4 col-12">
              <motion.div className={styles.card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.card_img}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/01/2-Core-Values_Integrity-SM.png" alt="" />
                </div>

                <p className={styles.card_data}>Act with Integrity</p>

                <div className={styles.card_overlay}>
                  <p>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</p>
                </div>
              </motion.div>



            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <motion.div className={styles.card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.card_img}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/01/3-Core-Values_Grit-SM-2.png" alt="" />
                </div>

                <p className={styles.card_data}>Have Grit</p>

                <div className={styles.card_overlay}>
                  <p>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</p>
                </div>
              </motion.div>
            </div>


            <div className="col-lg-3 col-md-4 col-12">
              <motion.div className={styles.card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.card_img}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/01/4-Core-Values_We-SM.png" alt="" />
                </div>

                <p className={styles.card_data}>“We” not “Me”</p>

                <div className={styles.card_overlay}>
                  <p>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</p>
                </div>
              </motion.div>
            </div>


            <div className="col-lg-3 col-md-4 col-12">
              <motion.div className={styles.card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.card_img}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/01/5-Core-Values_Matter-SM.png" alt="" />
                </div>

                <p className={styles.card_data}>Do Things that Matter</p>

                <div className={styles.card_overlay}>
                  <p>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</p>
                </div>
              </motion.div>
            </div>


            <div className="col-lg-3 col-md-4 col-12">
              <motion.div className={styles.card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.card_img}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/01/6-Core-Values_Forward-SM.png" alt="" />
                </div>

                <p className={styles.card_data}>Keep Moving Forward</p>

                <div className={styles.card_overlay}>
                  <p>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</p>
                </div>
              </motion.div>
            </div>


            <div className="col-lg-3 col-md-4 col-12">
              <motion.div className={styles.card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.card_img}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/01/7-Core-Values_Why-SM.png" alt="" />
                </div>

                <p className={styles.card_data}>Understand the “Why?”</p>

                <div className={styles.card_overlay}>
                  <p>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <motion.div className={styles.card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.card_img}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/01/8-Core-Values_Support-SM.png" alt="" />
                </div>

                <p className={styles.card_data}>Support our People & Community</p>

                <div className={styles.card_overlay}>
                  <p>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.leaders}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.leaders_headings}>
                <motion.h2>Our Leaders</motion.h2>
                <motion.p>Meet our leadership team</motion.p>
              </div>
            </div>
          </div>

          <div className="row">
            {
              about_data.map((el, index) => (
                <div className='col-lg-3 col-md-4 col-sm-6 mb-5' key={index}>
                  <motion.div className={styles.leader_card} onClick={() => setDetail(el.name, el.about, el.img)}
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.card_img}>
                      <img src={el.img} alt="" />
                      <div className={styles.img_overlay}></div>
                    </div>
                    <h3>{el.name}</h3>
                    <p>{el.about}</p>
                  </motion.div>
                </div>
              ))
            }
          </div>

          <div className="row">
            <div className={styles.big_line}></div>
          </div>


        </div>
      </section>


      <section className={styles.rent_team_container}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-12">
              <div className={styles.rent_team}>
                <motion.div className={styles.rent_team_headings}
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2>Join the Rent. team</h2>
                  <p>Feel at home in your career. Our offices are a place where people and performance take precedence. We thrive in a welcoming, collaborative environment where individuals are inspired to do their best work day in and day out.</p>
                  <p>Join us in our mission to make finding an ideal place to live intuitive and stress-free for all.</p>
                  <button>Explore Careers</button>
                </motion.div>

                <motion.div className={styles.rent_team_cards}
                  initial={{ opacity: 0, y: 130 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.rent_team_card}>
                    <div className={styles.card_left}>
                      <h5>Sr. Manager, Advanced Analytics</h5>
                      <div className={styles.location}>
                        <div className={styles.loc_icon}>
                          <MdLocationOn />
                        </div>
                        <span>Remote</span>
                      </div>
                    </div>

                    <button>Show Details</button>
                  </div>


                  <div className={styles.rent_team_card}>
                    <div className={styles.card_left}>
                      <h5>Senior Director and Performance Marketing</h5>
                      <div className={styles.location}>
                        <div className={styles.loc_icon}>
                          <MdLocationOn />
                        </div>
                        <span>Atlanta, GA</span>
                      </div>
                    </div>
                    <button>Show Details</button>
                  </div>


                  <div className={styles.rent_team_card}>
                    <div className={styles.card_left}>
                      <h5>Treasury Specialist</h5>
                      <div className={styles.location}>
                        <div className={styles.loc_icon}>
                          <MdLocationOn />
                        </div>
                        <span>Atlanta, GA</span>
                      </div>
                    </div>

                    <button>Show Details</button>
                  </div>


                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <motion.section className={styles.life_at_rent}
        initial={{ opacity: 0, y: 130 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container">
          <div className="row g-4">
            <h2>Life at Rent.</h2>
            <div className={`col-lg-6 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_8684.jpg" alt="" />
            </div>
            <div className={`col-lg-6 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/billboard_sample.jpg" alt="" />
            </div>
            <div className={`col-lg-4 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/35EPAA-2022.jpeg" alt="" />
            </div>
            <div className={`col-lg-8 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/06/company_photo_georgia_aquarium_2022.jpg" alt="" />
            </div>
            <div className={`col-lg-8 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/image-2.jpg" alt="" />
            </div>
            <div className={`col-lg-4 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/image-1-e1667348622341.jpg" alt="" />
            </div>
            <div className={`col-lg-6 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_3410.jpg" alt="" />
            </div>
            <div className={`col-lg-6 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/generalsession_day2_still_25.jpg" alt="" />
            </div>
            <div className={`col-lg-4 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/image-3.jpg" alt="" />
            </div>
            <div className={`col-lg-8 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/Image-from-iOS-3.jpg" alt="" />
            </div>
            <div className={`col-lg-8 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_0222.jpg" alt="" />
            </div>
            <div className={`col-lg-4 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_2646.jpg" alt="" />
            </div>
            <div className={`col-lg-4 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_0452-redo-e1667348656164.jpg" alt="" />
            </div>
            <div className={`col-lg-4 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/06/072A0336-e1667348876884.jpg" alt="" />
            </div>
            <div className={`col-lg-4 ${styles.rent_images}`}>
              <img src="https://solutions.rent.com/wp-content/uploads/2022/06/P1111552-e1667348838993.jpg" alt="" />
            </div>
          </div>
        </div>
      </motion.section>

      <section className={styles.recent_news}>
        <div className="container">
          <div className="row">
            <motion.h2
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >Recent News</motion.h2>

            <div className="col-lg-6 mb-5">
              <motion.div className={styles.rcnews_card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png" alt="" />
                  <div className={styles.img_overlay}></div>
                </div>

                <div className={styles.badges}>
                  <span>Rent.</span>
                  <span>Feb 14, 2023</span>
                </div>

                <p>Now Available! RentSocial. for TikTok connects properties with renter audiences</p>
              </motion.div>
            </div>


            <div className="col-lg-6 mb-5">
              <motion.div className={styles.rcnews_card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/01/Copy-of-square-property-sites-image.jpg" alt="" />
                  <div className={styles.img_overlay}></div>
                </div>

                <div className={styles.badges}>
                  <span>Business Wire</span>
                  <span>Jan 20, 2023</span>
                </div>

                <p>BusinessWire: Rent. announces Property Sites, a website solution for the multifamily industry.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Discover />

      <motion.div className={styles.modal} style={{ display: open ? 'flex' : 'none' }}
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.modal_left}>
          <img src={img} alt="" />
        </div>

        <div className={styles.modal_right}>
          <div className={styles.top}>
            <h3>{name}</h3>
            <h5>{about}</h5>
          </div>
          <p>As Vice President of Corporate Development & Strategy, Will Byrum is responsible for identifying, planning and executing top strategic initiatives for Rent., both internal (e.g., annual planning) and external (e.g., M&A).

            Prior to joining Rent., Will began his career as a management consultant at Bain & Company, where he spent a decade helping clients with business transformations, growth strategy and private equity due diligence. He then spent time at The Coca-Cola Company doing strategy work for their North American business.</p>
        </div>
        <MdClose onClick={() => setOpen(!open)} />
      </motion.div>
      <div className={styles.body_overlay} style={{ display: open ? 'block' : 'none' }} onClick={(e) => { e.stopPropagation(); setOpen(!open) }}></div>
    </div>
  )
}

export default About