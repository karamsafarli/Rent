import React, { useState, useEffect } from 'react'
import styles from './blog.module.scss'
import { motion } from 'framer-motion'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Blog = () => {

  const [sort, setSort] = useState('all')
  const [open, setOpen] = useState(false)
  const [slice, setSlice] = useState(10)

  useEffect(() => {
    setSlice(10)
  }, [sort])

  const loadMore = () => {
    if (blog_data.length >= slice + 6) {
      setSlice(slice + 6)
    }
    else {
      setSlice(blog_data.length)
    }
  }

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

  return (
    <>
      <section className={styles.blog_header}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.head_left}>
                <h2>Rent<span>Insights</span></h2>
                <h5>Get the latest multifamily marketing insights, guides, trends and tips here.</h5>
                <a href="#blog-cards">Explore</a>
                <h4>Stay in touch!</h4>
                <input type="email" placeholder='Email address *' />
                <p>This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span> Terms of Service</span> apply.</p>
                <button>Submit</button>
              </div>
            </div>


            <div className="col-lg-6">
              <div className={styles.head_right}>
                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg" alt="" />
                </div>
                <div className={styles.content}>
                  <h5>03/15/2023 in <span >Social Media Marketing</span></h5>
                  <p>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</p>
                  <div className={styles.author_and_tags}>
                    <div className={styles.author}>
                      <img src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp" alt="" />
                      <span>by</span>
                      <h6>Rachel Richardson</h6>
                    </div>

                    <div className={styles.tags}>
                      <span>#Facebook</span>
                      <span>#Social Media Advertising</span>
                      <span>#facebook marketplace</span>
                      <span>#paid ads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id='blog-cards' className={styles.blog_cards}>
        <div className="container">
          <div className="row">
            <div className={styles.sort_functions}>
              <div className={styles.category_sorting}>
                <span onClick={() => setSort('all')} style={{ color: sort === 'all' ? '#4561ec' : 'white', backgroundColor: sort === 'all' ? 'white' : 'transparent' }}>All</span>
                <span onClick={() => setSort('Articles')} style={{ color: sort === 'Articles' ? '#4561ec' : 'white', backgroundColor: sort === 'Articles' ? 'white' : 'transparent' }}>Articles</span>
                <span onClick={() => setSort('Videos')} style={{ color: sort === 'Videos' ? '#4561ec' : 'white', backgroundColor: sort === 'Videos' ? 'white' : 'transparent' }}>Videos</span>
                <span onClick={() => setSort('Resources')} style={{ color: sort === 'Resources' ? '#4561ec' : 'white', backgroundColor: sort === 'Resources' ? 'white' : 'transparent' }}>Resources</span>
              </div>
              <div className={styles.date_sorting}>
                <span onClick={() => setOpen(!open)}>Sort by Date <MdKeyboardArrowDown style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }} />
                  <motion.div className={styles.sort_options} style={{ display: open ? 'block' : 'none' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ul>
                      <li>Date (Newest)</li>
                      <li>Date (Oldest)</li>
                      <li>A - Z</li>
                      <li>Z - A</li>
                    </ul>
                  </motion.div>
                </span>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            {
              blog_data.slice(0, slice).map((el, index) => (
                sort === 'all' ? (
                  <Link key={index} to={`/blog/${el.id}`}>
                    <div className="col-12" key={index}>
                      <motion.div className={styles.blog_card}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className={styles.img_cont}>
                          <img src={el.img} alt="" />
                          <div className={styles.tag}>{el.tag}</div>
                        </div>
                        <div className={styles.content}>
                          <h5>03/20/2023 in <span>Marketing Technology</span></h5>
                          <p>{el.text}</p>
                          <div className={styles.author_and_tags}>
                            <div className={styles.author}>
                              <img src={el.auth_img} alt="" />

                              <h6>by {el.author}</h6>
                            </div>

                            <div className={styles.tags}>
                              <span>#Rental Market</span>
                              <span>#Social Media Advertising</span>
                              <span>#Renter Research</span>
                              <span>#paid ads</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </Link>
                ) : el.tag === sort ? (
                  <Link key={index} to={`/blog/${el.id}`}>
                    <div className="col-12" key={index}>
                      <motion.div className={styles.blog_card}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className={styles.img_cont}>
                          <img src={el.img} alt="" />
                          <div className={styles.tag}>{el.tag}</div>
                        </div>
                        <div className={styles.content}>
                          <h5>03/20/2023 in <span>Marketing Technology</span></h5>
                          <p>{el.text}</p>
                          <div className={styles.author_and_tags}>
                            <div className={styles.author}>
                              <img src={el.auth_img} alt="" />

                              <h6>by {el.author}</h6>
                            </div>

                            <div className={styles.tags}>
                              <span>#Rental Market</span>
                              <span>#Social Media Advertising</span>
                              <span>#Renter Research</span>
                              <span>#paid ads</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </Link>
                ) : ''
              ))
            }

          </div>

          <div className="row">
            <button onClick={() => loadMore()} style={{ display: slice === blog_data.length ? 'none' : 'block' }} className={styles.load_more}>Load More</button>
          </div>
        </div >
      </section >
    </>
  )
}

export default Blog