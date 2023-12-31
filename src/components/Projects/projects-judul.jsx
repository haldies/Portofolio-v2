
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ProjectsCard from './components/projectsCard/projects-card';
import Webnft from '../../assets/web-nft.jpg';
import WebRemoveBg from '../../assets/websiteRemoveBg.jpg';

import Rounded from '../../common/RoundedButton/rounded-button';

const projects = [
  {
    title: "COURSE PROGAMMING",
    src: "https://utfs.io/f/0a350864-895d-4833-a10c-154e8211099a-k7p5mr.jpg",
    color: "#000000",
    link: "/webcourse",
    deskripsi: "Full Stack Developer"
  },
  {
    title: "WEB 3 NFT STATIS",
    src: "https://utfs.io/f/0a350864-895d-4833-a10c-154e8211099a-k7p5mr.jpg",
    color: "#8C8C8C",
    link: "/webnft",
    deskripsi: "Frontend Developer",
  },
  {
    title: "Game 2D & 3D",
    src: "https://utfs.io/f/0a350864-895d-4833-a10c-154e8211099a-k7p5mr.jpg",
    color: "#E1A8D3",
    link: "/",
    deskripsi: "Game Developer",
  },
  {
    title: "CLEARY",
    src: "https://utfs.io/f/7ffb6b8c-e358-41bf-8d7d-e108ec422efa-eh6x5o.jpg",
    color: "#EFE8D3",
    link: "/",
    deskripsi: "Frontend Developer",

  }
]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Home() {

  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  return (
    <section id='project' onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className={styles.projects}>
      <div className={styles.body}>
        {
          projects.map((project, index) => {
            return <Project index={index} title={project.title} link={project.link} deskripsi={project.deskripsi} manageModal={manageModal} key={index} />
          })
        }
      </div>
      <div className={styles.ContainerProjectCard}>
        <ProjectsCard className={styles.projectsCard}
          link="/webcourse"
          title="COURSE PROGAMMING"
          role="2023"
          tahun="Frontend Engineer"
          Webnft={Webnft}
        />
        <ProjectsCard className={styles.projectsCard}

          link="/webnft"
          title="NFT STATIS"
          role="2023"
          tahun="Frontend Engineer"
          Webnft={Webnft}
        />
        <ProjectsCard className={styles.projectsCard}
        link="/"
          title="CLEARY"
          role="2023"
          tahun="Frontend Engineer"
          Webnft={WebRemoveBg}
        />
        <ProjectsCard className={styles.projectsCard}
        link="/"
          title="UP"
          role="2023"
          tahun="Frontend Engineer"
          Webnft={Webnft}
        />

      </div>
      <div className={styles.btnMorework}>
        <Rounded>
          <p>More work</p>
        </Rounded>
      </div>
      <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
          <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
            {
              projects.map((project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                  <img
                    src={`${src}`}
                    width={350}
                    height={0}
                    alt="image"
                  />
                </div>
              })
            }
          </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
      </>
    </section>
  )
}
