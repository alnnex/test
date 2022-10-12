import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Script src="/crisp.js" />
    </>
  );
}
