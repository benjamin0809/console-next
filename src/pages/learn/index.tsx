/*
 * @Author: your name
 * @Date: 2021-12-10 20:21:15
 * @LastEditTime: 2021-12-12 00:47:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\about\index.tsx
 */
 
import type { NextPage } from 'next' 
import styles from '../../styles/Home.module.less'
import Layout from 'src/components/layout'
import { Fragment } from 'react'
import Head from 'next/head'
const About: NextPage = () => {
  return (
    <Fragment>
    <Head>
      <title>Popochiu - Learn</title>
      <meta name="description" content="popochiu learn learning" />
    </Head>
    <h1 className={styles.title}>Learn</h1>
  </Fragment>
     
  )
}

export default About
