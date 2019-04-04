import React, { Component } from "react";
import { Link } from "react-dom";
import { CSSTransitionGroup } from "react-transition-group";
import QuizSingle from "./singleQuiz";
import { getQuestions } from "./quizData";
import QuizResult from "./quizResult";
import QuestionCount from "./questionCount";
import { getPrograms } from "./resultPgramData";
import { isEligible } from "../util/validateRights";
import ProgressBar from "../common/progressBar";

//The start of the quiz component
class QuizStart extends Component {
  state = {
    quizData: [], //get the total questions and answers
    currentQuestion: {}, //current question object
    currentIndex: 0, //index of current question
    answer: {},
    choices: [], // question choices
    questionContent: "", //question body
    result: [],
    programs: [] //get program data
  };

  //get all the question and results data, bug here , if there is no question existed
  componentDidMount() {
    const { history } = this.props;
    //get question data
    const quizData = getQuestions();
    console.log(quizData);

    const currentQuestion = quizData[0];
    const choices = currentQuestion.choices;
    const questionContent = currentQuestion.questionContent;

    //get program result data
    const programs = getPrograms();
    console.log(programs);

    this.setState({
      quizData,
      currentQuestion,
      choices,
      questionContent,
      programs
    });
  }

  //nextStep() : go to next question, update currentIndex and currentQuestion
  handleAnswerSlected = (newResult, index) => {
    console.log("back result is", newResult);
    this.setState({ result: newResult, currentIndex: index });
    //this.setCheckResults(newResult);

    if (index < this.state.quizData.length) {
      this.setNextQuestion(index);
    } else {
      this.setCheckResults(newResult);
    }
  };

  //control to show the next question until finishing
  setNextQuestion(index) {
    //\if (this.state.currentIndex + 1 < this.state.quizData.length) {
    //const nextIndex = this.state.currentIndex + 1;
    const currentQuestion = this.state.quizData[index];
    //const currentQuestion = this.state.quizData[this.state.currentIndex];
    const choices = currentQuestion.choices;
    const questionContent = currentQuestion.questionContent;
    this.setState({
      //currentIndex: nextIndex,
      currentQuestion,
      choices,
      questionContent
    });
    console.log("set next question called...", currentQuestion);
    //}
  }

  //calculate the result that match the conditions
  setCheckResults(result) {
    //1. copy the programs data
    const programs = [...this.state.programs];
    //2. check eligible for each program
    programs.map(program => {
      const reqArr = [...program.require];
      program.isChecked = isEligible(result, reqArr);
      console.log("updated isChecked", program.isChecked);
    });
    //3. update the programs
    this.setState({ programs });
  }

  //push the answer into the results
  /*  handleAnswer = newResult => {
    console.log("handleAnswer called, result updated", newResult);
    this.setState({ result: newResult });
    /* 
    if (this.state.currentIndex + 1 === this.state.quizData.length) {
      console.log("length === maximum");
      this.setCheckResults(this.state.result);
    } 
}; */

  //return the final result of the questions
  getResults() {
    const result = [...this.state.result];
    console.log("get final result to check ", result);
    return result;
  }

  //render the quiz question and choices
  renderQuiz() {
    const { currentIndex } = this.state;
    return (
      <div className="row">
        <div className="col-12">
          <QuestionCount
            counter={currentIndex + 1}
            total={this.state.quizData.length}
          />
        </div>

        <div className="col-12">
          <QuizSingle
            question={this.state.questionContent}
            choices={this.state.choices}
            index={this.state.currentIndex}
            total={this.state.quizData.length}
            onSelected={this.handleAnswerSlected}
            result={this.state.result}
            //onAnswer={this.handleAnswer}
          />
        </div>
      </div>
    );
  }

  renderProgressBar() {
    return (
      <ProgressBar
        current={this.state.currentIndex + 1}
        total={this.state.quizData.length}
      />
    );
  }

  //render the quiz resul
  renderResult() {
    console.log("passing to renderResult programs is", this.state.programs);
    console.log("passing to renderResult result  is", this.state.result);
    const { history } = this.props;
    return (
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <QuizResult
          result={this.state.result}
          programs={this.state.programs}
          history={history}
        />
      </CSSTransitionGroup>
    );
  }

  //built-in render function
  render() {
    //count the total number of questions
    const { length: total } = this.state.quizData;

    console.log("questions length: ", total);
    return (
      <React.Fragment>
        <div id="quiz-start-top">
          <div className="container">
            <div className="row" id="quiz-start-inner">
              <div className="col-md-12">
                <ProgressBar
                  current={this.state.currentIndex + 1}
                  total={this.state.quizData.length}
                />
                {/**question and answer block */}
                <div className="d-flex p-1 flex-column justify-content-center ">
                  <div id="question" className="text-center">
                    {/** Question / result block */}
                    {this.state.result.length ===
                    this.state.quizData.length ? null : (
                      <h1 style={{ marginTop: 10 }}>
                        Question <span>{this.state.currentQuestion._id}</span>
                      </h1>
                    )}

                    {this.state.result.length !== this.state.quizData.length
                      ? this.renderQuiz()
                      : this.renderResult()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="quiz-start-bottom" />
      </React.Fragment>
    );
  }
}

export default QuizStart;
