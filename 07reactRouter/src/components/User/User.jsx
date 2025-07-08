import React from 'react';
import { useParams } from 'react-router-dom'; // ✅ Correct hook name

function User() {
  const { userid } = useParams(); // ✅ Correct usage
  return (
    <div>User: {userid}</div>
  );
}

export default User;
