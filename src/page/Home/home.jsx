import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../components/Preloader/index';
import Landing from '../../components/Landing/index';
import Projects from '../../components/Projects/projects-judul';
import Description from '../../components/Description/index';
import SlidingImages from '../../components/SlidingImages/index';
import Contact from '../../components/Contact/index';
import RootLayout from '../../app/layout';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <>
      <main className={styles.main}>
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
        <RootLayout />
        <Landing />
        <Description />
        <Projects  />
        <SlidingImages />
      </main>
      <footer id='footer'>
        <Contact />
      </footer>
    </>
  )
}
