import Layout from "@/components/layout";
import { Loading } from "@nextui-org/react";
import { Inter } from "next/font/google";
import Styles from "../styles/Home.module.css";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Logo from "../../public/pasisiadev.png";
import Header from "../../public/header.jpg";
import TypeIt from "typeit-react";
import Febproject from "../../public/febproject.png";
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
        <div className="min-h-screen  px-32 grid lg:grid-cols-2 text-center lg:text-start lg:items-center">
          <TypeIt className="font-bold lg:text-2xl text-[#626468]">
            Hi, We Are Pasisia Developers
          </TypeIt>
          <div className="overflow-clip h-36 lg:h-72 aspect-video rounded-lg border-2 shadow-2xl">
            <Image
              className="hover:scale-110 duration-700 hover:rotate-6"
              src={Header}
              alt="#"
            />
          </div>
        </div>

        <div className="grid  grid-cols-1 lg:grid-cols-3 px-16 text-center gap-5 mb-14">
          <div
            className={`border-2 p-7 shadow-xl duration-700 z-50 hover:bg-slate-500 hover:text-white rounded-lg hover:-translate-y-2`}
          >
            Eu culpa duis incididunt cillum amet.
          </div>
          <div className="border-2 p-7 shadow-xl duration-700 z-50 hover:bg-slate-500 hover:text-white rounded-lg hover:-translate-y-2">
            Lorem velit excepteur ut anim dolor amet esse qui pariatur irure
            aliquip mollit laboris eiusmod.
          </div>
          <div className="border-2 p-7 shadow-xl duration-700 z-50 hover:bg-slate-500 hover:text-white rounded-lg hover:-translate-y-2">
            Est fugiat cillum cillum ex exercitation aliqua consectetur.
          </div>
        </div>
        <Marquee
          className="mb-16"
          play
          speed={50}
          style={{ alignItems: "center", gap: 4 }}
        >
          <div className="flex gap-10">
            <Image height={50} src={Logo} alt={"#"} />
            <Image height={50} src={Febproject} alt={"#"} />
            <Image height={50} src={Logo} alt={"#"} />
            <Image height={50} src={Febproject} alt={"#"} />
            <Image height={50} src={Logo} alt={"#"} />
            <Image height={50} src={Febproject} alt={"#"} />
            <Image height={50} src={Logo} alt={"#"} />
            <Image height={50} src={Febproject} alt={"#"} />
            <Image height={50} src={Logo} alt={"#"} />
            <Image height={50} src={Febproject} alt={"#"} />
            <Image height={50} src={Logo} alt={"#"} />
            <Image className="mr-10" height={50} src={Febproject} alt={"#"} />
          </div>
        </Marquee>
      </Layout>
    );
  }
}
