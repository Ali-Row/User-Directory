import React from "react";
import TableBody from "../TableBody/TableBody";
import "./Table.css";

const Table = ({ headings, users, handleSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headings.map(({ headingName, width }) => {
            return (
              <th
                className="heading p-3"
                scope="col"
                style={{ width }}
                onClick={() => {
                  handleSort(headingName.toLowerCase());
                }}
              >
                {headingName} {headingName === "Name" ? <i class="fas fa-sort"></i> : ''}
              </th>
            );
          })}
        </tr>
      </thead>
      <TableBody users={users} />
    </table>
  );
};

export default Table;
