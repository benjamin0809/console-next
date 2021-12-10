/*
 * @Author: your name
 * @Date: 2021-12-10 19:51:52
 * @LastEditTime: 2021-12-10 21:05:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\index.tsx
 */
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '@/components/layout'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to <Link href="https://popochiu.com">Popochiu!</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <div className={styles.grid}>
        <Link href="/docs" >
          <a className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </Link>


        <Link href="/learn" >
          <a className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </Link>

        <Link href="/about" >
          <a
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </Link>

        <Link href="/about" >
          <a

            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default Home
