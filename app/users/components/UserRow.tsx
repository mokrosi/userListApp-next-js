import React from "react";

const UserRow = ({
  name,
  username,
  email,
}: {
  name: String;
  username: String;
  email: String;
}) => {
  return (
    <div
      className="w-60 border-2 border-amber-50 p-4 m-2 rounded-2xl
         bg-stone-500 "
    >
      <p>{name}</p>
      <p>{username}</p>
      <h3>{email}</h3>
    </div>
  );
};

export default UserRow;
