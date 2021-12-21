/*
 * @Author: your name
 * @Date: 2021-12-10 20:21:15
 * @LastEditTime: 2021-12-11 22:23:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\about\index.tsx
 */

import type { NextPage } from "next";
import styles from "../../styles/Home.module.less"; 
import { Fragment } from "react";
import Head from "next/head";
const ContactUs: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Popochiu - 联系我们</title>
        <meta name="description" content="联系我们 POPOCHIU" /> 
      </Head>
      <h1 className={styles.title}>联系我们</h1>
    </Fragment>
  );
};

export default ContactUs;
