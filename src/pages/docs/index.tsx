/*
 * @Author: your name
 * @Date: 2021-12-10 20:21:15
 * @LastEditTime: 2021-12-23 23:37:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\about\index.tsx
 */

import type { NextPage } from "next";
import styles from "../../styles/Home.module.less";
import Layout from "src/components/layout";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { Avatar, Card, Col, Row, Image } from "antd";
import Meta from "antd/lib/card/Meta"; 
import BenImage from "@/components/ben-image";
interface DocsProps {
  article: ArticleDto[];
  images: ImageDto[];
  hasMore: boolean
  page: number
  pageSize: number
}


type ArticleDto = {
  id: number;
  articleid: string;
  title: string;
  avatar: string;
  username: string;
  images: string;
  sourceUrl: string;
  createTime?: any;
  articleTime?: any;
  modifiedTime?: any;
  imageArr?: string[]
}

type ImageDto = {
  key: string
  url: string
}

const ImageComp: React.FC<ImageDto> = (props) => {
  return (<Col xs={20} sm={16} md={12} lg={8} xl={4}>
    <Card
      style={{ width: 300,  marginBottom: 24 }}
      cover={
        <img
          alt="example"
          // width
          width={120}
          height={520}
          src={props.url}
        />
      }
    >
      {/* <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Card title"
        description="This is the description"
      /> */}
    </Card>
  </Col>  )
}
const Docs: NextPage<DocsProps> = (props) => { 
  const [article, setArticle] = useState(props.article)
  const [hasMore, setHasMore] = useState(props.hasMore)
  const [page, setPage] = useState(props.page) 
  return (
    <Fragment>
      <Head>
        <title>Popochiu - 文档</title>
        <meta name="description" content="popochiu docs document" />
      </Head>
      <h1 className={styles.title}>这是一个文档</h1>  

      <Row >
      {
            article.map((item) => {
              return (<BenImage key={item.articleid} images={item.imageArr!}/>)
            })
          } 
        
        </Row>
      <div>{props.images.length}</div>
      <div>{article.length}</div>

      {
        hasMore && (<div onClick={async () => {
          setPage(page + props.pageSize) 
          const {article: art, hasMore}=  await getArticle(page + props.pageSize)
          setHasMore(hasMore)
          const newData = article.concat(art)
          console.log(newData)
          setArticle(newData)
        }}>加载更多</div>)
      }
      
    </Fragment>
  );
};

const getArticle = async (page = 1, pageSize: number = 30) => {
  const res = await fetch(`https://api.popochiu.com/hupu/page?page=${page}&pageSize=${pageSize}&name`);
  const { data } = await res.json();
  const acticles = new Set()
  const article: ArticleDto[]  = data.data.reduce((acc:  ArticleDto[] , cur: ArticleDto) => {
    if(!acticles.has(cur.articleid)) {
      acticles.add(cur.articleid)
      const images = cur.images.split(',')
      cur.imageArr = images
      acc.push(cur)
      return acc
    } else {
      return acc
    }
  },[])  

  const images = article.reduce((acc: ImageDto[], cur: ArticleDto) => {
    const imgs = cur?.images.split(',')
    if(imgs.length > 0) {
      imgs.forEach((item, index) => {
        acc.push({
          key : cur.articleid + '-' + index,
          url: item
        }) 
      })
      return acc
    } else {
      return acc
    } 
  }, [])
  return { article, images, page, pageSize, hasMore: page + pageSize < data.total }; 
}
Docs.getInitialProps = async (ctx) => {
  const page = 1
  const pageSize = 30
  const data = await getArticle() 
  return data;
};

export default Docs;
