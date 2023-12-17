

import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from '../animation';


const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Project",
    link: "/work",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export default function Nav({isActive, setIsActive}) {


  return (
    <motion.nav
      variants={menuSlide}
      initial="initial"
      animate={isActive ? "enter" : "exit"}
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {
            navItems.map((data) => {
              
              return <>
                <a href={data.link} >{data.title}</a>
              </>
            })
          }
        </div>

      </div>

    </motion.nav>
  );
}