<template>
  <Layout :title="title">
    <div class="container article-wraper">
      <div class="row">
        <div class="col-xs-12 col-md-9">
          <ul id="articleList">
            <li v-for="item in lists" :key="item.id" class="article-item clearfix">
              <div class="row">
                <div class="article-img">
                  <img v-if="item.articeimage" :src="formatImgDir(item)" alt />
                  <div v-else class="imgback">
                    <p>{{ item.maintitle }}</p>
                  </div>
                </div>
                <div class="article-content">
                  <h2>
                    <a :href="formatArticleHref(item)" target="_blank">{{ item.maintitle }}</a>
                  </h2>
                  <div>
                    <div class="article-summary">{{ item.summary }}</div>
                    <div>
                      <span>
                        <time class="timeago">{{ item.publishdate }}</time>
                      </span>
                      <span class="tauthor">
                        <a href="#" target="_blank" class="get" v-html="item.author"></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div id="pagerBottom" class="smart-pager" v-if="isLoading">
            <img src="../../../asset/images/loading.gif" />
          </div>
          <pagination :data="pageTotal"></pagination>
        </div>
        <div class="col-md-3">
          <hotNews :datas="lists"></hotNews>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss">
.article-wraper {
  margin-top: 20px;
  .article-item {
    width: 100%;
    padding: 0px 0 20px;
    &:hover {
      .article-content {
        h2 {
          a {
            color: #0097e0;
          }
        }
      }
    }
    .article-img {
      overflow: hidden;
      position: relative;
      float: left;
      width: 280px;
      height: 190px;
      &:hover {
        img,
        .imgback {
          transform: scale(1.1);
        }
      }
      img {
        width: 280px;
        height: 190px;
        transition: all 0.8s ease-in-out;
      }
      .imgback {
        width: 280px;
        height: 190px;
        background: url("../../../asset/images/news-default-bg.jpg") no-repeat;
        background-size: cover;
        color: #fff;
        font-size: 12px;
        padding-top: 20px;
        transition: all 0.8s ease-in-out;
      }
    }
    .article-content {
      width: 100%;
      padding-left: 300px;
      h2 {
        a {
          font-size: 18px;
          margin: 10px 0 20px 0;
          color: #222222;
          font-weight: 400;
        }
      }
      .article-summary {
        font-size: 14px;
        color: #666;
        line-height: 32px;
        margin: 20px 0 25px;
      }
    }
  }
}
</style>
<script type="text/babel">
import { formatDate, baseConfig } from "framework/utils/utils.js";
import pagination from "component/base/page";
import hotNews from "component/layout/standard/right/hotNews";
export default {
  components: { pagination, hotNews },
  data() {
    return {
      isFinish: false,
      isLoading: false,
      pageIndex: 1,
      pageSize: 10
    };
  },
  computed: {
    lists() {
      return JSON.parse(unescape(this.list));
    },
    pageTotal() {
      return this.total;
    },
    title() {
      return "分析报告" + baseConfig.baseSuffix;
    }
  },
  methods: {
    formatImgDir(item) {
      return `https://www.analysys.cn${item.articeimage}`;
    },
    formatArticleHref(item) {
      return `/article/analysis/detail/${item.id}`;
    }
  },
  mounted() {}
};
</script>