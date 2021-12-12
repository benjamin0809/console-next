/*
 * @Author: your name
 * @Date: 2021-12-10 20:21:15
 * @LastEditTime: 2021-12-12 14:59:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\about\index.tsx
 */
import { Avatar, Card, Col, Row } from "antd";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { Fragment } from "react";
import Head from "next/head";
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
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
        </Row>
      </div>
    </Fragment>
  );
};

export default Products;
