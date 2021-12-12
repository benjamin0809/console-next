/*
 * @Author: your name
 * @Date: 2021-12-10 20:21:15
 * @LastEditTime: 2021-12-10 21:04:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\about\index.tsx
 */

import type { NextPage } from "next";
import styles from "../../styles/Home.module.css"; 
import { Fragment } from "react";
import Head from "next/head";
const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Popochiu - 关于</title>
        <meta name="description" content="popochiu" /> 
      </Head>
      <h1 className={styles.title}>关于</h1>
    </Fragment>
  );
};

export default About;
