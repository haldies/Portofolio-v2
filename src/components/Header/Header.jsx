
import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton/rounded-button';
import Magnetic from '../../common/Magnetic/magnetic';
import NavBar from './nav/Navbar';
import { useEffect, useState } from 'react';


export default function Header() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (isActive) setIsActive(false);
    }, []);

    return (
        <>
            <header className={styles.header}>
                <Magnetic>
                    <a href='/' className={styles.logo}>
                        <p className={styles.copyright}>©</p>
                        <div className={styles.name}>
                            <p className={styles.codeBy}>By</p>
                            <p className={styles.haldies}>haldies</p>
                            <p className={styles.Gerhardien}>Gerhardien</p>
                        </div>
                    </a>
                </Magnetic>
                <nav className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/'><h3>About</h3></a>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/'><h3>Contact</h3></a>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a href='/' ><h3>Project</h3></a>
                        </div>
                    </Magnetic>
                </nav>
            </header>
            <div className={styles.headerButtonContainer}>
                <Rounded onClick={() => setIsActive(!isActive)} className={styles.button}>
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
