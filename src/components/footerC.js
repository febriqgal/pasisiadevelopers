import Link from "next/link";
import { useRouter } from "next/router";
/* This example requires Tailwind CSS v2.0+ */

export default function FooterC() {
  const route = useRouter();
  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
          {/* ig */}
          <Link
            target={"_blank"}
            href={"https://www.instagram.com/febriqgal_/"}
          >
            <svg
              className=" fill-slate-50  hover:-translate-y-2 duration-700 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"
              />
              <circle cx="18" cy="6" r="1" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              />
            </svg>
          </Link>
          {/* Linkedin */}
          <Link
            target={"_blank"}
            href={"https://www.instagram.com/febriqgal_/"}
          >
            <svg
              className=" fill-slate-50  hover:-translate-y-2 duration-700 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="2" />
              <path d="M2 8.5H6V22H2V8.5Z" />
              <g opacity="0.4">
                <path d="M13 8.5H9V15V22H13V15C13 13.8954 13.8954 13 15 13C16.1046 13 17 13.8954 17 15V22H21V15C21 11.6863 18.3137 9 15 9C14.2987 9 13.6256 9.12031 13 9.34141V8.5Z" />
              </g>
            </svg>
          </Link>
          {/* Twitter */}{" "}
          <Link
            target={"_blank"}
            href={"https://www.instagram.com/febriqgal_/"}
          >
            <svg
              className=" fill-slate-50  hover:-translate-y-2 duration-700 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M15.2861 4C13.1822 4 11.4767 5.79086 11.4767 8C11.4767 8.33382 11.5157 8.65809 11.589 8.96808C9.56611 8.96808 6.51914 8.55908 3.97444 6.00961C3.63605 5.67059 3.01208 5.89726 3.03556 6.37568C3.41268 14.0627 6.70477 16.3049 8.4001 16.4444C7.30535 17.5257 5.7151 18.3791 4.11489 18.7622C3.69256 18.8633 3.58824 19.3256 4.0012 19.4599C5.14623 19.8323 6.78516 19.9758 7.66735 20C13.9082 20 18.9806 14.7471 19.0935 8.22229C19.9129 7.68945 20.4377 6.5325 20.7326 5.71291C20.8044 5.5133 20.4773 5.28073 20.2815 5.36226C19.6694 5.61708 18.8923 5.67749 18.2304 5.46181C17.5318 4.56927 16.4722 4 15.2861 4Z"
              />
            </svg>
          </Link>
          {/* Youtube */}{" "}
          <Link
            target={"_blank"}
            href={"https://www.instagram.com/febriqgal_/"}
          >
            <svg
              className=" fill-slate-50  hover:-translate-y-2 duration-700 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M2 7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7Z"
              />
              <path d="M10.4472 8.72356L15.2111 11.1055C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2763C9.78231 15.6088 9 15.1253 9 14.3819V9.61799C9 8.87461 9.78231 8.39111 10.4472 8.72356Z" />
            </svg>
          </Link>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 - Febriqgal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
