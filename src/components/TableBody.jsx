import React from "react";

const TableBody = ({ users }) => {

  const usersExist = users[0] && users[0].name;

  const displayDate = (date) => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const finishedDate = [month, day, year].join("-");
    return finishedDate;     
  }

  return (
    <tbody>
      {usersExist ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
                  src={picture.medium}
                  alt={`${name.first} ${name.last}'s profile`}
                  className="img-responsive rounded-pill shadow"
                />
              </td>
              <td data-th="Name" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="Email" className="align-middle">
                <a href={`mailto: ${email}`} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="DOB" className="align-middle">
                {displayDate(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <div className="p-1"><h3>Loading Users...</h3></div>
      )}
    </tbody>
  );
};

export default TableBody;
