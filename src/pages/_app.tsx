/*
 * @Author: your name
 * @Date: 2021-12-10 19:51:52
 * @LastEditTime: 2021-12-11 22:00:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\_app.tsx
 */
import "../styles/globals.css";  
import 'antd/dist/antd.css' 
import Layout from "../components/layout";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router'
import 'nprogress/nprogress.css'
import Nprogress from 'nprogress'
import react, { useEffect } from 'react' 

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
    
  console.log(router)
  useEffect(() => {
    Nprogress.configure({showSpinner: false})
    router.events.on('routeChangeStart', () => {
      Nprogress.start()
    })

    router.events.on('routeChangeComplete', () => {
      Nprogress.done()
    })

    router.events.on('routeChangeError', () => {
      Nprogress.done()
    })
  }, [])

  console.log({ pageProps })

  const getlayoutComponent = () => {
    return  (<Layout>
    <Component {...pageProps} />
  </Layout>)
  }

  const getComponent = () => {
    return  (<Component {...pageProps} />)
  }

  return (getlayoutComponent()
  );
}

export default MyApp;
