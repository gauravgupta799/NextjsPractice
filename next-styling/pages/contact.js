import React from 'react'
import styles from "../styles/Contact.module.css";
import scssStyles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <div>
        <h1 className={styles.title}>This is Contact page.</h1>
        <h1 className={scssStyles.titleScss}>Styled by using SASS</h1>
    </div>
  )
}

export default Contact