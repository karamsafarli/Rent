import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsArrowRightCircle } from 'react-icons/bs'
import styles from './nav.module.scss'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box
} from '@chakra-ui/react'
import { BsArrowRightShort } from 'react-icons/bs'
import { motion } from 'framer-motion'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)







    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.pc_nav}`}>
                <div className="row align-items-center">
                    <div className="col-2">
                        <div className={styles.logo}>
                            <Link to={'/'}>
                                <img src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li className={styles.sol}><span>Solutions</span> <RiArrowDropDownLine className={styles.drp} />
                                <motion.div className={styles.solutions}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="container">
                                        <div className="row g-5 align-items-start">
                                            <h3>Solutions</h3>
                                            <div className={`col-lg-6 ${styles.colm0}`}>
                                                <div className={styles.sol_left}>
                                                    <div className={styles.sol_list}>
                                                        <div className={styles.list_side}>
                                                            <ul>
                                                                <li>Rent<span>Marketplace.</span></li>
                                                                <li>Rent<span>Social.</span></li>
                                                                <li>Rent<span>Engage.</span></li>
                                                            </ul>
                                                        </div>
                                                        <div className={styles.list_side}>
                                                            <ul>
                                                                <li>Rent<span>Search.</span></li>
                                                                <li>Rent<span>Target.</span></li>
                                                                <li>Rent<span>Rep.</span></li>
                                                            </ul>
                                                        </div>

                                                        <div className={styles.line}></div>
                                                    </div>

                                                    <button className={styles.btn_primary}>Explore all</button>
                                                </div>
                                            </div>
                                            <div className={`col-lg-6 ${styles.colm0}`}>
                                                <div className={styles.sol_right}>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className={styles.imgcont}>
                                                                <img src="https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-1-header-image.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className={styles.right_top}>
                                                                <span>Featured</span>
                                                                <h6>09/14/2022</h6>
                                                            </div>
                                                            <p>3 ways to get more from your property’s marketing budget</p>
                                                            <h5>Explore <BsArrowRightShort /></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </li>
                            <li className={styles.comp}><span>Company</span> <RiArrowDropDownLine className={styles.drp} />
                                <motion.div className={styles.companies}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={styles.list}>
                                        <ul>
                                            <li><Link to={'/about'}>About</Link></li>
                                            <li><Link to={'/news'}>News</Link></li>
                                        </ul>
                                        <ul>
                                            <li><Link to={'/'}>Careers</Link></li>
                                            <li><Link to={'/faq'}>FAQ</Link></li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li className={styles.res}><span>Resources</span> <RiArrowDropDownLine className={styles.drp} />
                                <motion.div className={styles.resources}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="container">
                                        <div className="row g-5 align-items-start">
                                            <h3>Resources</h3>
                                            <div className={`col-lg-6 ${styles.colm0}`}>
                                                <div className={styles.sol_left}>
                                                    <div className={styles.sol_list}>
                                                        <div className={styles.list_side}>
                                                            <ul>
                                                                <li><span>Webinars</span></li>
                                                                <li><span>Checklists</span></li>
                                                            </ul>
                                                        </div>
                                                        <div className={styles.list_side}>
                                                            <ul>
                                                                <li><span>Reports</span></li>
                                                                <li><span>Assessments</span></li>
                                                            </ul>
                                                        </div>

                                                        <div className={styles.line}></div>
                                                    </div>

                                                    <h5>Explore All Resources <BsArrowRightShort /></h5>
                                                </div>
                                            </div>
                                            <div className={`col-lg-6 ${styles.colm0}`}>
                                                <div className={styles.sol_right}>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className={styles.imgcont}>
                                                                <img src="https://solutions.rent.com/wp-content/uploads/2022/12/Great-Resigation-Webinar-Thumbnail-image.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className={styles.right_top}>
                                                                <span>Featured</span>
                                                                <h6>12/21/2022</h6>
                                                            </div>
                                                            <p>How Property Teams Can Overcome Staff Turnover</p>
                                                            <h5>Explore <BsArrowRightShort /></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <div className={styles.btns}>
                            <span>Client login</span>
                            <button>Get in touch</button>
                        </div>
                    </div>
                </div>
            </div>











            <div className={styles.mobile_navbar}>
                <div className={styles.logo}>
                    <Link to={'/'}>
                        <img src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png" alt="" />
                    </Link>
                </div>

                <div className={styles.menu_icon} onClick={() => setToggle(!toggle)}>
                    {
                        !toggle ? <FiMenu /> : <AiOutlineClose />
                    }
                </div>

                <div className={styles.mob_menu}
                    style={{ transform: !toggle ? 'translate(100%,0)' : 'translate(0,0)' }}
                >
                    <Accordion allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton className={styles.acc_btn}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Solutions <BsArrowRightCircle />
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <ul className={styles.submenu}>
                                    <li>Rent<span>Marketplace.</span></li>
                                    <li>Rent<span>Search.</span></li>
                                    <li>Rent<span>Social.</span></li>
                                    <li>Rent<span>Target.</span></li>
                                    <li>Rent<span>Engage.</span></li>
                                    <li>Rent<span>Rep.</span></li>
                                </ul>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton className={styles.acc_btn}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Company <BsArrowRightCircle />
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <ul className={styles.submenu}>
                                    <li><Link to={'/about'}>About</Link></li>
                                    <li><Link to={'/faq'}>FAQ</Link></li>
                                    <li><Link to={'/news'}>News</Link></li>
                                </ul>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton className={styles.acc_btn}>
                                    <Link to={'/blog'}>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Blog
                                        </Box></Link>
                                </AccordionButton>
                            </h2>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton className={styles.acc_btn}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Resources <BsArrowRightCircle />
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <ul className={styles.submenu}>
                                    <li><Link>Webinars</Link></li>
                                    <li><Link>Reports</Link></li>
                                    <li><Link>Checklists</Link></li>
                                    <li><Link>Assessments</Link></li>
                                </ul>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <div className={styles.menu_btns}>
                        <button>Get in touch</button>
                        <button>Client login</button>
                    </div>
                </div>
            </div>





        </nav>
    )
}

export default Navbar