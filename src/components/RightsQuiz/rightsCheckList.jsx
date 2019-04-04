import React, { Component } from "react";
import Check from "../common/check";

const RightsCheckList = ({ programs }) => {
  return (
    <table className="  table ui selectable  very basic  ">
      <thead>
        <tr>
          <th>Eligible</th>
          <th>Program Name</th>
          <th>Official URL</th>
        </tr>
      </thead>

      <tbody>
        {programs.map(program => (
          <tr key={program._id}>
            <td className={program.isChecked ? "positive" : "negative"}>
              <Check isChecked={program.isChecked} />
            </td>

            <td
              className="h5"
              className={program.isChecked ? "positive" : "negative"}
            >
              {program.name}
            </td>
            <td
              className="h5"
              className={program.isChecked ? "positive" : "negative"}
            >
              {program.url}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RightsCheckList;
