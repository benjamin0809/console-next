import React, { useState } from "react";
import { Image } from "antd";

type BenImage = {
  frontCoverSrc?: string;
  images: string[];
};
const BenImage: React.FC<BenImage> = (props) => {
  const [visible, setVisible] = useState(false);
  const frontCoverSrc = props.frontCoverSrc || props.images[0]
  return (
    <>
      <Image
        preview={{ visible: false }}
        height={300}
        src={frontCoverSrc}
        onClick={() => setVisible(true)}
      />
      <div >
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {props.images.map((item) => {
            <Image src={item} key={item} />;
          })}
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default BenImage
