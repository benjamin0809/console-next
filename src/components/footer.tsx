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
  links: [{name: '文档', url: '/docs'},{name: '学习', url: '/learn'},{name: '案例', url: '/example'},{name: '博客', url: '/blog'},{name: '分析', url: '/analysis'},  {name: '直播', url: '/live'}  ]
},{
  category: '更多',
  links: [{name: '商务', url: '/bussiness'},{name: '联系', url: '/contact'}, {name: 'Releases', url: '/release'} ]
},{
  category: '关于',
  links: [{name: 'Github', url: '/github'},{name: 'Open Source Software', url: '/github'} ]
},{
  category: '法律',
  links: [{name: '隐私政策', url: '/private'} ]
}]
const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      {
        links.map(item => {
          return <div key={`${item.category} + o`} className={styles.category}>
          <h2 key={item.category}>{item.category}</h2>
          <div className={styles.link}>
            {
              item.links.map(i => <Link href={`${i.url}`} key={i.name}>{i.name}</Link>)
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