import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Header from "../components/Header";
import Content from "../components/Content";

export default function Home() {
  return (
    <>
      <Header />
      <Content />
      <Script src="/crisp.js" />
    </>
  );
}
