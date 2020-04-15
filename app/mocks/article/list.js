'use strict';
const io = require('axios');

let total = 100;
let listData = [];
let getArticle = () => {
  io.get(`http://boyue1.analysys.cn/index/reportlist`).then(res => {
    listData = res.data.datas.listData
  });
}
getArticle()


exports.getPage = (pageIndex = 1, pageSize = 10) => {
  const start = (pageIndex - 1) * pageSize;
  const end = start + Number(pageSize);
  return {
    list: listData,
    total
  };
};

exports.getDetail = id => {
  return data.list.filter(item => {
    return item.id === id;
  }).slice(0, 1);
};