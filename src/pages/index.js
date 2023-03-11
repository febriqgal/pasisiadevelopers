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
        <div className="my-[120px]  px-32 grid lg:grid-cols-2 text-center lg:text-start lg:items-center">
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
