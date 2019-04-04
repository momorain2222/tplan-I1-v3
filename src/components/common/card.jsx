import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";

const Card = ({ cards }) => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
          className="col-md-6"
        >
          {cards.map(card => (
            <div className="mb-5 " id={`${card.id}`}>
              <div className="card">
                <div className="card-body">
                  <div className="class-title">
                    <h1>{card.title} </h1>
                  </div>
                  <div className="card-text">
                    <p>{card.desc}</p>
                    <Link
                      to={`/${card.linkPath}`}
                      className={`btn btn-raised ${card.linkColor} text-white`}
                    >
                      {card.linkLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CSSTransitionGroup>
      </div>
    </div>
  );
};

export default Card;
