'use strict';
const io = require('../../moudules/io');
const config = require('../../moudules/apiconfig')


async function getArticle(pageIndex, pageSize,columnId) {
  let list = []
  let params = {
    pageNum: pageIndex || 1,
    pageCount: pageSize || config.PAGE_SIZE,
    rscolumns: config.LIST_COLUMNS,
    column:columnId
  }
  console.log('params==============',params)
  const data = await io.get(`${config.API_DIR}/api/newsArticleList/`, {
    params: params
  })

  list = data.data.datas.records
  return {
    list:list,
    total:list.length
  }
}



exports.getPage = async (pageIndex, pageSize, columnId)  =>  {
  return await getArticle(pageIndex, pageSize, columnId)
};

exports.getDetail = id => {
  return data.list.filter(item => {
    return item.id === id;
  }).slice(0, 1);
};