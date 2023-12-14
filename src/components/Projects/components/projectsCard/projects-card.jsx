'use client';
import styles from './style.module.scss'

import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Website Course Progaming",
    src: "c2montreal.png",
    role: "Frontend Engineer",
    tahun: "2023",
    color: "#000000"
  },
  {
    id: 2,
    title: "Website Nft Statis",
    src: "officestudio.png",
    role: "Frontend Engineer",
    tahun: "2023",
    color: "#8C8C8C"
  },
  {
    id: 3,
    title: "Game 2D & 3D",
    src: "locomotive.png",
    role: "Frontend Engineer",
    tahun: "2023",
    color: "#EFE8D3"
  },
  {
    id: 4,
    title: "Website Remove Background",
    src: "silencio.png",
    role: "Frontend Engineer",
    tahun: "2023",
    color: "#706D63"
  }
]



export default function ProjectsCard(Props) {
  console.log(Props.link)

  return (
    <div className={styles.projects}>

      <div className={styles.card}>
        <div className={styles.imageProjects}>
          <img src={Props.Webnft} />
        </div>
        <a className={styles.title} href={Props.link} target="_blank" >{Props.title}</a>
        <div className={styles.containerDeskripsi}>
          <p className={styles.tahun}>{Props.tahun}</p>
          <p className={styles.role}>{Props.role}</p>
        </div>
      </div>
    </div>
  )
}
