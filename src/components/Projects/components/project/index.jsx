
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, manageModal , link}) {

    return (
        <a href={link} target='_blank' onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>Full Stack Developer</p>
        </a>
    )
}
