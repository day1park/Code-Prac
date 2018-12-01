import React from "react";
// import Row from "./row";

const Table = ({ lease }) => {
  const { start_date, end_date, frequency, rent } = lease;
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Days</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{start_date}</td>
          <td>{end_date}</td>
          <td>{frequency}</td>
          <td>{rent}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
