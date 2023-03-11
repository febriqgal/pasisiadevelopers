import Layout from "@/components/layout";
import { Inter } from "next/font/google";
import Styles from "../styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <Layout>
      <div className={`${Styles.main}`}>
        <h1>Febriqgal</h1>
      </div>
      <div className={`${Styles.main}`}></div>
      <div className={`${Styles.main}`}></div>
      <div className={`${Styles.main}`}></div>
    </Layout>
  );
}
