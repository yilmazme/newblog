import Navbar from "./components/Navbar";
import style from "./css/App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";
import OnePost from "./components/OnePost";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={style.body}>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/post" exact>
            <Posts />
          </Route>
          <Route path="/post/:slug">
            <OnePost />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
