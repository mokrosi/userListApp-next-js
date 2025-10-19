import React from "react";
import UserCard from "./components/UserCard";

interface user {
  id: number;
  name: String;
  username: String;
  email: String;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: user[] = await res.json();
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">User List</h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
