import React from "react";
import TableBody from "../TableBody";
import "./Table.css";

const Table = ({ headings, users, handleSort }) => {
  return (
    <table className="table mt-3">
      <thead>
        <tr>
          {headings.map((heading) => {
            return (
              <th
                className="heading"
                scope="col"
                onClick={() => {
                  handleSort(heading.toLowerCase());
                }}
              >
                {heading} <i class="fas fa-sort"></i>
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
