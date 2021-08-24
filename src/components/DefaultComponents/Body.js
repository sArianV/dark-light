import React from 'react'
import styles from "./Body.module.css"
import { motion } from "framer-motion"

function Body(props) {
    return (
        <motion.div className={styles.myBody}>
           {props.children}
        </motion.div>
    )
}

export default Body
