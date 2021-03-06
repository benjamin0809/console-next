/*
 * @Author: your name
 * @Date: 2021-12-10 21:15:01
 * @LastEditTime: 2021-12-12 14:06:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\components\header.tsx
 */
import Link from "next/link";
import styles from "./compnent.module.less";
import Image from "next/image";
import { Button } from "antd";
import { Menu } from "antd";

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.logo} rel="noopener noreferrer">
        <Image src="/logo.png" alt="Popochiu Logo" height={36} width={36} />
        <span className={styles.siteName}>PopoChiu</span>
        </a>
    </Link>
        {/* <Button type="primary">Primary  </Button> */} 
        <div className={styles.nav}>
          <Menu mode="horizontal" triggerSubMenuAction="click">
          <Menu.Item key="5">
              <a href="//console.popochiu.com" target={'_blank'} >控制台</a>
            </Menu.Item>
          <Menu.Item key="4">
              <a href="//shop.popochiu.com" target="_blank">商城</a>
            </Menu.Item>
            <Menu.Item key="1">
              <Link href="/about">关于</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/products">产品</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/contact-us">联系我们</Link>
            </Menu.Item>
          </Menu>
        </div>
    
  </header>
);
export default Header;
