/*
 * @Author: your name
 * @Date: 2021-12-10 21:21:52
 * @LastEditTime: 2021-12-10 21:42:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\components\footer.tsx
 */
import styles from "../styles/Home.module.css";
import Link from 'next/link'
const Footer = () => (
  <footer className={styles.footer}>
    <Link href="http://www.beian.miit.gov.cn/" >
      <a 
        target="_blank"
        rel="noopener noreferrer"
      >
        粤ICP备18036032号 @Copyright com.popochiu
      </a>
    </Link>
  </footer>
);
export default Footer