/*
 * @Author: your name
 * @Date: 2021-12-10 21:15:01
 * @LastEditTime: 2021-12-10 21:42:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\components\header.tsx
 */
 
import styles from "../styles/Home.module.css";
const Header = () => (
  <footer className={styles.footer}>
    <a
      href="http://www.beian.miit.gov.cn/"
      target="_blank"
      rel="noopener noreferrer"
    >
      粤ICP备18036032号
    </a>
  </footer>
);
export default Header