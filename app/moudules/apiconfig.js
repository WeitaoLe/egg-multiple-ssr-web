// // `数据新知`各个分类的路由子路径
// export const ARTICLE_CATEGORY = {
//   LATEST: 'latest',
//   GROWTH: 'growth',
//   TECHNOLOGY: 'tech',
//   CASE: 'case',
//   PRODUCT: 'product',
//   INSIGHT: 'insight'
// }

// // `易观动态`各个分类的路由子路径
// export const TREND_CATEGORY = {
//   NEWS: 'news',
//   ACTIVITY: 'activity'
// }

// // 分类的路由和 id 字典
// export const CATEGORY_MAP = {
//   [ARTICLE_CATEGORY.LATEST]: '',
//   [ARTICLE_CATEGORY.GROWTH]: '15006',
//   [ARTICLE_CATEGORY.TECHNOLOGY]: '15007',
//   [ARTICLE_CATEGORY.CASE]: '15008',
//   [ARTICLE_CATEGORY.PRODUCT]: '10184',
//   // 注意是中文逗号
//   [ARTICLE_CATEGORY.INSIGHT]: '8，22',
//   [TREND_CATEGORY.NEWS]: '1051',
//   [TREND_CATEGORY.ACTIVITY]: '20'
// }

// export const CATEGORY_MAP_NAME = {
//   15006: '精益成长',
//   15007: '技术分享',
//   15008: '场景案例',
//   10184: '产品动态',
//   8: '行业洞察',
//   22: '行业洞察'
// }

// // 搜索结果详情的路由对应关系
// export const SEARCH_DETAIL_MAP = {
//   15006: `/article/${ARTICLE_CATEGORY.GROWTH}/detail/`,
//   15007: `/article/${ARTICLE_CATEGORY.TECHNOLOGY}/detail/`,
//   15008: `/article/${ARTICLE_CATEGORY.CASE}/detail/`,
//   10184: `/article/${ARTICLE_CATEGORY.PRODUCT}/detail/`,
//   8: `/article/${ARTICLE_CATEGORY.INSIGHT}/detail/`,
//   22: `/article/${ARTICLE_CATEGORY.INSIGHT}/detail/`,
//   1051: `/trend/${TREND_CATEGORY.NEWS}/detail/`,
//   20: `/trend/${TREND_CATEGORY.ACTIVITY}/detail/`,
//   15011: `/trend/${TREND_CATEGORY.ACTIVITY}/detail/`
// }

// API地址
exports.API_DIR = 'https://www.analysys.cn'

// `数据新知`和`易观动态`文章列表的初始数据条数
exports.INIT_ARTICLE_COUNT = 100

// `数据新知`和`易观动态`文章列表每次显示的条数
exports.PAGE_SIZE = 10

// `数据新知`和`易观动态`文章列表需要包含的字段
exports.LIST_COLUMNS = 'id,maintitle,articeimage,author,source,publishdate,summary,starttime,endtime,columnId,field'