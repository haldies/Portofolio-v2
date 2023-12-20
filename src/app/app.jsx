
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './globals.css'
import Home from '../page/Home/home';
import WebnftPage from '../page/Projects/webnft/web-nft-page'
import WebCoursePage from '../page/Projects/web-course-page/web-course-page'
import ErrorPage from "../page/Error/Error-page";
import Curve from "../components/Preloader/curve/loading-Stairt";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (
            async () => {
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.cursor = 'default'
                }, 800)
            }
        )()
    }, [])

    return (
        <>
            <AnimatePresence mode='wait'>
                {isLoading && <Curve key="loading" />}
            </AnimatePresence>
            <Router>
                <Routes>
                    <Route path="/" element={<Home key="home" />} />
                    <Route
                        path="/webnft"
                        element={
                            <AnimatePresence exitBeforeEnter={false}>
                                {isLoading ? null : <WebnftPage key="webnft" />}
                            </AnimatePresence>
                        }
                    />
                    <Route
                        path="/webcourse"
                        element={
                            <AnimatePresence exitBeforeEnter={false}>
                                {isLoading ? null : <WebnftPage key="webnft" />}

                            </AnimatePresence>
                        }
                    />
                    <Route path="*" element={<ErrorPage key="error" />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;