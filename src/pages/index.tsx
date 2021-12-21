/*
 * @Author: your name
 * @Date: 2021-12-10 19:51:52
 * @LastEditTime: 2021-12-21 23:21:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\index.tsx
 */
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.less";
import Link from "next/link";
import { Fragment } from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Popochiu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h2 className={styles.title}>
        Welcome to <Link href="https://popochiu.com">Popochiu!</Link>
      </h2> */}
      <div   className={styles.carousel} >  
      <Carousel autoplay>
      <div className={styles.center}>
        <h3 >1</h3>
      </div>
      <div className={styles.center}>
        <h3 >2</h3>
      </div>
      <div className={styles.center}>
        <h3 >3</h3>
      </div>
      <div className={styles.center}>
        <h3 >4</h3>
      </div>
    </Carousel>
      </div>
   
      <div className={styles.grid}>
        <Link href="/docs">
          <a className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </Link>

        <Link href="/learn">
          <a className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </Link>

        <Link href="/about">
          <a className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </Link>

        <Link href="/about">
          <a className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
