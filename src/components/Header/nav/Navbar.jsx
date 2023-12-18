

import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from '../animation';


const navItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Project",
    link: "/work",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
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
              return <div key={data.id}>
                <a key={data.id} href={data.link} >{data.title}</a>
              </div>
            })
          }
        </div>

      </div>

    </motion.nav>
  );
}