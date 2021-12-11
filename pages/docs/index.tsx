/*
 * @Author: your name
 * @Date: 2021-12-10 20:21:15
 * @LastEditTime: 2021-12-11 23:37:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\about\index.tsx
 */

import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Layout from "@/components/layout";
interface DocsProps {
  stars: number
}
const Docs: NextPage<DocsProps> = ({ stars }) => {
  return (
    <>
      <h1 className={styles.title}>这是一个文档</h1>

      <p>{stars}</p>
    </>
  );
};

Docs.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Docs;
