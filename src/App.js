import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/navBar";
import Footer from "./components/layout/footer";
import Landing from "./components/layout/landing";
import AboutUs from "./components/AboutUs/aboutUs";
import RightsQuiz from "./components/RightsQuiz/rightsQuiz";
import Home from "./components/home";
import QuizStart from "./components/RightsQuiz/quizStart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/rightsQuiz/:selectItemId" component={QuizStart} />
          <Route exact path="/" component={Landing} />
          <Route path="/rightsQuiz" component={RightsQuiz} />
          <Route path="/home" component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Redirect from="/rightsQuiz/:selectItemId" to="/rightsQuiz" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
