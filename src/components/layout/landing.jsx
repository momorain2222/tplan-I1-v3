import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <CSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={800}
                  transitionLeaveTimeout={500}
                  transitionAppear
                  transitionAppearTimeout={500}
                >
                  <h1 id="mainTitle" className="col-sm-12 display-1 text-white">
                    Plan Future With Confidence
                  </h1>
                  <p className="display-5 text-white pt-20">
                    {" "}
                    Create a developer profile/portfolio, share posts and get
                    help from other developers
                  </p>
                  <hr />
                  <Link
                    to="/home"
                    className="btn btn-raised btn-lg btn-info mr-2 mt-5"
                  >
                    Start to Build your Future
                  </Link>
                </CSSTransitionGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
