import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { Table } from "./Table";
import { Link, useRouteMatch } from "react-router-dom";
export default function Customers() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [customers, setCustomers] = useState([]);

  let match = useRouteMatch();

  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?results=20&gender=female&inc=name,email,cell,picture"
    )
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setCustomers(result.results);
      });
  }, []);

  function NewCustomerButton() {
    return (
      <div>
        <Link
          to={`${match.url}/new`}
          className="items-center px-4 py-3 bg-blue-700 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
          </svg>

          <span class="ml-2">New Customer</span>
        </Link>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h1 className="text-3xl font-bold mb-8">Customers</h1>
        <div className="flex items-center justify-between">
          <NewCustomerButton />
          <SearchBar />
        </div>

        <Table customers={customers} />
      </>
    );
  }
}
