import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../components/Preloader/preloader';
import Landing from '../../components/Main/Main';
import Projects from '../../components/Projects/projects-judul';
import Description from '../../components/About/About';
import SlidingImages from '../../components/SlidingImages/sliding-images';
import Contact from '../../components/Contact/contact';
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
