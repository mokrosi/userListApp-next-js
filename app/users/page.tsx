import React from "react";
import UserCard from "./components/UserCard";

interface user {
  id: number;
  name: String;
  username: String;
  email: String;
}

const userPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: user[] = await res.json();
  return (
    <>
      <div className="ps-8 m-4">
        <h1 className="text-3xl">This is the User lest</h1>
      </div>
      <div className="grid grid-cols-3  ">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        ))}
      </div>
    </>
  );
};

export default userPage;
