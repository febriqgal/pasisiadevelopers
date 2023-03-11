/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import React, { useState } from "react";
import Styles from "../../styles/Home.module.css";
import { Card, Col, Row, Text, Button, Loading } from "@nextui-org/react";
import Febriqgal from "../../../public/febriqgal.jpg";
import Image from "next/image";
import Link from "next/link";
import Default from "../../../public/default.png";
export default function Team() {
  const people = [
    {
      name: "Febriqgal Purnama, S.Kom.",
      title: "Software Engineer",
      role: "Admin",
      ig: "https://www.instagram.com/febriqgal_/",
      tw: "https://twitter.com/febriqgal_",
      linkedin: "https://www.linkedin.com/in/febriqgal/",
      imageUrl: Febriqgal,
    },
    {
      name: "-",
      title: "-",
      role: "-",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Default,
    },
    {
      name: "-",
      title: "-",
      role: "-",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Default,
    },
    {
      name: "-",
      title: "-",
      role: "-",
      ig: "#",
      tw: "#",
      linkedin: "#",
      imageUrl: Default,
    },

    // More people...
  ];
  const [isLoading, setIsloading] = useState(true);
  setTimeout(() => {
    setIsloading(false);
  }, 1000);
  if (isLoading) {
    return (
      <Layout>
        <div className={Styles.center}>
          <Loading />
        </div>
      </Layout>
    );
  }
  return (
    <Layout title={"Team - "}>
      <ul
        role="list"
        // 76 height nav
        className={`my-[92px] px-16  grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      >
        {people.map((e, i) => (
          <li
            key={i}
            className="col-span-1 flex flex-col shadow-2xl text-center bg-white rounded-lg  divide-y divide-gray-200 border"
          >
            <div className="flex-1 flex flex-col p-8">
              <div className="overflow-clip w-40 aspect-square flex-shrink-0 mx-auto rounded-full border-4 shadow-2xl">
                <Image
                  className="hover:scale-110 duration-700"
                  src={e.imageUrl}
                  alt="#"
                />
              </div>
              <h3 className="mt-6 text-gray-900 text-sm font-bold">{e.name}</h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-gray-500 text-sm">{e.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {e.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                {/* ig */}
                <div className="w-0 flex-1 flex">
                  <Link
                    target={"_blank"}
                    href={e.ig}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <svg
                      className=" fill-slate-500 hover:fill-slate-900 hover:-translate-y-2 duration-700 h-6"
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
                </div>
                {/* Twitter */}
                <div className="-ml-px w-0 flex-1 flex">
                  <Link
                    target={"_blank"}
                    href={e.tw}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <svg
                      className=" fill-slate-500 hover:fill-slate-900 hover:-translate-y-2 duration-700 h-6"
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
                </div>
                {/* Linkendin */}
                <div className="-ml-px w-0 flex-1 flex items-center justify-center">
                  <Link target={"_blank"} href={e.linkedin}>
                    <svg
                      className=" fill-slate-500 hover:fill-slate-900 hover:-translate-y-2 duration-700 h-6"
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
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

/* This example requires Tailwind CSS v2.0+ */
