
import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import NavBar from './nav';
import { useEffect, useState } from 'react';


export default function Nav() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (isActive) setIsActive(false);
      }, []);

    return (
        <>
            <div  className={styles.header}>
                <Magnetic>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.codeBy}>By</p>
                        <p className={styles.haldies}>haldies</p>
                        <p className={styles.Gerhardien}>Gerhardien</p>
                    </div>
                </div>
                </Magnetic>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/p'>Project</a>     
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/p'>About</a>          
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/p'>Contact</a>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='https://github.com/haldies' target="_blank">Github</a>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div  className={styles.headerButtonContainer}>
                <Rounded onClick={() => setIsActive(!isActive)}  className={styles.button}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>
            <NavBar 
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </>
    )
}
