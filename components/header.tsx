/*
 * @Author: your name
 * @Date: 2021-12-10 21:15:01
 * @LastEditTime: 2021-12-10 21:42:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\components\header.tsx
 */
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import Image from 'next/image'
const Header = () => (
  <header className={styles.header}>
    <Link href="/" >
      <a
        className={styles.logo} 
        rel="noopener noreferrer"
      > 
        <Image src="/logo.png" alt="Popochiu Logo" height={48} width={48} />
        <span>PopoChiu</span>
      </a>
    </Link>
  </header>
);
export default Header