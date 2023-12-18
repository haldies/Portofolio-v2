

import styles from './style.module.scss'


export default function ProjectsCard(Props) {
  return (
    <a href={Props.link} className={styles.projects}>

      <div className={styles.card}>
        <div className={styles.imageProjects}>
          <img src={Props.Webnft} />
        </div>


        <div className={styles.wrapperTitle}>
          <h2 className={styles.title}>{Props.title}
          </h2>

        </div>
        <div className={styles.containerDeskripsi}>
          <p className={styles.tahun}>{Props.tahun}</p>
          <p className={styles.role}>{Props.role}</p>
        </div>
      </div>
    </a>
  )
}
