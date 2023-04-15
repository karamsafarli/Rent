import React, { useState } from 'react'
import {
    //Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box
} from '@chakra-ui/react';

import { BsArrowUpCircle } from 'react-icons/bs'
import styles from './acc.module.scss'

const AccordionComponent = ({ question, answer, color }) => {
    const [rotate, setRotate] = useState(false)
    return (
        <>

            <AccordionItem className={styles.acc_item} >
                <h2>
                    <AccordionButton className={styles.acc_btn} onClick={() => setRotate(!rotate)} style={{color: color === 'black' ? 'black' : 'white', borderBottom: color === 'black' ? 'none' : '1px solid #17181C'}}>
                        <Box as="span" flex='1' textAlign='left' style={{color: rotate ? '#7E93FB' : ''}}>
                            {question}
                        </Box>

                        <BsArrowUpCircle style={{ transform: !rotate ? 'rotate(0)' : 'rotate(180deg)' }} />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={styles.acc_panel} style={{color: color === 'black' ? 'black' : 'white', padding: color === 'black' ? '0 0 20px' : '25px 0 30px 0'}}>
                    {answer}
                </AccordionPanel>
            </AccordionItem>

        </>
    )
}

export default AccordionComponent