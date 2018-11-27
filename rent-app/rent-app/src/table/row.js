import React from "react";

const Row = ({ lease }) => {
  const { start_date, end_date, frequency, rent } = lease;

  return (
    <tr>
      <td>{start_date} 1</td>
      <td>{end_date} 1</td>
      <td>{frequency} 1</td>
      <td>{rent} 1</td>
    </tr>
  );
};

export default Row;
