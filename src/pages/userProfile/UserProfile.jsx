import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <>
      <h2 className="text-2xl font-bold text-left ml-6">User Profile</h2>

      <div className="flex justify-center items-center flex-col mx-auto p-6">
        <div className=" h-full w-full bg-white shadow-md rounded-lg p-6">
          <img
            className="w-40 m-auto"
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            alt="profile-picture"
          />
          <h1 className="text-3xl font-bold text-center mb-4">{user.name}</h1>
          <p className="text-gray-700 text-center mb-2">
            Username: {user.username}
          </p>
          <p className="text-gray-700 text-center mb-2">Email: {user.email}</p>
          <p className="text-gray-700 text-center mb-2">Phone: {user.phone}</p>
          <p className="text-gray-700 text-center mb-2">
            Website:
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {user.website}
            </a>
          </p>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">Address</h2>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
            <p>
              Geo: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">Company</h2>
            <p>{user.company.name}</p>
            <p className="italic">{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
