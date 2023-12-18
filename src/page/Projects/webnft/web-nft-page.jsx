import styles from './style.module.scss';
import Header from '../../../components/Header/Header';
import WebNfc from '../../../assets/web-nft.jpg';
import RoundedButton from '../../../common/RoundedButton/rounded-button';
import Contact from '../../../components/Contact/contact';

const WebNftPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Header />
            </div>
            <div className={styles.judul}>
                <h1>Web Nft Statis</h1>
                <div className={styles.dekripsien}>
                    <div>
                        <p className={styles.judulTitle}>ROLE</p>
                        <p className={styles.dekripsienTitle}>Frontend developer</p>
                    </div>
                    <div>
                        <p className={styles.judulTitle}>CREDITS</p>
                        <p className={styles.dekripsienTitle}>Mr.Boy</p>
                    </div>
                    <div>
                        <p className={styles.judulTitle}>LOCATION </p>
                        <p className={styles.dekripsienTitle}>indonesia</p>
                    </div>
                </div>
                <RoundedButton backgroundColor={"#334BD3"} className={styles.button}>
                    <a href='https://tester-zushi.netlify.app/' target='_blank'>Live site</a>
                </RoundedButton>
                <RoundedButton backgroundColor={"#334BD3"} className={styles.buttonGithub}>
                    <a href='https://github.com/haldies/web-nft' target='_blank'>Github</a>
                </RoundedButton>
            </div>
            <div className={styles.frameMbck}>
                <div className={styles.isiweb}>
                    <img className={styles.isi} src={WebNfc} alt="" />
                </div>

            </div>
            <Contact className={styles.contact} />

        </div>
    );
};

export default WebNftPage;