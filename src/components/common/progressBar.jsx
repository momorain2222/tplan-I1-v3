import React from "react";
import { Progress } from "semantic-ui-react";
import QuestionCount from "../RightsQuiz/questionCount";

const ProgressBar = ({ current, total }) => (
  <Progress
    value={current}
    className="active"
    warning
    total={total}
    progress="ratio"
    label="1"
    active
  />
);

export default ProgressBar;
