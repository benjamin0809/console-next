/*
 * @Author: your name
 * @Date: 2021-12-21 18:53:54
 * @LastEditTime: 2021-12-21 19:58:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\src\components\ben-image.tsx
 */
import React, { useState } from "react";
import { Col, Image } from "antd";

type BenImage = {
  frontCoverSrc?: string;
  images: string[];
};
const BenImage: React.FC<BenImage> = (props) => {
  const [visible, setVisible] = useState(false);
  const frontCoverSrc = props.frontCoverSrc || props.images?.[0];
  console.log(props.images);
  return (
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      <Image
        preview={{ visible: false }}
        height={300}
        src={frontCoverSrc}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {props.images.map((item) => { 
            return <Image src={item} key={item} />;
          })}
        </Image.PreviewGroup>
      </div>
    </Col>
  );
};

export default BenImage;
