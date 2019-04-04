import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";

const Card = ({ cards }) => {
  return (
    <div className="container">
      <div className="mb-5 p-4 align-items-end">
        {cards.map(card => (
          <div className="mb-5 p-2 col-md" id={`${card.id}`}>
            <div className="card">
              <span class=" conorIcon fa-stack fa-3x">
                <i class="fas fa-circle fa-stack-2x" />
                <strong class="fa-stack-1x calendar-text text-white">
                  {card.id}
                </strong>
              </span>
              <div className="card-body">
                <div className="class-title">
                  <h1 className="display-4">{card.title} </h1>
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
      </div>
    </div>
  );
};

export default Card;
