import React, { useEffect, useState } from 'react'
import styles from './news.module.scss'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { motion } from 'framer-motion'
const News = () => {

  const [sort, setSort] = useState(0)
  const [open, setOpen] = useState(false)
  const [slice, setSlice] = useState(5)

  useEffect(() => {
    if (sort === 0) {
      setSlice(12)
    }

    else {
      setSlice(6)
    }
  }, [sort])

  const loadMore = () => {
    if (sort === 0) {
      if (slice + 4 > news_data[0].length) {
        setSlice(news_data[0].length + 1)
      }
      else {
        setSlice(slice + 4)
      }
    }
    else if (sort === 1) {
      if (slice + 2 > news_data[1].length) {
        setSlice(news_data[1].length + 1)
      }
      else {
        setSlice(slice + 2)
      }
    }
    else if (sort === 2) {
      if (slice + 2 > news_data[2].length) {
        setSlice(news_data[2].length + 1)
      }
      else {
        setSlice(slice + 2)
      }
    }
  }

  const news_data = [
    [
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png',
        text: 'Now Available! RentSocial. for TikTok connects properties with renter audiences',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/01/Copy-of-square-property-sites-image.jpg',
        text: 'BusinessWire: Rent. announces Property Sites, a website solution for the multifamily industry.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/01/Untitled-design-1000x667-1.jpg',
        text: 'Data Shapes The Future Of Your Property’s Marketing Plan',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/onlineengagement.jpg',
        text: 'NAA Units Magazine: Proven Ways to Resonate with Today’s Renters Online',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/webinar-images-300-%C3%97-250-px.jpg',
        text: 'The Multifamily Innovation® Show: Nishant Phadnis featured in Meet the Sponsors Series',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/3.jpg',
        text: 'New alliance delivers the best of rental reputation management all in one platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/wordpress-image-marketing-dive-2022.jpg',
        text: 'Marketing Dive: Rent. creates TikTok solutions platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/OPTECH-Product-Announcement-Blog-Header.png',
        text: 'Industry’s first data-driven TikTok solution and turn-key website builder unveiled at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/US-News-World-Report-Blog-header.jpg',
        text: 'Should You Hire a Property Manager?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/2022-NMHC-OpTech-News-Header-2.jpg',
        text: 'Build a better future for your property with Rent. at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/RentMarketplace-Sept-2022-updates.jpg',
        text: 'RentMarketplace. goes local, boosts performance, and now syncs to Google',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/4.jpg',
        text: 'CCR Magazine: Navigating a company rebrand can be a challenge',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/1662129734-GettyImages-1176854253.jpg',
        text: 'Entrepreneur: Property tech is creating an incredible real estate opportunity for entrepreneurs',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/169kathheds493342-1170x600-1.jpg',
        text: 'Anatomy of a Rebrand – a Q&A with Kathy Neumann, CMO of Rent.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/08/WIL-Panel-2022-BLOG-header.jpg',
        text: 'Rent. celebrates Women’s Equality Day 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/motley-fool-image-2.jpg',
        text: 'The Motley Fool: What’s going on in the housing market?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/meet-the-sponsors-rent-1168x657-1.jpg',
        text: 'Multifamily Women® Podcast: Interview with Rent. CMO Kathy Neumann',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-04-at-9.46.38-AM.jpg',
        text: 'CBS News: Apartment rents are shooting up in hundreds of cities across the U.S. Here’s why.',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/JZ-interview-Goals-2022-.jpg',
        text: 'The Motley Fool: CEO Jon Ziglar talks rental trends and the future of Rent.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/digitalcurbappeal.jpeg',
        text: 'NAA: 4 ways to improve digital curb appeal',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rent-Announcement-News-Header.jpg',
        text: 'Business Wire: RentPath becomes Rent. and simplifies the rentals marketplace',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1127957300.jpg',
        text: 'Why renters move: affordability and how your property can compete',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/01/Untitled-design-1000x667-1.jpg',
        text: 'Data Shapes The Future Of Your Property’s Marketing Plan',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/onlineengagement.jpg',
        text: 'NAA Units Magazine: Proven Ways to Resonate with Today’s Renters Online',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/webinar-images-300-%C3%97-250-px.jpg',
        text: 'The Multifamily Innovation® Show: Nishant Phadnis featured in Meet the Sponsors Series',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/3.jpg',
        text: 'New alliance delivers the best of rental reputation management all in one platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/wordpress-image-marketing-dive-2022.jpg',
        text: 'Marketing Dive: Rent. creates TikTok solutions platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/OPTECH-Product-Announcement-Blog-Header.png',
        text: 'Industry’s first data-driven TikTok solution and turn-key website builder unveiled at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/US-News-World-Report-Blog-header.jpg',
        text: 'Should You Hire a Property Manager?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/2022-NMHC-OpTech-News-Header-2.jpg',
        text: 'Build a better future for your property with Rent. at OPTECH 2022',
        tag: 'Press'
      },
    ],


    [

      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/01/Untitled-design-1000x667-1.jpg',
        text: 'Data Shapes The Future Of Your Property’s Marketing Plan',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/onlineengagement.jpg',
        text: 'NAA Units Magazine: Proven Ways to Resonate with Today’s Renters Online',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png',
        text: 'Now Available! RentSocial. for TikTok connects properties with renter audiences',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/webinar-images-300-%C3%97-250-px.jpg',
        text: 'The Multifamily Innovation® Show: Nishant Phadnis featured in Meet the Sponsors Series',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-04-at-9.46.38-AM.jpg',
        text: 'CBS News: Apartment rents are shooting up in hundreds of cities across the U.S. Here’s why.',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/digitalcurbappeal.jpeg',
        text: 'NAA: 4 ways to improve digital curb appeal',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rent-Announcement-News-Header.jpg',
        text: 'Business Wire: RentPath becomes Rent. and simplifies the rentals marketplace',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1127957300.jpg',
        text: 'Why renters move: affordability and how your property can compete',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/onlineengagement.jpg',
        text: 'NAA Units Magazine: Proven Ways to Resonate with Today’s Renters Online',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png',
        text: 'Now Available! RentSocial. for TikTok connects properties with renter audiences',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/webinar-images-300-%C3%97-250-px.jpg',
        text: 'The Multifamily Innovation® Show: Nishant Phadnis featured in Meet the Sponsors Series',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-04-at-9.46.38-AM.jpg',
        text: 'CBS News: Apartment rents are shooting up in hundreds of cities across the U.S. Here’s why.',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/digitalcurbappeal.jpeg',
        text: 'NAA: 4 ways to improve digital curb appeal',
        tag: 'News'
      },
    ],


    [
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/01/Copy-of-square-property-sites-image.jpg',
        text: 'BusinessWire: Rent. announces Property Sites, a website solution for the multifamily industry.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/3.jpg',
        text: 'New alliance delivers the best of rental reputation management all in one platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/wordpress-image-marketing-dive-2022.jpg',
        text: 'Marketing Dive: Rent. creates TikTok solutions platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/OPTECH-Product-Announcement-Blog-Header.png',
        text: 'Industry’s first data-driven TikTok solution and turn-key website builder unveiled at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/US-News-World-Report-Blog-header.jpg',
        text: 'Should You Hire a Property Manager?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/2022-NMHC-OpTech-News-Header-2.jpg',
        text: 'Build a better future for your property with Rent. at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/RentMarketplace-Sept-2022-updates.jpg',
        text: 'RentMarketplace. goes local, boosts performance, and now syncs to Google',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/4.jpg',
        text: 'CCR Magazine: Navigating a company rebrand can be a challenge',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/1662129734-GettyImages-1176854253.jpg',
        text: 'Entrepreneur: Property tech is creating an incredible real estate opportunity for entrepreneurs',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/169kathheds493342-1170x600-1.jpg',
        text: 'Anatomy of a Rebrand – a Q&A with Kathy Neumann, CMO of Rent.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/08/WIL-Panel-2022-BLOG-header.jpg',
        text: 'Rent. celebrates Women’s Equality Day 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/motley-fool-image-2.jpg',
        text: 'The Motley Fool: What’s going on in the housing market?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/meet-the-sponsors-rent-1168x657-1.jpg',
        text: 'Multifamily Women® Podcast: Interview with Rent. CMO Kathy Neumann',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/JZ-interview-Goals-2022-.jpg',
        text: 'The Motley Fool: CEO Jon Ziglar talks rental trends and the future of Rent.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/3.jpg',
        text: 'New alliance delivers the best of rental reputation management all in one platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/wordpress-image-marketing-dive-2022.jpg',
        text: 'Marketing Dive: Rent. creates TikTok solutions platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/OPTECH-Product-Announcement-Blog-Header.png',
        text: 'Industry’s first data-driven TikTok solution and turn-key website builder unveiled at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/US-News-World-Report-Blog-header.jpg',
        text: 'Should You Hire a Property Manager?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/2022-NMHC-OpTech-News-Header-2.jpg',
        text: 'Build a better future for your property with Rent. at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/RentMarketplace-Sept-2022-updates.jpg',
        text: 'RentMarketplace. goes local, boosts performance, and now syncs to Google',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/4.jpg',
        text: 'CCR Magazine: Navigating a company rebrand can be a challenge',
        tag: 'Press'
      },
    ]
  ]


  return (
    <>
      <section className={styles.news_header}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.head_left}>
                <h1>Rent<span>News</span></h1>
                <p>Get the latest on renter research, major market trends and technologies that impact the business of renting.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.head_right}>
                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png" alt="" />
                </div>

                <div className={styles.content}>
                  <h5>02/14/2023</h5>
                  <p>Now Available! RentSocial. for TikTok connects properties with renter audiences</p>
                  <h6>Source: <span>Rent</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.news_card_container}>
        <div className="container">
          <div className="row">
            <div className={styles.sort_functions}>
              <div className={styles.category_sorting}>
                <span onClick={() => setSort(0)} style={{ color: sort === 0 ? '#4561ec' : 'white', backgroundColor: sort === 0 ? 'white' : 'transparent' }}>All</span>
                <span onClick={() => setSort(1)} style={{ color: sort === 1 ? '#4561ec' : 'white', backgroundColor: sort === 1 ? 'white' : 'transparent' }}>News</span>
                <span onClick={() => setSort(2)} style={{ color: sort === 2 ? '#4561ec' : 'white', backgroundColor: sort === 2 ? 'white' : 'transparent' }}>Press</span>
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

          <div className="row">
            {
              news_data[sort].slice(0, slice).map((el, index) => (
                <div className="col-lg-6" key={index}>
                  <motion.div className={styles.rcnews_card}
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={styles.img_cont}>
                      <img src={el.img} alt="" />
                      <div className={styles.img_overlay}></div>
                      <div className={styles.tag}>{el.tag}</div>

                    </div>

                    <div className={styles.data_top}>
                      <div className={styles.badges}>
                        <span>Rent.</span>
                        <span>Feb 14, 2023</span>
                      </div>
                      <span>02/14/2023</span>
                    </div>

                    <p>{el.text}</p>

                    <h6>Source: <span>Rent.</span></h6>
                  </motion.div>
                </div>
              ))
            }
          </div>

          <div className="row">
            <button onClick={() => loadMore()} className={styles.load_more}>Load More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default News