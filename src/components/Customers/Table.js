import { TableItem } from "./TableItem";
export function Table({ customers }) {
  return (
    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden my-4">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Email
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Last Appt
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item) => (
            <TableItem item={item} />
          ))}
        </tbody>
      </table>
      <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
        <span className="text-xs xs:text-sm text-gray-900">
          Showing 1 to 4 of 50 Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0 border rounded border-gray-300">
          <button className="text-sm bg-gray-200 border-r border-gray-300 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 ">
            Prev
          </button>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 ">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
