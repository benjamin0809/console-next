/*
 * @Author: your name
 * @Date: 2021-12-10 20:21:15
 * @LastEditTime: 2021-12-12 00:46:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\about\index.tsx
 */

import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Layout from "src/components/layout";
import Head from "next/head";
import { Fragment } from "react";
interface DocsProps {
  stars: number;
}
const Docs: NextPage<DocsProps> = ({ stars }) => {
  return (
    <Fragment>
      <Head>
        <title>Popochiu - 文档</title>
        <meta name="description" content="popochiu docs document" />
      </Head>
      <h1 className={styles.title}>这是一个文档</h1>
    </Fragment>
  );
};

Docs.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Docs;
