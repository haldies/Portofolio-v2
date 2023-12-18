import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, slideUpp } from './animation';
import Rounded from '../../common/RoundedButton/rounded-button';




export default function About() {

    const phrase = "I am a front-end web development and game development. Additionally, I am a content creator who enjoys producing content related to the IT world.";
    const subPhrase = "Weaving the Digital World with Sophisticated Code."
    const description = useRef(null);
    const isInView = useInView(description)

    return (
        <section id='about' ref={description} className={styles.description}>
            <div className={styles.body}>
                <p >
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <p >
                    {
                        subPhrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUpp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <div >
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </section>
    )
}
