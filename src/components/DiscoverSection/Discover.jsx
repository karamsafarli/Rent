import React from 'react'
import styles from './disc.module.scss'
import { motion } from 'framer-motion'
const Discover = () => {
    return (
        <section className={styles.discover}>
            <div className={`container ${styles.disc_cont}`}>
                <div className="row">
                    <div className="col-xl-7 col-lg-5 col-md-12 col-12">
                        <motion.div className={styles.disc_left}
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Discover your next resident on our network</h2>
                        </motion.div>
                    </div>
                    <div className="col-xl-5 col-lg-7 col-md-12 col-12">
                        <div className={styles.disc_right}>
                            <motion.div className={styles.disc_logos}
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >

                                <div className={styles.disc_img}>
                                    <img src="https://solutions.rent.com/wp-content/uploads/2022/06/BrandRent-TypePrimary-Logo-Saturation1-Color-ColorBlack-1-3.png" alt="" />
                                </div>
                                <div className={styles.disc_img}>
                                    <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-12.png" alt="" />
                                </div>
                            </motion.div>


                            <motion.div className={styles.disc_logos}
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className={styles.disc_img}>
                                    <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-13.png" alt="" />
                                </div>
                                <div className={styles.disc_img}>
                                    <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-14.png" alt="" />
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover