import React from "react";

const UserCard = ({
  name,
  username,
  email,
}: {
  name: String;
  username: String;
  email: String;
}) => {
  return (
    <div className="w-72 p-6 m-4 rounded-lg bg-white shadow-lg   border border-gray-200">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-indigo-600">{name}</h2>
          <p className="text-gray-600 flex items-center">
            <span className="text-sm">@{username}</span>
          </p>
          <p className="text-gray-500 text-sm flex items-center">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
