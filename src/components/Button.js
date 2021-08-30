import { Link } from "react-router-dom";
// export default function Button({ link, color, string }) {
//   return (
//     <div>
//       <button
//         className={`${color} bg-grey-500 items-center px-4 py-3 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex`}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
//         </svg>

//         <span className="ml-2 text-red-200">{string}</span>
//       </button>
//     </div>
//   );
// }

export default function Button({ color, title, children }) {
  return (
    <button
      className={`${color} items-center items-middle px-4 py-3 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform inline-flex`}
    >
      {children}
      <span className={children && "ml-2"}>{title}</span>
    </button>
  );
}
