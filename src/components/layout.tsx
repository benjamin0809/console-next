/*
 * @Author: your name
 * @Date: 2021-12-10 21:14:55
 * @LastEditTime: 2021-12-11 22:56:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\components\layout.tsx
 */

import React from "react";
import Head from 'next/head'
import styles from "../styles/Home.module.css";
import styles1 from "./compnent.module.less"; 
import Footer from "./footer";
import Header from "./header";

import { Layout, Menu, } from 'antd';  

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
interface LayoutProps {
  title?: string
}
const BasicLayout: React.FC<LayoutProps> = (porps) => (
  <>
    <Head> 
      <link rel="icon" href="/favicon.ico" />
    </Head>
    { <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {
          porps.children
        }
      </main>

      <Footer />
    </div> }

{/* <Layout> 
<Header />
    <Content className={styles.main}> 
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
         
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        {
          porps.children
        }
        </Content>
      </Layout>
    </Content>
    <Footer /> 
  </Layout> */}

  </>
);
export default BasicLayout;
