
import styles from './style.module.scss'
export default function ProjectsCard(Props) {

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
