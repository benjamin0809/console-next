/*
 * @Author: your name
 * @Date: 2021-12-10 21:21:52
 * @LastEditTime: 2021-12-12 14:34:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\components\footer.tsx
 */
import styles from "./compnent.module.less";
import Link from 'next/link'

const links = [{
  category: '资源',
  links: ['文档','学习','案例','博客', '分析','配置', '直播' ]
},{
  category: '更多',
  links: ['商务','联系', 'Releases' ]
},{
  category: '关于',
  links: ['Github','Open Source Software' ]
},{
  category: '法律',
  links: ['隐私政策' ]
}]
const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      {
        links.map(item => {
          return <div key={`${item.category} + o`} className={styles.category}>
          <h4 key={item.category}>{item.category}</h4>
          <div className={styles.link}>
            {
              item.links.map(i => <Link href={`#${i}`} key={i}>{i}</Link>)
            }
          </div>
          </div>
        })
      }
    </div>
    <Link href="http://www.beian.miit.gov.cn/" >
      <a 
      className={styles.beian}
        target="_blank"
        rel="noopener noreferrer"
      >
        粤ICP备18036032号
      </a>
    </Link>
    <p  className={styles.copyright}> Copyright ©2021 Benjamin Chiu, Inc. All rights reserved.</p>
  </footer>
);
export default Footer