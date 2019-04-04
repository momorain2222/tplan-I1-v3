import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Banner from "../common/banner";
import Card from "../common/card";

class Landing extends Component {
  imgIds = [1, 2, 3];

  cards = [
    {
      id: 1,
      title: "Know Rights",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, quos.",
      linkPath: "/rightsQuiz",
      linkLabel: "Explore More",
      linkColor: "aqua-gradient"
    },
    {
      id: 2,
      title: "Explore Dream Occupation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, quos.",
      linkPath: "/occupation",
      linkLabel: "Explore More",
      linkColor: "purple-gradient"
    },
    {
      id: 3,
      title: "Find Suitable Courses",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, quos.",
      linkPath: "/courses",
      linkLabel: "Explore More",
      linkColor: "peach-gradient "
    },
    {
      id: 4,
      title: "Find Affordable Housing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, quos.",
      linkPath: "/housing",
      linkLabel: "Explore More",
      linkColor: "mean-fruit-gradient"
    }
  ];

  render() {
    return (
      <React.Fragment>
        <div className="landing">
          <Banner imgIds={this.imgIds} />
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={500}
                    transitionAppear
                    transitionAppearTimeout={500}
                  >
                    <h1
                      id="homeTitle"
                      className="col-md-12 display-1 text-white"
                    >
                      <strong>Plan Future With Confidence</strong>
                    </h1>

                    <div className="d-flex p-2 justify-content-center mt-3 mb-5">
                      <button className="btn btn-raised btn-lg btn-info d-flex flex-row justify-content-center ">
                        <span className="mr-3"> Start To Build Your Plan </span>
                        <i className="fas fa-arrow-down" />
                      </button>
                    </div>
                  </CSSTransitionGroup>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="row">
            <div className="col ">
              <div className="container pt-5 ">
                <div className="d-flex flex-column">
                  <h1>Are You Ready To Get Started?</h1>
                  <p className="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est eaque magni sit dolores. Nisi, dolor nam modi
                    perspiciatis consequatur soluta.
                  </p>

                  {/* Square check list*/}
                  <div className="d-flex">
                    <div className="p-4 align-self-center">
                      <i className="fas fa-check fa-2x" />
                    </div>
                    <div className="p-4 align-self-end lead">
                      Lorem ipsum dolor sit, amet consectetur adipisicing
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="p-4 align-self-center">
                      <i className="fas fa-check fa-2x " />
                    </div>
                    <div className="p-4 align-self-end lead">
                      Lorem ipsum dolor sit, amet consectetur adipisicing
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="p-4 align-self-center">
                      <i className="fas fa-check fa-2x" />
                    </div>
                    <div className="p-4 align-self-end lead">
                      Lorem ipsum dolor sit, amet consectetur adipisicing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card cards={this.cards} />
      </React.Fragment>
    );
  }
}

export default Landing;
