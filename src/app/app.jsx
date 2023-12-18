
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './globals.css'
import Home from '../page/Home/home';
import WebnftPage from '../page/Projects/webnft/web-nft-page'
import WebCoursePage from '../page/Projects/web-course-page/web-course-page'
import ErrorPage from "../page/Error/Error-page";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/webnft" element={<WebnftPage />} />
                <Route path="/webcourse" element={<WebCoursePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;