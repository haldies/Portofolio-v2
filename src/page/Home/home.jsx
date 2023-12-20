import styles from './styles.module.scss'
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
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
        }, 2000)
      }
    )()
  }, [])

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <main className={styles.main}>
        <RootLayout />
        <Landing />
        <Description />
        <Projects />
        <SlidingImages />
      </main>
      <footer id='footer'>
        <Contact />
      </footer>
    </>
  )
}
