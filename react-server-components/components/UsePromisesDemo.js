"use client";

import { use, useState } from "react";

export default function UsePromiseDemo({ usersPromise }) {
  const [counter, setCounter] = useState(0);
  const users = use(usersPromise);

  return (
    <div className="rsc">
      <h2>RSC with Data Fetching</h2>
      <p>
        Uses <strong>async / await</strong> for data fetching.
      </p>
      <p>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increment
        </button>
        <span>{counter}</span>
      </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.title})
          </li>
        ))}
      </ul>
    </div>
  );
}
