import Layout from "@/components/layout";
import { Loading } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import TypeIt from "typeit-react";
import DesignIcon from "../../public/design.svg";
import Febproject from "../../public/febproject.png";
import Header from "../../public/header.jpg";
import Logo from "../../public/pasisiadev.png";
import WebIcon from "../../public/pc.svg";
import Styles from "../styles/Home.module.css";
import MobileIcon from "../../public/mobile.svg";
export default function Home() {
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
  } else {
    return (
      <Layout>
        <div className="relative bg-indigo-800 min-h-screen shadow-2xl">
          <div className="absolute inset-0">
            <Image
              className="w-full h-full object-cover"
              src={Header}
              alt="#"
            />
            <div
              className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>

          <div className="relative top-36 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-14">
            <TypeIt className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, We Are Pasisia Developers!
            </TypeIt>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              Web App Developer, and Mobile App Developer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 px-16 text-center gap-5 my-14">
          <div
            className={`border-2 p-7 shadow-xl duration-700 z-50  rounded-lg  flex flex-col justify-center items-center`}
          >
            <Image height={50} src={WebIcon} alt={"#"} />
            <h1>Web App Developer</h1>
          </div>
          <div className="border-2 p-7 shadow-xl duration-700 z-50  rounded-lg  flex flex-col justify-center items-center">
            <Image height={50} src={MobileIcon} alt={"#"} />
            <h1>Mobile App Developer</h1>
          </div>
          <div className="border-2 p-7 shadow-xl duration-700 z-50  rounded-lg  flex flex-col justify-center items-center">
            <Image height={50} src={DesignIcon} alt={"#"} />
            <h1>Design Modern</h1>
          </div>
        </div>
        <Marquee
          className="mb-16"
          play
          speed={50}
          style={{ alignItems: "center", gap: 4 }}
        >
          <div className="flex gap-10 ">
            <Image height={40} src={Logo} alt="#" />
            <Image height={40} src={Febproject} alt="#" />
            <Image height={40} src={Logo} alt="#" />
            <Image height={40} src={Febproject} alt="#" />
            <Image height={40} src={Logo} alt="#" />
            <Image height={40} src={Febproject} alt="#" />
            <Image height={40} src={Logo} alt="#" />
            <Image height={40} src={Febproject} alt="#" />
            <Image height={40} src={Logo} alt="#" />
            <Image className="mr-10" height={40} src={Febproject} alt="#" />
          </div>
        </Marquee>
      </Layout>
    );
  }
}
