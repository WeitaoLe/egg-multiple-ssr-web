'use strict';
const io = require('../../moudules/io');
const config = require('../../moudules/apiconfig')

/**
 * 获得文章列表
 * @param {页数} pageIndex 
 * @param {获得条数} pageSize 
 * @param {分类ID} columnId 
 */
async function getArticle(pageIndex, pageSize, columnId) {
  let list = []
  let params = {
    pageNum: pageIndex || 1,
    pageCount: pageSize || config.PAGE_SIZE,
    rscolumns: config.LIST_COLUMNS,
    column: columnId
  }
  const rep = await io.get(`${config.API_DIR}/api/newsArticleList/`, {
    params: params
  })

  list = rep.data.datas.records
  return {
    list: list,
    total: list.length
  }
}

/**
 * 获得文章详情
 * @param {文章id} id 
 */
async function detailDatas(id) {
  let data = {}
  let params = {
    id: id
  }
  console.log('params==============', params)
  const rep = await io.get(`${config.API_DIR}/api/news/detail`, {
    params: params
  })
  data = rep.data.datas.article
  console.log("文章内容========", data)
  return {
    article: data
  }
}



exports.getPage = async (pageIndex, pageSize, columnId) => {
  return await getArticle(pageIndex, pageSize, columnId)
};

exports.getDetail = async id => {
  return await detailDatas(id)
};