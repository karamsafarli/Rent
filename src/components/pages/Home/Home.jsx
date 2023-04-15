import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.scss'
import img1 from '../../../img/img_phone.png'
import img2 from '../../../img/img_atr.png'
import img3 from '../../../img/img2.png'
import img4 from '../../../img/img3.png'
import img5 from '../../../img/img_home.png'
import { motion } from 'framer-motion'
import { AiOutlineDownload } from 'react-icons/ai'
import AccordionComponent from '../../Accordion/AccordionComponent'
import { Accordion } from '@chakra-ui/react'
import DiscoverSection from '../../DiscoverSection/Discover'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Home = () => {

  const acc_data = [
    {
      question: 'Who can I contact for questions on billing and my invoices?',
      answer: 'We’re happy to help! Call us at 866.236.2510 to talk through your billing questions.'
    },
    {
      question: 'I signed up for services prior to June 21, 2022. Has my service changed? What are the new product names?',
      answer: 'You still have the same pricing, access to powerful solutions and quality customer service that are part of your plan. Your MyRentPath account has been upgraded to RentHQ, where you can easily access all of your solutions and reporting. '
    },
    {
      question: 'I’m a current customer, how do I contact customer support?',
      answer: 'You can reach us by phone at 877.999.4472 from 9:00 am to 6:00 pm EDT. Or shoot us an email at customersuccess@rent.com.'
    },
    {
      question: 'I used your solutions in the past, what should I expect with the new improvements?',
      answer: 'The new Rent. is much more than a marketplace. Whether you’re building your property’s brand, attracting and converting new renter leads, or nurturing current residents for renewals–the Rent. platform is here to take on your biggest challenges.'
    },
    {
      question: 'How do I get started?',
      answer: 'Let’s get you set up! Complete the form on our Contact Us page and our team will connect with you as soon as possible to talk through your needs. We look forward to hearing from you.'
    },
    {
      question: 'Can I change my subscription or add on products at any time?',
      answer: 'You can add on products at any time. For any questions regarding your current subscription, reach out to your dedicated Rent. representative or contact Customer Success to talk through your needs. '
    },
    {
      question: 'Are there discounts for bundled services?',
      answer: 'Yes, contact us and our team will reach out to build a custom package based on your portfolio needs. Rent. solutions work together to boost results, and we want to help you get there with bundled savings. Properties brought in 35% more leads per month on average after adding turnkey RentSocial. solutions to their RentMarketplace package.'
    },
    {
      question: 'What services do you offer?',
      answer: 'Though we are recognized for our vast reach across a network of listing services, Rent. is here to take the hassle out of the entire leasing lifecycle for property owners and operators. '
    },
    {
      question: 'What is Rent.?',
      answer: 'We’re here to simplify your entire leasing lifecycle, whether you’re building your property’s brand, attracting and converting new renter leads, or nurturing current residents for renewals. The Rent. platform powers a full suite of best-in-class digital marketing solutions across search advertising, social media, email marketing, web chat, resident communication, reputation management and more. Powered by unmatched proprietary data from our marketplace, Rent. solutions allow you to reach high-intent renters who are actively searching in your area.'
    },
  ]






  return (
    <>
      <section className={styles.home_header}>
        <div className="container">
          <div className={`row ${styles.r1}`}>
            <div className="col-lg-6">
              <motion.div className={styles.header_left}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Apartment marketing solutions that work as hard as you do. Period.</h2>
                <p><span>Rent. is more than a marketplace.</span> We help you easily attract new renters, engage prospects during their search, and nurture resident relationships.</p>
                <div className={styles.btns}>
                  <a href="#aqr">Learn how</a>
                  <button>Get in touch</button>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div className={styles.header_right}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={img1} alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aqr} id='aqr'>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <motion.div className={styles.aqr_left}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Attract Qualified Renters</h2>
                <p>Renters are more likely to discover your property first on an online marketplace than your property website. From there, it’s about getting tours booked. </p>
                <p>Attract high-quality leads that are ready to tour–and ultimately sign that lease–with listings that make the most of your budget and time. Rent. connects property owners and managers with close to 50 million home seekers¹ per month through our network of marketplaces. You can even reach in-market renters with search ads, social ads and email marketing solutions that are powered by our marketplace.</p>
                <button>Start listing</button>
                <motion.div className={styles.logos}
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.logo}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/2-3.png" alt="" />
                  </div>
                  <div className={styles.logo}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/1-1.png" alt="" />
                  </div>
                  <div className={styles.logo}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/3-1.png" alt="" />
                  </div>
                  <div className={styles.logo}>
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/05/4-1.png" alt="" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className="col-lg-7">
              <div className={styles.aqr_right}>
                <motion.div className={styles.imgcont}
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={img2} alt="" />
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.mynr}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className={styles.mynr_headings}>
              <motion.h2 initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>Meet Your Next Resident</motion.h2>
              <motion.p initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>Inspire renters to take action and boost your property’s brand.</motion.p>
            </div>
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.mynr_left}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={img3} alt="" />
              </motion.div>
            </div>

            <div className="col-lg-6 mb-5">
              <motion.div className={styles.mynr_right}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Rent<span>Marketplace.</span></h2>
                <p>Renter-centric search experiences to find your newest residents.</p>
                <ul>
                  <li>Access to nearly 50 million visitors per month.</li>
                  <li>Attract and engage renters with videos, virtual tours, online applications, and included photoshoots.</li>
                  <li>Easily manage listing content, tools and performance reports with the RentHQ. client portal.</li>
                  <li>Stand out to renters in their search with Profile Sync, which effortlessly syndicates property data and images on your Google listing.</li>
                </ul>
                <button className={styles.btn_primary}>Learn more</button>
              </motion.div>
            </div>
          </div>



          <div className={`row align-items-center mb-5 ${styles.reverse}`}>

            <div className="col-lg-6 mb-5">
              <motion.div className={styles.mynr_left}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={img4} alt="" />
              </motion.div>
            </div>

            <div className="col-lg-6 mb-5">
              <motion.div className={styles.mynr_right}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Rent<span>Social.</span></h2>
                <p>Fair-housing compliant social ads that generate high-quality renter leads.</p>
                <ul>
                  <li>Rent. reaches 50x more in-market renters than traditional targeting with hyper-targeting powered by our unmatched proprietary data from RentMarketplace. visitors.⁵</li>
                  <li>Choose from turnkey ads that go live in as little as 24 hours or custom strategy based on your specific campaign needs.</li>
                  <li>Reach renters like never before on Facebook, Instagram, Snapchat or TikTok.</li>
                  <li>Deliver in-market renter leads directly to your property management system with campaigns powered by unmatched proprietary data.</li>
                </ul>
                <button className={styles.btn_primary}>Learn more</button>
              </motion.div>
            </div>
          </div>



          <div className="row align-items-center">

            <div className="col-lg-6 mb-5">
              <motion.div className={styles.mynr_left}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={img5} alt="" />
              </motion.div>
            </div>

            <div className="col-lg-6 mb-5">
              <motion.div className={styles.mynr_right}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Rent<span>Search.</span></h2>
                <p>Award-winning Google search campaigns that keep occupancy rates high.</p>
                <ul>
                  <li>Unparalleled lead quality and website traffic powered by the Rent. marketplace network.</li>
                  <li>3X higher click-through rates than the industry average.⁶</li>
                  <li>Simple, transparent pricing.</li>
                </ul>
                <button className={styles.btn_primary}>Learn more</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bll}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12 col-12">
              <motion.div className={styles.bll_headings}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Be a leasing legend.</h2>
                <p>Learn how WestCorp boosted occupancy rates to 99% with Google PPC Ads powered by our unmatched proprietary data on in-market renters.</p>
              </motion.div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12 col-12">
              <motion.div className={styles.bll_container}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Serena Y. from WestCorp Management Group found a better way to bring in qualified renters.</h3>
                <p>WestCorp boosted their leasing after using our hyper-targeted PPC Google campaigns:</p>
                <ul>
                  <li>34% higher conversion rates</li>
                  <li>15-20% higher click-through rate</li>
                  <li>98-99% occupancy rates</li>
                </ul>
                <a href='#mrcc'>Download Now <AiOutlineDownload /></a>
                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2022/06/serena-yang-transparent.png" alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id='mrcc' className={styles.mrcc}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className={styles.mrcc_headings}>
                <motion.h2 initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>Make Resident Connections Count</motion.h2>
                <motion.p initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>Simplify communications and automate repetitive tasks for your property team.</motion.p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.mynr_right}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-connect.png" alt="" />
                </div>
                <h2>Rent<span>Engage.</span></h2>
                <p>Your leasing team’s key to communicating with renters and residents stress-free.</p>
                <ul>
                  <li>24/7 leasing center support handles incoming calls, emails and online chat.</li>
                  <li>Trusted, FHA-compliant solutions safely answer questions, book appointments and qualify renter leads.</li>
                  <li>Nurture prospects and residents to lease and renewal with automated, two-way text and email messages from a centralized platform.</li>
                </ul>
                <button className={styles.btn_primary}>Learn more</button>
              </motion.div>
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="col-lg-6">
              <motion.div className={styles.mynr_right}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2022/05/Screen-Shot-2022-07-21-at-10.56.43-AM.jpg" alt="" />
                </div>
                <h2>Rent<span>Rep.</span></h2>
                <p>Take control of your online reputation and social presence to boost renter engagement and SEO.</p>
                <ul>
                  <li>Fair Housing-trained experts handle your review responses and social media.</li>
                  <li>Effectively manage reviews, social, listings, surveys and more with a best-in-class dashboard powered by Reputation.</li>
                  <li>Deliver fast and personalized responses to resident reviews.</li>
                  <li>Highest-rated reputation management solution available.</li>
                </ul>
                <button className={styles.btn_primary}>Learn more</button>
              </motion.div>
            </div>
          </div>

          <div className="row">
            <div className={styles.line}></div>
          </div>

          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className={styles.mrcc_headings}>
                <motion.h2 initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>Target intelligently</motion.h2>
                <motion.p initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>Boost your efforts with hyper-targeted advertising solutions powered by our proprietary in-market renter data.</motion.p>
              </div>
            </div>
            <div className="col-lg-6">
              <motion.div className={styles.mynr_right}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2022/05/RentTarget-Examples.png" alt="" />
                </div>
                <h2>Rent<span>Target.</span></h2>
                <p>Reach the right renters with targeted display and email campaigns.</p>
                <ul>
                  <li>Sophisticated targeting that drives 3X more clicks⁷ from in-market renters.</li>
                  <li>Get in front of renters right when they step into your area with geo-fencing technology.</li>
                  <li>Fair Housing trained experts to safely maximize your reach with in-market renters.</li>
                </ul>
                <button className={styles.btn_primary}>Learn more</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.home_faq}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <motion.div className={styles.faq_headings}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Frequently Asked Questions</h2>
                <p>Got questions? We have answers.</p>
              </motion.div>
            </div>
            <motion.div className="col-lg-7"
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Accordion allowMultiple className={styles.acc}>
                {
                  acc_data.map((el, index) => (
                    <AccordionComponent key={index} answer={el.answer} question={el.question} color={'black'} />
                  ))
                }
              </Accordion>

              <Link className={styles.btn_primary} to={'/faq'}>
                Explore FAQs
              </Link>
            </motion.div>
          </div>
        </div>
      </section>










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
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/04/Realtor-Rent.-Announcement-Graphic.jpg" alt="" />
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
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/03/Add-a-heading.jpg" alt="" />
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

      <section className={styles.wrcc}>
        <motion.div className={`container ${styles.wrcc_container}`}
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="row">
            <div className="col-lg-5">
              <div className={styles.wrcc_left}>
                <h2>We are Rent.
                  a Redfin Company</h2>
                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-about-us.png" alt="" />
                </div>
              </div>


            </div>
            <div className="col-lg-7">
              <div className={styles.wrcc_right}>
                <p>We’re here to simplify your entire leasing lifecycle, whether you’re building your property’s brand, attracting and converting new renter leads, or nurturing current residents for renewals. </p>
                <div className={styles.socials}>
                  <span>Follow us on social:</span>
                  <div className={styles.soc_icons}>
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
                  </div>
                </div>

                <button className={styles.btn_primary}>About Rent.</button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      <DiscoverSection />


    </>
  )
}

export default Home