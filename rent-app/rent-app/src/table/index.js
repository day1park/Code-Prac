import React from "react";
import Row from "./row";

const Table = ({ lease }) => {
  // if lease id is selected display lease info
  // let leaseInfo;
  // leaseInfo = lease.map(lease => {
  //   return <Row key={lease.id} lease={lease} />;
  // });
  console.log(lease);
  // lease.map(l => console.log(l));
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>{}</th>
        </tr>
      </thead>
      {/* <tbody>{leaseInfo}</tbody> */}
    </table>
  );
};

export default Table;
