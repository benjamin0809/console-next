/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: your name
 * @Date: 2021-12-21 18:53:54
 * @LastEditTime: 2021-12-23 23:51:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\src\components\ben-image.tsx
 */
import React, { useState } from "react";
import { Col, Image } from "antd";
import styles from './compnent.module.less'
type BenImage = {
  frontCoverSrc?: string;
  images: string[];
};
const BenImage: React.FC<BenImage> = (props) => {
  const [visible, setVisible] = useState(false);
  const frontCoverSrc = (props.frontCoverSrc || props.images?.[0]) + '-h4';
  // console.log(props.images);
  return (
    <>
    <Col   className={styles.piece} data-count={props.images?.length}>
      <Image 
        preview={{ visible: false, mask:  (<div>查看大图</div>) }}
        placeholder={true}
        height={300}
        src={frontCoverSrc}
        onClick={() => setVisible(true)}
      />
      </Col>
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis)}}
        >
          {props.images.map((item) => { 
            return <Image src={item + '-h4'} key={item} />;
          })}
        </Image.PreviewGroup>
      </div>
      </>
  );
};

export default BenImage;
