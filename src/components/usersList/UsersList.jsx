import { useState, useEffect } from "react";
import { NavLink } from "react-router";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      const url = "https://jsonplaceholder.typicode.com/users";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Users List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className=" justify-between flex flex-col bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-600">
                {user.name}
              </h2>
              <p className="text-gray-700">
                <strong>Address:</strong> {user.address.street},{" "}
                {user.address.suite}, {user.address.city}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{" "}
                <NavLink
                  to={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {user.website}
                </NavLink>
              </p>
              <p className="text-gray-700">
                <strong>Company:</strong> {user.company.name}
              </p>
            </div>

            <NavLink
              to={`/profile/${user.id}`}
              type="button"
              className="w-full mt-4 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Details
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;
