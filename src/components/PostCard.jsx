import appwriteService from "../appwrite/config";
import HTMLReactParser from "html-react-parser/lib/index";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, content }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="dark:bg-gray-100 dark:text-gray-900 border-b-2 border-black">
        <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
          <div
            className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4 "
            style={{
              backgroundImage: `url(${appwriteService.getFilePreview(
                featuredImage
              )})`,

              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
            <div className="flex justify-start">
              <span className="px-2 py-1 text-xs rounded-full dark:bg-default-600 dark:text-gray-50">
                Label
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-left"> {title} </h1>
            <p className="flex-1 pt-2 text-left">
              {HTMLReactParser(content.substring(0, 300) + "...")}
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-default-600"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 dark:text-gray-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg> */}
                {/* <span className="self-center text-sm">by Leroy Jenkins</span> */}
              </div>
              {/* <span className="text-xs">3 min read</span> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
