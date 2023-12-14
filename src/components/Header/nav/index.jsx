

import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from '../animation';


const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Nav({ isActive, setIsActive }) {


  return (
    <motion.div
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
            navItems.map((data, index) => {
              return <>
                <a>{data.title}</a>
              </>
            })
          }
        </div>

      </div>

    </motion.div>
  );
}