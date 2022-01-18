import { useRouter } from "next/router";
import requests from "../utils/requests";

function Nav() {
  const router = useRouter();
  //   const test = Object.entries(requests);
  //   console.log(test);
  //   console.log(test[0]);
  return (
    <nav className="relative">
      {/* gives us an array of the key and value, destructure the value to get
        the title and url */}
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
