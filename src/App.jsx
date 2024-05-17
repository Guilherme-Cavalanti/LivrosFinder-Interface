import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/Home/HomePage';
import Header from './header';
import Footer from './Footer';
import AboutPage from './pages/About/AboutPage';
import BrowsePage from './pages/Browse/browse';
import FilterPage from './pages/FilterPage/FilterPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  const { darkTheme} = useContext(ThemeContext)
  return (
    <div className={darkTheme ? "App dark-theme" : "App light-theme"}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/browse" Component={BrowsePage}>
            <Route index Component={SearchPage} />
            <Route path="search" Component={SearchPage} />
            <Route path="filter" Component={FilterPage} />
            {/* <Route path="book" Component={SingleBook} /> */}
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
