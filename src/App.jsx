import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/Home/HomePage';
import Header from './header';
import Footer from './Footer';

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
            <Route index Component={HomeBrowser} />
            <Route path="home" Component={HomeBrowser} />
            <Route path="search" Component={SearchPage} />
            <Route path="filter" Component={FilterPage} />
            <Route path="book" Component={SingleBook} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
