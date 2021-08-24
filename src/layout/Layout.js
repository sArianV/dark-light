import React, { useEffect, useContext, useRef } from 'react'
import Body from "../components/DefaultComponents/Body"
import GiveawayContext from "../context/giveaway/giveawaysContext"
import { motion } from "framer-motion"
import styles from "./layout.module.css"
function Layout() {
    const giveawayContext = useContext(GiveawayContext);
    const { getGiveaways, giveaways } = giveawayContext;
    useEffect(() => {
        getGiveaways().then(value => console.log(value))
        if (!localStorage.getItem('miGato')) {
            localStorage.setItem('miGato', new Date());
        }
    }, [])
    const constraintsRef = useRef()
    return (
        <Body>
        <motion.div className={styles.drag_area} ref={constraintsRef} />
        <motion.div drag className={styles.div} dragConstraints={constraintsRef} />
        </Body>
    )
}

export default Layout
