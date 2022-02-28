/*
 * @Author: your name
 * @Date: 2021-12-10 20:21:15
 * @LastEditTime: 2021-12-21 23:09:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\pages\about\index.tsx
 */

import type { NextPage } from "next";
import styles from "../../styles/Home.module.less";
import style from "./index.module.less";
import { Fragment } from "react";
import { Col, Row, Card, Divider, List, Typography } from "antd";
import Head from "next/head";
const Analysis: NextPage = () => {
  const list = Array.from(
    {
      length: 100,
    },
    (v, k) => {
      return { id: k, name: "item " + k };
    }
  );
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  return (
    <Fragment>
      <Head>
        <title>Popochiu - 分析</title>
        <meta name="description" content="popochiu" />
      </Head>
      <h1 className={styles.title}>分析</h1>
      <div className={style.container}>
        <div className={style.left}>
        <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
        </div>
        <div className={style.main}>
        <ul>
            {
               
                list.map(element => {
                  return (<li key={element.id}>{element.name}</li>)
                })
             
            }
               </ul>
          <Row >
            <Col >
              <Card>2</Card>
            </Col>
            <Col>
              <Card>2</Card>
            </Col>
            <Col>
              <Card>2</Card>
            </Col>
            <Col>
              <Card>2</Card>
            </Col>
          </Row>
        </div>
        <div className={style.right}>right</div>
      </div>
    </Fragment>
  );
};

export default Analysis;
