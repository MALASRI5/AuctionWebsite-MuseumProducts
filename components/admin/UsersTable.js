import React from "react";

const UsersTable = () => {
  const users = [
    {
      firstName: "Malasri",
      lastName: "Saravanan",
      email: "malasri.saravanan32@gmail.com",
      phone: "09600983942",
      gender: "Female",
      dateOfBirth: "2025-04-15",
      interestedIn: "Artifacts",
      nationality: "Indian"
    },
    {
      firstName: "M.MARIYAM",
      lastName: "YAMINA",
      email: "mariyamyaminam.ug22.cs@francisxavier.ac.in",
      phone: "09629223321",
      gender: "Female",
      dateOfBirth: "2025-04-09",
      interestedIn: "Paintings",
      nationality: "Indian"
    },
    {
      firstName: "Yazhini",
      lastName: "Sri",
      email: "yazhinipandian.muzeolux@ac.in",
      phone: "1234567890",
      gender: "Female",
      dateOfBirth: "2025-04-02",
      interestedIn: "Paintings",
      nationality: "Other"
    },
    {
      firstName: "Ariahn",
      lastName: "Ariahn",
      email: "ariahn352@gmail.com",
      phone: "8056585395",
      gender: "Male",
      dateOfBirth: "2003-09-26",
      interestedIn: "Paintings",
      nationality: "Indian"
    },
    {
      firstName: "G",
      lastName: "Mathi",
      email: "mathig.ug22.cs@francisxavier.ac.in",
      phone: "8778299112",
      gender: "Female",
      dateOfBirth: "2005-09-21",
      interestedIn: "Paintings",
      nationality: "Indian"
    },
  ];

  return (
    <div className="users-table">
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Interested In</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.interestedIn}</td>
              <td>{user.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
