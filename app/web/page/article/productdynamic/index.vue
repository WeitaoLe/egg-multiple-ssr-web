<template>
  <Layout :title="title">
    <div class="container smart-container">
      <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-md-9">
          <ul class="smart-artiles" id="articleList">
            <li v-for="item in lists" :key="item.id">
              <div class="point">+{{ item.hits }}</div>
              <div class="card">
                <h2>
                  <a :href="articleHref(item)" target="_blank">{{ item.maintitle }}</a>
                </h2>
                <div>
                  <ul class="actions">
                    <li>
                      <time class="timeago">{{ item.moduleName }}</time>
                    </li>
                    <li class="tauthor">
                      <a href="#" target="_blank" class="get" v-html="item.author"></a>
                    </li>
                    <li>
                      <a>+收藏</a>
                    </li>
                    <li>
                      <span class="timeago">{{ item.summary }}</span>
                    </li>
                    <li>
                      <span class="timeago"></span>
                    </li>
                  </ul>
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
.page {
  li {
    float: left;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-right: 10px;
    border: 1px solid #333;
    a {
      font-size: 16px;
      color: blue;
      display: inline-block;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
<script type="text/babel">
import { formatDate } from "framework/utils/utils.js";
import pagination from "component/base/page";
import hotNews from "component/layout/standard/right/hotNews";
export default {
  components: { pagination, hotNews },
  data() {
    return {
      title: "产品动态",
      isFinish: false,
      isLoading: false,
      pageIndex: 1,
      pageSize: 10
    };
  },
  computed: {
    lists() {
      return this.list;
    },
    pageTotal() {
      return this.total;
    }
  },
  mounted() {
    console.log(this.total);
  },
  methods: {
    articleHref(item) {
      return `/article/detail/${item.id}`;
    }
  }
};
</script>