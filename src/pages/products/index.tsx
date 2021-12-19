/*
 * @Author: your name
 * @Date: 2021-12-10 20:21:15
 * @LastEditTime: 2021-12-14 00:06:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\about\index.tsx
 */
import { Avatar, Card, Col, Row } from "antd";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { Fragment } from "react";
import Head from "next/head";
import Image from 'next/image'
const { Meta } = Card;
const Products: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Popochiu - 产品中心</title>
        <meta name="description" content="popochiu" />
      </Head>
      <h1 className={styles.title}>产品中心</h1>

      <div className="site-card-wrapper">
        <Row >
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <Card
              style={{ width: 300,  marginBottom: 24 }}
              cover={
                <Image
                  alt="example"
                  // width
                  width={120}
                  height={520}
                  src="https://cdn.popochiu.com/u%3D1029292505%2C440879667%26fm%3D26%26fmt%3Dauto.webp"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col> 
          {/* <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <Card
              style={{ width: 300,  marginBottom: 24 }}
              cover={
                <img
                  alt="example"
                  src="https://image.popochiu.com/29019508-1-BbsImg_98433384102230_1566140660_s_1771827_o_w_2160_h_2880_60266.jpg"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card> 
          </Col> 
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <Card
              style={{ width: 300,  marginBottom: 24 }}
              cover={
                <img
                  alt="example"
                  src="https://image.popochiu.com/29019508-0-BbsImg_98433384102230_1566140657_s_755175_o_w_1932_h_2576_22383.jpg"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card> 
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <Card
              style={{ width: 300,  marginBottom: 24 }}
              cover={
                <img
                  alt="example"
                  src="  https://image.popochiu.com/41588083-1-BbsImg_2823450842349_1615471188_s_511156_o_w_814_h_1200_32206.jpg"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card> 
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <Card
              style={{ width: 300,  marginBottom: 24 }}
              cover={
                <img
                  alt="example"
                  src="      https://image.popochiu.com/41588083-7-thread_26332800_20210309222249_s_2369177_w_2160_h_2160_22076.jpg"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card> 
          </Col>

          <Col xs={20} sm={16} md={12} lg={8} xl={4}>
            <Card
              style={{ width: 300,  marginBottom: 24 }}
              cover={
                <img
                  alt="example"
                  src="https://image.popochiu.com/41599879-0-thread_138214618573606_20210310180000_s_569744_o_w_960_h_1280_57958.jpg"
                />
              }
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card> 
          </Col> */}




    
        </Row>

      
      </div>
    </Fragment>
  );
};

export default Products;
