import React from "react";
import TableBody from "./TableBody";

const Table = ({ headings, users }) => {
  return (
    <table className="table mt-3">
      <thead>
        <tr>
          {headings.map(heading => {
            return <th scope="col">{heading}</th>
          })}
        </tr>
      </thead>
      <TableBody users={users}/>
    </table>
  );
};

export default Table;
