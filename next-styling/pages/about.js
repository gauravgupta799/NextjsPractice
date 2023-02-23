import React from 'react'
import styles from "../styles/About.module.css";
import scssStyles from "../styles/About.module.scss";

const About = () => {
  return (
    <div>
        <h1 className={styles.title}>This is About page</h1>
        <h1 className={scssStyles.titleScss}>Styled by using SASS</h1>
    </div>
  )
}

export default About