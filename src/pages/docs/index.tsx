/*
 * @Author: your name
 * @Date: 2021-12-10 20:21:15
 * @LastEditTime: 2021-12-21 23:25:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\about\index.tsx
 */

import type { NextPage } from "next";
import styles from "../../styles/Home.module.less";
import Layout from "src/components/layout";
import Head from "next/head";
import { Fragment, useState } from "react";
import { Avatar, Card, Col, Row, Image } from "antd";
import Meta from "antd/lib/card/Meta"; 
import BenImage from "@/components/ben-image";
interface DocsProps {
  article: ArticleDto[];
  images: ImageDto[];
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
  return (
    <Fragment>
      <Head>
        <title>Popochiu - 文档</title>
        <meta name="description" content="popochiu docs document" />
      </Head>
      <h1 className={styles.title}>这是一个文档</h1>  

      <Row >
      {
            props.article.map((item) => {
              return (<BenImage key={item.articleid} images={item.imageArr!}/>)
            })
          } 
        
        </Row>
      <div>{props.images.length}</div>
      <div>{props.article.length}</div>
    </Fragment>
  );
};

Docs.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.popochiu.com/hupu");
  const json = await res.json();
  const acticles = new Set()
  const article: ArticleDto[]  = json.reduce((acc:  ArticleDto[] , cur: ArticleDto) => {
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
  return { article, images };
};

export default Docs;
