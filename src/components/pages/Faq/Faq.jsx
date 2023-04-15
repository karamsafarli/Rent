import React from 'react'
import styles from './faq.module.scss'
import { motion } from 'framer-motion'
import AccordionComponent from '../../Accordion/AccordionComponent'
import { Accordion } from '@chakra-ui/react'
import acc_data from '../../Accordion/Accdata'
import Discover from '../../DiscoverSection/Discover'

const Faq = () => {
  return (
    <>
      <section className={styles.faq_header}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <h2>Frequently Asked Questions.</h2>
            </div>

            <div className="col-12">
              <motion.div className={styles.faq_links}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >

                <span>General</span>
                <span>RentMarketplace.</span>
                <span>RentSocial.</span>
                <span>RentSearch.</span>
                <span>RentTarget.</span>
                <span>RentEngage.</span>
                <span>RentRep.</span>
              </motion.div>
            </div>

            <div className="col-12">
              <div className={styles.acc_container}>


                <motion.div className={styles.motion_cont}
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>General</h3>
                  <Accordion allowMultiple>
                    {
                      acc_data.map((el, index) => (
                        <AccordionComponent question={el.question} answer={el.answer} key={index} />
                      ))
                    }
                  </Accordion>
                </motion.div>


                <motion.div className={styles.motion_cont}
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>RentMarketplace.</h3>
                  <Accordion allowMultiple>
                    {
                      acc_data.slice(3, 5).map((el, index) => (
                        <AccordionComponent question={el.question} answer={el.answer} key={index} />
                      ))
                    }
                  </Accordion>
                </motion.div>


                <motion.div className={styles.motion_cont}
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>RentSocial.</h3>
                  <Accordion allowMultiple>
                    {
                      acc_data.slice(2,6).map((el, index) => (
                        <AccordionComponent question={el.question} answer={el.answer} key={index} />
                      ))
                    }
                  </Accordion>
                </motion.div>


                <motion.div className={styles.motion_cont}
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>RentSearch.</h3>
                  <Accordion allowMultiple>
                    {
                      acc_data.slice(3,5).map((el, index) => (
                        <AccordionComponent question={el.question} answer={el.answer} key={index} />
                      ))
                    }
                  </Accordion>
                </motion.div>


                <motion.div className={styles.motion_cont}
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>RentTarget.</h3>
                  <Accordion allowMultiple>
                    {
                      acc_data.slice(6,8).map((el, index) => (
                        <AccordionComponent question={el.question} answer={el.answer} key={index} />
                      ))
                    }
                  </Accordion>
                </motion.div>


                <motion.div className={styles.motion_cont}
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>RentEngage.</h3>
                  <Accordion allowMultiple>
                    {
                      acc_data.slice(2,6).map((el, index) => (
                        <AccordionComponent question={el.question} answer={el.answer} key={index} />
                      ))
                    }
                  </Accordion>
                </motion.div>


                <motion.div className={styles.motion_cont}
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>RentRep.</h3>
                  <Accordion allowMultiple>
                    {
                      acc_data.slice(1,4).map((el, index) => (
                        <AccordionComponent question={el.question} answer={el.answer} key={index} />
                      ))
                    }
                  </Accordion>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Discover/>
    </>
  )
}

export default Faq