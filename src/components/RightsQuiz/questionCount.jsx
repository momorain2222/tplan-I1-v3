import React from "react";
import PropTypes from "prop-types";

function QuestionCount(props) {
  return (
    <div>
      <span>{props.counter}</span> out of <span>{props.total}</span>
    </div>
    //might contain progress bar herer
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
