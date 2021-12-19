/*
 * @Author: your name
 * @Date: 2021-12-10 19:51:52
 * @LastEditTime: 2021-12-19 22:46:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \console-next\next.config.js
 */
/** @type {import('next').NextConfig} */

const withLess = require("next-with-less");

module.exports = withLess({
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['cdn.popochiu.com', 'image.popochiu.com', 'i5.hoopchina.com.cn'],
  },
  // assetPrefix: "https://cdn.mydomain.com",
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "@primary-color": "#f74a49",
        "@border-radius-base": ".5em",
      },
    },
  },
});

// const withCSS = require('@zeit/next-css')
// const withLess = require('@zeit/next-less')
// const withSass = require("@zeit/next-sass");

// module.exports = withCSS({
//     reactStrictMode: true,
//    swcMinify: false,
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   },
//   ...withLess(
//     withSass({
//       lessLoaderOptions: {
//         javascriptEnabled: true,
//       },
//     })
//   ),
// });

// const withCSS = require("@zeit/next-css");
// const withLess = require("@zeit/next-less");
// module.exports = withLess(
//     {
//         reactStrictMode: true,
//         swcMinify: false,
//       }
// );

// module.exports = {
//     reactStrictMode: true,
//     swcMinify: false,
//   }

// module.exports = withLess({
//     reactStrictMode: true,
//     swcMinify: false,
//   lessLoaderOptions: {
//     lessOptions: {
//       modifyVars: {
//         "@primary-color": "#f74a49",
//         "@border-radius-base": ".5em"
//       }
//     }
//   }
// });
// module.exports = {
//   reactStrictMode: true,
//   swcMinify: false
// }
