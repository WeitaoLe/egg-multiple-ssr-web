'use strict';
const io = require('axios');
const config = require('../../moudules/articleconfig')

// let list = []

// async function getArticle(pageIndex, pageSize) {
//   console.log("接口接到请求的page============",pageIndex)
//   let params = {
//     pageNum: pageIndex || 1,
//     pageCount: pageSize || 5,
//     rscolumns: config.LIST_COLUMNS
//   }
//   console.log("接口传递的参数===========",params)
//   const data = await io.get(`https://www.analysys.cn/api/newsArticleList/`, {
//     params: params
//   })
//   console.log("接口返回数据============",data.data.datas.records)

//   list = data.data.datas.records
// }

// exports.getPage = (pageIndex, pageSize) => {
//   getArticle(pageIndex, pageSize)

//   return {
//     list:list,
//     total:list.length
//   }
// };

async function getArticle(pageIndex, pageSize) {
  let list = []
  console.log("接口接到请求的page============",pageIndex)
  let params = {
    pageNum: pageIndex || 1,
    pageCount: pageSize || 5,
    rscolumns: 'id,maintitle,articeimage,author,source,publishdate,summary,starttime,endtime,columnId,field'
  }
  const data = await io.get(`https://www.analysys.cn/api/newsArticleList/`, {
    params: params
  })
  console.log("接口返回数据============",data.data.datas.records)

  list = data.data.datas.records

  return {
    list:list,
    total:list.length
  }
}

exports.getPage = async (pageIndex, pageSize)  =>  {
  return await getArticle(pageIndex, pageSize)
};

exports.getDetail = id => {
  return data.list.filter(item => {
    return item.id === id;
  }).slice(0, 1);
};