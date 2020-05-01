import MainLayout from './main';
import '../../../asset/fonts/iconfont.css';


const content = '<div><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';

const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>{{title}}</title>
  <meta name="keywords" :content="keywords">
  <meta name="description" :content="description">
  <meta http-equiv="content-type" content="text/html;charset=utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</head>
<body :class="baseClass">
  <div id="app">${content}</div>
</body>
</html>`;

export default {
  name: 'Layout',
  props: ['title', 'description', 'keywords'],
  components: {
    MainLayout
  },
  computed: {
    vTitle() {
      return this.$root.title || this.title || '易观 - 数据驱动精益成长';
    },
    vKeywords() {
      return this.$root.keywords || this.keywords || '大数据分析,数据挖掘,云计算,物联网,运营分析,用户画像,应用评价,互联网+';
    },
    vDescription() {
      return this.$root.description || this.description || '易观打造了以海量数字用户资产及算法模型为核心的大数据分析工具、产品及解决方案，可以帮助企业高效管理数字用户资产和对产品进行精益化运营，有效升级业务，从而实现收入增长，成本降低和效率提升，并显著规避经营风险。';
    },
    baseClass() {
      return this.$root.baseClass;
    }
  },
  template: EASY_ENV_IS_NODE ? template : content
};