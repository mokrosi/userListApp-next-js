"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";


const Nav = () => {
    const [page, setPage] = useState("users");

  return (
    <div className="flex gap-4 justify-center items-center">
      <Link
        href="/users"
        className={`px-4 py-2 ${
          page == "users" ? "bg-blue-600" : "bg-gray-600"
        }  text-white rounded`}
        onClick={() => setPage("users")}
      >
        Users
      </Link>
      <Link
        href="/About"
        className={`px-4 py-2 ${
          page == "about" ? "bg-blue-600" : "bg-gray-600"
        }  text-white rounded`}
        onClick={() => setPage("about")}
      >
        About
      </Link>
    </div>
  );
};

export default Nav;
