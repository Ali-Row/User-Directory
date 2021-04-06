import React from "react";

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
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
