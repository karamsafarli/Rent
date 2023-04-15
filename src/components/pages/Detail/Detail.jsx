import React from 'react'
import styles from './detail.module.scss'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
const Detail = () => {
    const blog_data = [
        {
            id: 1,
            img: 'https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg',
            text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 2,
            img: 'https://solutions.rent.com/wp-content/uploads/2023/01/property-sites-blog.jpg',
            text: 'Top 4 mistakes property marketers make with websites',
            tag: 'Videos',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 3,
            img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1495929368.jpg',
            text: 'Run a property marketing wellness check to boost performance this year',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 4,
            img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1264777678.jpg',
            text: '3 times more critical maintenance issues resolved during winter storm',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 5,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/12/2085720871-Edited-4star.jpg',
            text: '3 Smart Ways to Manage Your Property’s Ratings and Reviews',
            tag: 'Resources',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 6,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/11/tik-tok-blog.jpg',
            text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 7,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/10/amazon-blog-header-image.jpg',
            text: 'Renter experience: What properties can learn from e-commerce giants',
            tag: 'Videos',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 8,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_2007206966.jpg',
            text: 'Money, Effort, Time: Building a better property marketing budget',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 9,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_1041104380.jpg',
            text: '3 time-saving wins for busy property teams',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 10,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-2-image-header.jpg',
            text: 'Budget planning tips to bounce back from property staffing challenges',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 11,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-1-header-image.jpg',
            text: '3 ways to get more from your property’s marketing budget',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 12,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1697959045.jpg',
            text: 'How to create exceptional renter experiences across every property in your portfolio',
            tag: 'Videos',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 13,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1519392692.jpg',
            text: 'Learn the secrets to winning, serving, and retaining top talent in the multifamily industry',
            tag: 'Videos',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 14,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1517082941.jpg',
            text: 'Should you be on Snapchat? A property marketer’s guide to maximizing social presence.',
            tag: 'Videos',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 15,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/08/spark-better-conversations-with-fha-best-practices-blog.jpg',
            text: 'Spark better conversations and avoid risk with FHA best practices',
            tag: 'Resources',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 16,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/07/shutterstock_1463711015.jpg',
            text: 'FHA Refresher: Avoid common mistakes in your property marketing',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 17,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/07/dont-risk-it.jpg',
            text: 'Don’t Risk It: Fair Housing Considerations for Property Digital Advertising',
            tag: 'Videos',
            author: 'Nicole Booth',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Nicole-Booth.webp'
        },
        {
            id: 18,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/07/WestCorp-Blog-Graphic-Rent.jpg',
            text: 'How WestCorp Management Group Achieved 99% Occupancy With RentSearch.',
            tag: 'Resources',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 19,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1062950258-header-e1658015176908.jpg',
            text: 'How Outsourcing Can Ease The Burden Off Your Onsite Staff',
            tag: 'Videos',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 20,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1334322908.webp',
            text: '5 Reasons Why Your Search Ads Aren’t Showing',
            tag: 'Resources',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },

        {
            id: 21,
            img: 'https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg',
            text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
            tag: 'Resources',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 22,
            img: 'https://solutions.rent.com/wp-content/uploads/2023/01/property-sites-blog.jpg',
            text: 'Top 4 mistakes property marketers make with websites',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 23,
            img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1495929368.jpg',
            text: 'Run a property marketing wellness check to boost performance this year',
            tag: 'Videos',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 24,
            img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1264777678.jpg',
            text: '3 times more critical maintenance issues resolved during winter storm',
            tag: 'Resources',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 25,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/12/2085720871-Edited-4star.jpg',
            text: '3 Smart Ways to Manage Your Property’s Ratings and Reviews',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 26,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/11/tik-tok-blog.jpg',
            text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
            tag: 'Videos',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 27,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/10/amazon-blog-header-image.jpg',
            text: 'Renter experience: What properties can learn from e-commerce giants',
            tag: 'Articles',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 28,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_2007206966.jpg',
            text: 'Money, Effort, Time: Building a better property marketing budget',
            tag: 'Resources',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
        {
            id: 29,
            img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_1041104380.jpg',
            text: '3 time-saving wins for busy property teams',
            tag: 'Videos',
            author: 'Rachel Richardson',
            auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
        },
    ]

    const { id } = useParams()
    const card = blog_data[id - 1];
    return (
        <>
            <section className={styles.detail_header}>
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <motion.div className={styles.imgcont}
                                initial={{ opacity: 0, y: 120 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img src={card.img} alt="" />
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div className={styles.header_right}
                                initial={{ opacity: 0, y: 120 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h6>03/20/2023</h6>
                                <p>{card.text}</p>
                                <div className={styles.author}>
                                    <div className={styles.auth_left}>
                                        <img src={card.auth_img} alt="" />
                                    </div>
                                    <div className={styles.auth_right}>
                                        <h4>by <span>{card.author}</span></h4>
                                        <h5>Content Manager, Demand Generation</h5>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-8">
                            <motion.div className={styles.tags}
                                initial={{ opacity: 0, y: 120 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span>#Social Media Advertising</span>
                                <span>#Renter Research</span>
                                <span>#Rental Market</span>
                                <span>#Multifamily Marketing</span>
                                <span>#Multifamily Advertising</span>
                                <span>#Onsite Teams</span>
                            </motion.div>
                        </div>
                        <div className="col-lg-4">
                            <motion.div className={styles.socials}
                                initial={{ opacity: 0, y: 120 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span>Share:</span>
                                <div className={styles.icons}>
                                    <FaFacebookF />
                                </div>
                                <div className={styles.icons}>
                                    <FaTwitter />
                                </div>
                                <div className={styles.icons}>
                                    <FaLinkedinIn />
                                </div>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.lists}>
                <div className="container">
                    <div className="row">
                        <motion.div className="col-lg-9"
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ul>
                                <li>The multifamily market is starting to soften: high rates of apartment completions and new construction, declining rent rates and changing renter needs.</li>
                                <li>This year, there are 943,000 units of multifamily housing under construction. This is an almost 50-year record high.</li>
                                <li>Rental vacancies in the last quarter of 2022 were up 5.8% nationwide compared to 5.6% in Q4 of 2021.</li>
                                <li>Pivot away from less effective tactics and find channels that bring in new traffic and nurture leads.</li>
                            </ul>

                            <div className={styles.line}></div>

                            <h5>The rental market slowdown is now here. What’s next for owners and operators?</h5>
                            <p>With softening marketing conditions, multifamily owners and operators are under pressure to maintain occupancy and generate demand. Here are the major market trends that impact a property’s day-to-day operations and what you can do about them.</p>
                            <h5>What’s changed this year?</h5>
                            <p>The rental market looks a lot different than it did last year, and multifamily is adjusting after years of historically high demand and rate increases. Market analysts are seeing softening market conditions with high rates of apartment completions and new construction, higher vacancy rates compared to last year, and declining rent rates. These changes are also clear in renters’ online search activity. Demand for rental-related keywords on Google steadily declined from July 2022 to December 2022.1
                                We’ll get into the five biggest trends that are impacting property teams, and what you can do to keep occupancy high despite changing market conditions.</p>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="col-lg-6">
                                <div className={styles.imgcont}>
                                    <img src="https://solutions.rent.com/wp-content/uploads/2023/03/1-1-1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <p className={styles.imgdata}>Growing supply of new properties entering the market gives renters more options and heats up competition for established property teams. This year, there are 943,000 units of multifamily housing under construction, according to the National Association of Home Builders.2 This is an almost 50-year record high. More projects are in the process of being completed at one time than we’ve seen since the 1970’s.</p>
                            </div>
                        </motion.div>





                        <motion.div
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="col-lg-6">
                                <div className={styles.imgcont}>
                                    <img src="https://solutions.rent.com/wp-content/uploads/2023/03/2-1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <p className={styles.imgdata}>During what is historically the busiest leasing period, apartment demand unexpectedly fell in the third quarter of 2022.4 The U.S. Census Bureau reported rental vacancies in the last quarter of 2022 up 5.8% nationwide compared to 5.6% in Q4 of 2021.5 Midwest and Southern regions had the sharpest increases in vacancy last year, up to 6.9% and 7.3%, respectively. The Western region followed behind at 4.2%.</p>
                            </div>
                        </motion.div>



                        <motion.div
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="col-lg-6">
                                <div className={styles.imgcont}>
                                    <img src="https://solutions.rent.com/wp-content/uploads/2023/03/3-1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <p className={styles.imgdata}>Rent rates nationwide have also started to cool. Analysts across the board expect this pattern to continue in 2023, with effective rent growth projected to drop by as much as 4.3%.6</p>
                            </div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="col-lg-6">
                                <div className={styles.imgcont}>
                                    <img src="https://solutions.rent.com/wp-content/uploads/2023/03/4-1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <p className={styles.imgdata}>The cost to reach renters is increasing for advertisers. Compared to 2021, Meta’s cost per thousand shot up 61%, TikTok’s CPM came in at 185% higher and Google’s programmatic display CPMs rose 75%.7 These rising prices have been attributed to a variety of factors, including price volatility of new ad platforms and policy changes that make ad targeting more difficult and expensive. In an industry already challenged with effective targeting and FHA requirements, multifamily advertisers have to be extra vigilant in effectively using ad dollars in the future.</p>
                            </div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="col-lg-6">
                                <div className={styles.imgcont}>
                                    <img src="https://solutions.rent.com/wp-content/uploads/2023/03/5-1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <p className={styles.imgdata}>Where many renters used to be “digital-preferred,” they are now digital first. Trusted sources used in buying decisions have shifted due to online influencers and expanding media consumption. More than half of consumers (51%) say an influencer endorsement caused them to purchase in the past two years.</p>
                            </div>
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
                                    <img src="https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1277400719.webp" alt="" />
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
                                    <img src="https://solutions.rent.com/wp-content/uploads/2022/07/Renter-communication.jpeg" alt="" />
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
        </>
    )
}

export default Detail