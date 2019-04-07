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
import OccupationContain from "./components/occupation/occupationContain";
import CoursesContainer from "./components/courses/coursesContainer";
import MainFooter from "./components/layout/mainFooter";
import HousingContain from "./components/housing/housingContain";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/housing" component={HousingContain} />
          <Route path="/courses" component={CoursesContainer} />
          <Route path="/occupation" component={OccupationContain} />
          <Route path="/rightsQuiz/:selectItemId" component={QuizStart} />
          <Route exact path="/" component={Landing} />
          <Route path="/rightsQuiz" component={RightsQuiz} />
          <Route path="/home" component={Home} />
          <Redirect from="/rightsQuiz/:selectItemId" to="/rightsQuiz" />
        </Switch>

        {/**quick Link */}
        <MainFooter />
      </div>
    );
  }
}

export default App;
