import styles from './style.module.scss';
import Header from '../../../components/Header/Header';
import WebCourse from '../../../assets/websiteRemoveBg.jpg';
import RoundedButton from '../../../common/RoundedButton/rounded-button';
import Contact from '../../../components/Contact/contact';

const WebCoursePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Header />
            </div>
            <div className={styles.judul}>
                <h1>Web Course</h1>
                <div className={styles.dekripsien}>
                    <div>
                        <p className={styles.judulTitle}>ROLE</p>
                        <p className={styles.dekripsienTitle}>Full stack developer</p>
                    </div>
                    <div>
                        <p className={styles.judulTitle}>CREDITS</p>
                        <p className={styles.dekripsienTitle}>Gerhardien</p>
                    </div>
                    <div>
                        <p className={styles.judulTitle}>LOCATION </p>
                        <p className={styles.dekripsienTitle}>indonesia</p>
                    </div>
                </div>
                <RoundedButton backgroundColor={"#334BD3"} className={styles.button}>
                    <a href='https://coursecode.vercel.app/' target='_blank'>Live site</a>
                </RoundedButton>
                <RoundedButton backgroundColor={"#334BD3"} className={styles.buttonGithub}>
                    <a href='https://github.com/haldies/Web-Course-Progamming' target='_blank'>Github</a>
                </RoundedButton>
            </div>
            <div className={styles.frameMbck}>
                <div className={styles.isiweb}>
                    <img className={styles.isi} src={WebCourse} alt="" />
                </div>
            </div>
            <Contact className={styles.contact}/>

        </div>
    );
};

export default WebCoursePage;