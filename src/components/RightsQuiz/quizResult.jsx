import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import RightsCheckList from "./rightsCheckList";

const QuizStart = ({ result, programs, history }) => {
  return (
    <div className="container pb-5">
      <div className="d-flex flex-column justify-content-around">
        <div className="card">
          <div className="p-4 gradient-card-header cloudy-knoxville-gradient text-dark text-left">
            <h1> You can consider these programs.... </h1>
            <p className="mb-0 pb-3 pt-2">
              check out the link to find more information about each rights you
              can get
            </p>

            <div className="card-body card-body-cascade text-center mt-3">
              {/**<h5>You got a {[...result]} </h5> */}
              <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={500}
                transitionAppear
                transitionAppearTimeout={500}
              >
                <RightsCheckList programs={programs} />
              </CSSTransitionGroup>

              <button
                type="button"
                className="btn btn-info col-6-sm mt-5"
                style={{ height: 80 }}
                onClick={() => history.replace("/rightsQuiz")}
              >
                <div className="d-flex flex-row p-2 justify-content-between">
                  <span> Go Back </span>
                  <i className="fas fa-arrow-right" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
